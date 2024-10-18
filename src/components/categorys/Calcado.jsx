/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-comment-textnodes */
import ReactLoading from "react-loading";
import { ProductProd, LoadingPage, TitleProduct } from "./styles";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { Header } from "../header";
import { SlidsListProducts } from "./SlidsListProducts";
import { SlidsMenu } from "../slids/SlidsMenu";
import Footer from "../footer/footer";

const Example = () => (
  /*
    blank
    balls
    bars
    bubbles
    cubes
    cylon
    spin
    spinningBubbles
    spokes 
    */
  <LoadingPage>
    <ReactLoading type="spokes" color="aqua" height={"100%"} width={"100%"} />
  </LoadingPage>
);

//const product = []

export const Calcado = () => {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  //const history = useHistory()

  //const products = useSelector(productSlace => productSlace.products.items)

  /*function LocalSto(e) {
    localStorage.removeItem("id");
    localStorage.removeItem("bar_code");
    localStorage.removeItem("categoryId");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);
    localStorage.setItem("bar_code", e.bar_code);
  }*/

  // Aqui estamos fazenso as requisição na API REstful com o axio,
  //e recebendo os dados atraves do useState para poder manipula os estados

  const [categoroy, setCategory] = useState([]);
  const [categoroyData, setCategoryData] = useState([]);

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() => {
    (async () => {
      const reqName = await api.get("/category");
      const resName = await reqName.data;
      const req = await api.get(
        "/category/e3dbb7aa-d442-4721-ac17-18c61e895da8"
      );
      const res = await req.data[0].products_categories;

      setCategory(resName);
      setCategoryData(res);
    })();
  }, []);

  const NameCategory = categoroy.map((res) => res.name);

  return (
    <>
      <Header />
      <SlidsListProducts />
      <SlidsMenu />

      {categoroy == "" && categoroyData == "" ? (
        <Example />
      ) : (
        <div>
          <br />
          <TitleProduct>
            <h2 className="titleProduct">
              {categoroy == "" ? "" : NameCategory[12]}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {categoroyData.map((res) => {
                const { id, name, image, price } = res.products;

                let percentual = 0.25;
                let aumento = price * percentual;
                let novo_price = price - aumento;

                return (
                  <Link to={"/desc/" + id} target="_blank">
                    <div key={id}>
                      <img src={image[0]} alt="img" />
                      <h5>{name}</h5>
                      <b className="frete">Frete Gratis</b>
                      <img src="card.jpg" alt="img" className="cartImg" />
                      <span>
                        <p className="p">
                          <FaCreditCard className="cartao" /> Em até 12x sem
                          juros
                        </p>
                      </span>
                      <h4 className="oldPrice">R${price},00 </h4>
                      <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                    </div>
                  </Link>
                );
              })}
            </section>
          </ProductProd>
        </div>
      )}
      <Footer />
    </>
  );
};
