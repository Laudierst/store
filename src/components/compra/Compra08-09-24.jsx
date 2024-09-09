/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { ButtonBox, InputBox, CompraStyle, Title } from "./stylend";
import { FormBox, LoadingPage } from "./FormBox";
import api from "../../api/api";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import emailjs from "@emailjs/browser";
//import { toast } from "react-toastify";
import axios from "axios";

console.clear();

function Compra() {
  //Aqui estamos recebendo os respequitivos valores de arrey contido no estados gerenciado pelo redux
  const cart = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);
  //const tmItens = useSelector((state) => state.cart.tmMedidas);
  //const tmCor = useSelector((state) => state.cart.tmCores);

  //console.log(tmCor[0].cor)

  const productAmount = [cartTotal.cartTotalAmount];
  //const productQuantity = [cartTotal.cartTotalQuantyti]

  const GeraCode = Math.random();
  const ConvertCode = JSON.stringify(GeraCode);

  // Aqui abaixo estamos criando arrey de estados para receber os valores do input vindo co form compra com useSatate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [house, setHouse] = useState("");
  const [cpf, setCpf] = useState("");
  const [code_compra] = useState(ConvertCode);
  //const [ productslist] = useState(res)

  const onchangeCep = (e) => {
    e.preventDefault();
    const envento = e.target.value;
    //const onlyNumbers = /[0-9]/;
    //const key = String.fromCharCode(e.keyCode);

    //let regex = /^[A-Za-z][0-9]{7}$/;
    if (envento.length === 8) {
      console.log(envento);

      (async () => {
        await axios
          .get(`https://brasilapi.com.br/api/cep/v2/${envento}`)
          .then((response) => {
            //console.log(response.data);
            //const res = await req.data;
            setCep(response.data);
          })
          .catch((erro) => {
            alert("Coloque um cep valido");
          });
      })();
    }
  };

  const Example = () => (
    //Aqui ja criamos um componente com ReactLoading para aaguarda o carregamento da pagia
    <LoadingPage>
      <ReactLoading type="spokes" color="aqua" height={"100%"} width={"100%"} />
    </LoadingPage>
  );

  //Criei esse arrey para os dados formatado para melhor manuzeio dos dados que vem do input via useState
  const data = {
    name,
    email,
    phone,
    state,
    city,
    cep,
    street,
    number,
    district,
    cpf,
    /*productslist,*/
    apartment_or_house: house,
    code_compra,
  };

  let percentual = 0.25;
  let aumento = productAmount[0] * percentual;
  let novo_amount = productAmount[0] - aumento;
  let aumentoPrice = cart[0].price * percentual;
  let novo_price = cart[0].price - aumentoPrice;
  //E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api

  const priceProduct = Number(novo_amount);

  let prod = {
    title: cart[0]?.name,
    price: priceProduct,
    image: cart[0]?.image,
    category: "OnShops",
    description: "OnShops toda loja em promoção",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

    //let res1 = JSON.stringify(cart[0].image[0]);
    let res4 = JSON.stringify(adress);
    //let res5 = JSON.stringify(novo_amount);

    const templeteParams = {
      from_name: name ? name : "",
      adress: `${res4}` ? `${res4}` : "",
      email: email ? email : "",
      phone: phone ? phone : "",
      image1: `${cart[0].image}` ? `${cart[0].image}` : "",
      nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
      quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
      price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",

      cor1: `${cart[0].cor}` ? `${cart[0].cor}` : "",
      medidas1: `${cart[0].size}` ? `${cart[0].size}` : "",
      url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",
    };

    //console.log(prod);

    emailjs
      .send(
        "service_lflbrlm",
        "template_6bgdvos",
        templeteParams,
        "uh-vq_J-Q9IBlCdVH"
      )
      .then(
        (res) => {
          console.log("EMAIL ENVIADO", res.status, res.text);
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );

    const PagamentoMercadoPago = async () => {
      await api.post("payment", prod).then(
        (res) => (window.location.href = res.data.response.body.init_point),
        (err) => {
          alert(err.response.data);
          //console.log(prod)
        }
      );
    };
    PagamentoMercadoPago();
  };

  //Nova mudança

  return (
    <>
      {cart == "" ? (
        <Example />
      ) : (
        <CompraStyle>
          <FormBox>
            <Title>Preencha com seus dados</Title>
            <img src="Logo.png" alt="logo" />
            <hr />
            <form onSubmit={handleSubmit}>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  data-ls-module="charCounter"
                  maxlength="30"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name.name}
                  required
                />
                <label htmlFor="">Nome completo</label>
              </InputBox>
              <InputBox>
                <input
                  name="email"
                  data-ls-module="charCounter"
                  maxlength="40"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email.email}
                  required
                />
                <label htmlFor="">E-mail</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone.phone}
                  required
                />
                <label htmlFor="">Telefone</label>
              </InputBox>

              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="cep"
                  id="cep"
                  onChange={(e) => onchangeCep(e)}
                  value={cep.cep}
                  required
                />
                <label htmlFor="">Cep</label>
              </InputBox>
              {cep ? (
                <button
                  type="submit"
                  className="btn-cep"
                  onClick={() => setCep("")}
                >
                  Trocar cep
                </button>
              ) : (
                ""
              )}
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={cep.state}
                  required
                />
                <label htmlFor="">Estado</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={cep.city}
                  required
                />
                <label htmlFor="">Cidade</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="district"
                  id="district"
                  onChange={(e) => setDistrict(e.target.value)}
                  value={cep.neighborhood}
                  required
                />
                <label htmlFor="">Bairro</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="street"
                  id="street"
                  onChange={(e) => setStreet(e.target.value)}
                  value={cep.street}
                  required
                />
                <label htmlFor="">Rua</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="number"
                  id="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number.number}
                  required
                />
                <label htmlFor="">Numero</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="house"
                  id="house"
                  onChange={(e) => setHouse(e.target.value)}
                  value={house.house}
                  required
                />
                <label htmlFor="">Complemento AP/CASA</label>
              </InputBox>

              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="house"
                  id="house"
                  onChange={(e) => setCpf(e.target.value)}
                  value={house.cpf}
                  required
                />
                <label htmlFor="">CPF/CNPJ</label>
              </InputBox>
              <ButtonBox type="submit">Finaliza Compra</ButtonBox>
            </form>
          </FormBox>
        </CompraStyle>
      )}
    </>
  );
}

export default Compra;
