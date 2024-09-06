/* eslint-disable eqeqeq */
import { useState } from "react";
import { ProductRelacionados } from "./Relacionados";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { FaCreditCard } from "react-icons/fa";
import { useQuery } from "react-query";
import imgcart from "./images/card.jpg";

export function Realacionandos() {
  //console.clear()

  const [data, setData] = useState([]);

  /*const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }*/

  //const localId = localStorage.getItem("categoryId")

  const { isLoading } = useQuery("meuproduto", async () => {
    const req = await api.get(`/product`);
    const res = await req.data;

    setData(res);

    if (isLoading) {
      return <div className="load">Carregando...</div>;
    }
  });

  const localId = localStorage.getItem("id");
  //const BNT = localStorage.getItem("name")

  //const productFilter = product.filter(product => product)
  //const prodFilter = [...productFilter]
  //const dataProductFilter2 = prodFilter.filter(productData => (productData.id === localId))

  const filterProduct = data.map((pro) => pro);
  const dataProductFilter = filterProduct.filter(
    (productData) => productData.id === localId
  );
  const filterProductBarcode = dataProductFilter.map((pro) => pro.bar_code);
  const dataProductFilterBarcodeList = filterProduct.filter(
    (productData) => productData.bar_code == filterProductBarcode[0]
  );

  console.log(dataProductFilterBarcodeList);

  function LocalSto(e) {
    localStorage.removeItem("id");
    localStorage.removeItem("bar_code");
    localStorage.removeItem("categoryId");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);
    localStorage.setItem("bar_code", e.bar_code);
    const ids = localStorage.getItem("id");

    window.history.pushState(null, null, "/" + ids);

    window.location.reload();
  }

  if (!data || !data.length) return null;

  return (
    <>
      <ProductRelacionados>
        <section className="section">
          {dataProductFilterBarcodeList.map((res) => {
            const { id, name, image, price } = res;

            let percentual = 0.25;
            let aumento = price * percentual;
            let novo_price = price - aumento;

            return (
              <Link to={"/" + id} onClick={() => LocalSto(res)}>
                <div key={id} className="divRelation">
                  <img src={image[0]} alt="img" className="imgRelation" />
                  <h5 className="h5Relation">{name}</h5>
                  <b className="frete">Frete Gratis</b>
                  <img src={imgcart} alt="img" className="cartImg" />
                  <span>
                    <p className="pRelation">
                      <FaCreditCard className="cartao" /> Em até 12x sem juros
                    </p>
                  </span>
                  <h3 className="oldPrice h3Relation">R${price},00 </h3>
                  <h4 className="oldPricereal h4Relation"> R$ {novo_price},00</h4>
                </div>
              </Link>
            );
          })}
        </section>
      </ProductRelacionados>
    </>
  );
}
