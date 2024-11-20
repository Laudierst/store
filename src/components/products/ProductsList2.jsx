import { ProductProd } from "./products";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderList } from "../header/indexList";
//import SlidsProducts from "../slids/SlidsProducts";
//import { SlidsMenu } from "../slids/SlidsMenu";
import Footer from "../footer/footer";
import { SlidsListProducts } from "../slids/SlidsListProducts";
import "./styles.css";
import api from "../../api/api";

export const Products = () => {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  /*const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };*/

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await api.get("/product");
      const res = await req.data;

      setData(res);
    })();
  }, []);

  return (
    <>
      <HeaderList />
      <div>
        <SlidsListProducts />

        <ProductProd>
          <section>
            {data.map((res) => {
              const { id, name, image, price } = res;

              let percentual = 0.25;
              let aumento = price * percentual;
              let novo_price = price - aumento;

              return (
                <Link to={"/desc/" + id}>
                  <div key={id}>
                    <img src={image[0]} alt="img" />
                    <h5>{name}</h5>
                    <b className="frete">Frete Gratis</b>
                    <img src="card.jpg" alt="img" className="cartImg" />
                    <span>
                      <p className="p">
                        <FaCreditCard className="cartao" /> Em até 12x sem juros
                      </p>
                    </span>
                    <h3 className="oldPrice">R${price},00 </h3>
                    <h1 className="oldPricereal"> R$ {novo_price},00</h1>
                  </div>
                </Link>
              );
            })}
          </section>
        </ProductProd>
      </div>
      <Footer />
    </>
  );
};
