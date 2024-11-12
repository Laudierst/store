/* eslint-disable eqeqeq */
import { useState, useRef } from "react";
import { CoontainerSlids } from "./SlidsDescriptionOferta";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { FaCreditCard } from "react-icons/fa";
import { useQuery } from "react-query";

export function SlidsDescriptionOfertas() {
  //console.clear()

  const [data, setData] = useState([]);
  const carrousel = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //const localId = localStorage.getItem("categoryId")

  const { isLoading } = useQuery("meuproduto", async () => {
    const req = await api.get(`/product`);
    const res = await req.data;

    setData(res);

    if (isLoading) {
      return <div className="load">Carregando...</div>;
    }
  });

  //const localId = localStorage.getItem("id");
  let url = window.location.pathname;
  let parts = url.split("/");
  let localId = parts.pop() || parts.pop();
  //const BNT = localStorage.getItem("name")

  //const productFilter = product?.filter(product => product)
  //const prodFilter = [...productFilter]
  //const dataProductFilter2 = prodFilter?.filter(productData => (productData.id === localId))

  const filterProducts = data.map((pro) => pro);

  const filterListProduct = [filterProducts];

  const dataProductFilter = filterListProduct[0]?.filter(
    (productData) => productData.id === localId
  );
  const filterProductBarcode = dataProductFilter.map((pro) => pro.bar_code);
  const dataProductFilterBarcodeList = filterListProduct[0]?.filter(
    (productData) => productData.bar_code == filterProductBarcode[0][0]
  );

  //console.log(dataProductFilterBarcodeList)

  function LocalSto(e) {
    localStorage.removeItem("id");
    localStorage.removeItem("bar_code");
    localStorage.removeItem("categoryId");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);
    localStorage.setItem("bar_code", e.bar_code);

    //window.location.reload()
    scrollToTop();
  }

  if (!data || !data.length) return null;

  const hendleLeftClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    //console.log(e, "teste")
  };

  const hendleRigthClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    //console.log(e, "teste")
  };

  return (
    <>
      <CoontainerSlids>
        <h4>Produtos relacionados</h4>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carouselSlids" ref={carrousel}>
          {dataProductFilterBarcodeList.map((res) => {
            const { id, name, image, price } = res;

            let percentual = 0.25;
            let aumento = price * percentual;
            let novo_price = price - aumento;

            return (
              <Link
                to={"/desc" + id}
                target="_blank"
                onClick={() => LocalSto(res)}
              >
                <div key={id}>
                  <img src={image[0]} alt="img" />
                  <h5>{name}</h5>
                  <b className="frete">Frete Gratis</b>
                  <img
                    src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg"
                    alt="img"
                    className="cartImg"
                  />
                  <span>
                    <p className="p">
                      <FaCreditCard className="cartao" /> Em até 12x sem juros
                    </p>
                  </span>
                  <h3 className="oldPrice">R${price},00 </h3>
                  <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext className="buttons2" />
          </button>
        </div>
      </CoontainerSlids>
    </>
  );
}
