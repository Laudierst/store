//import React from "react";
import { useSelector } from "react-redux";

export const UmaCompra = ({ data }) => {
  console.log(data);
  //const [code_compra] = useState(ConvertCode);

  const cart = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);
  const productAmount = [cartTotal.cartTotalAmount];
  const GeraCode = Math.random();
  const ConvertCode = JSON.stringify(GeraCode);

  let percentual = 0.25;
  let aumento = productAmount[0] * percentual;
  let novo_amount = productAmount[0] - aumento;
  let aumentoPrice = cart[0].price * percentual;
  let novo_price = cart[0].price - aumentoPrice;

  let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

  //let res1 = JSON.stringify(cart[0].image[0]);
  let res4 = JSON.stringify(adress);
  let res5 = JSON.stringify(novo_amount);

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

    total: `${res5}` ? `${res5}` : "",
  };

  console.log(templeteParams);

  /*emailjs
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
    );*/

  /*  const PagamentoMercadoPago = async () => {
    await api.post("payment", prod).then(
      (res) => (window.location.href = res.data.response.body.init_point),
      (err) => {
        alert(err.response.data);
        //console.log(prod)
      }
    );
  };
  PagamentoMercadoPago();*/
};
