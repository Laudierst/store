import { useNavigate } from "react-router-dom";
import "./style.css";
import { LoadingPage } from "../products/products";
import ReactLoading from "react-loading";
//import api from "../../api/api";
import { useState } from "react";
import { Buttons, Container, ContainerSearch } from "./styles";
import Cart from "../cart";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { useSelector } from "react-redux";

export const SeartResults = () => {
  //const [data, setData] = useState([]);
  //const [searchResult, setSearchResult] = useState([]);

  const [searchTme, setSearchTme] = useState("");
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const length = useSelector((state) => state.cart.cartItems.length);
  const products = useSelector((state) => state.products.items);
  //const data = [products];

  const productItens = [products];

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const navigate = useNavigate();

  function LocalSto(e) {
    localStorage.removeItem("id");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);

    setTimeout(() => {
      <LoadingPage>
        <ReactLoading
          type="spokes"
          color="aqua"
          height={"100%"}
          width={"100%"}
          delay={"100"}
        />
      </LoadingPage>;
    }, 300);

    //const ids = localStorage.getItem("id");
    navigate("/desc");
    window.location.reload();
  }

  //const resutList = data.map((item) => {
  return (
    <>
      <Container>
        <form onChange={(e) => setSearchTme(e.target.value)}>
          <input type="search" name="test" id="test" placeholder="Pesquisar" />
          {/*<HiMiniMagnifyingGlass className="lupaMarge" />*/}
        </form>
        <Buttons>
          <div onClick={handleCartClick}>
            {length === 0 ? "" : <b className="bg">{length}</b>}
            {length > 0 ? (
              <SlBasketLoaded style={{ fontSize: 35, marginLeft: "-2px" }} />
            ) : (
              <SlBasket style={{ fontSize: 35 }} />
            )}
          </div>
        </Buttons>
        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </Container>
      <div>
        {searchTme.length >= 4
          ? productItens[0]
              ?.filter((val) => {
                if (searchTme === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTme.toLowerCase())
                ) {
                  return val;
                } else {
                  return null;
                }
              })
              .map((item) => {
                const { id, name, image } = item;

                return (
                  <ContainerSearch>
                    {searchTme.length >= 4 ? (
                      <div onClick={() => LocalSto(item)}>
                        <div key={id} style={{ textDecoration: "none" }}>
                          <img src={image[0]} alt="img" />
                        </div>
                        <p>{name}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </ContainerSearch>
                );
              })
          : ""}
      </div>
    </>
  );
};
