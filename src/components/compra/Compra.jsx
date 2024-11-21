/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { ButtonBox, InputBox, CompraStyle, Title } from "./stylend";
import { FormBox, LoadingPage } from "./FormBox";
import api from "../../api/api";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";

console.clear();

function Compra() {
  //Aqui estamos recebendo os respequitivos valores de arrey contido no estados gerenciado pelo redux
  const cartUm = useSelector((state) => state.cart.cartItems);
  const cartDois = useSelector((state) => state.cart.cartItems);
  const cartTres = useSelector((state) => state.cart.cartItems);
  const cartQuatro = useSelector((state) => state.cart.cartItems);
  const cartSinco = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);

  const GeraCode = Math.random();
  const ConvertCode = JSON.stringify(GeraCode);

  // Aqui abaixo estamos criando arrey de estados para receber os valores do input vindo co form compra com useSatate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [house, setHouse] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  //const [ResultPhone, setPhoneResult] = useState("");
  //const [ResulCpf, setCpfResult] = useState("");
  const [code_compra] = useState(ConvertCode);

  const dataCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  const dataPhone = phone.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");

  console.log(dataPhone);
  const onchangeCep = (e) => {
    e.preventDefault();
    const envento = e.target.value;
    //const onlyNumbers = /[0-9]/;
    //const key = String.fromCharCode(e.keyCode);

    //let regex = /^[A-Za-z][0-9]{7}$/;
    if (envento.length === 8) {
      //console.log(envento);

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

  let novo_priceDois = cartDois[1]?.price;

  //let aumentoPriceTres = cartTres[2]?.price * percentual;
  let novo_priceTres = cartTres[2]?.price;

  //let aumentoPriceQuatro = cartQuatro[3]?.price * percentual;
  let novo_priceQuatro = cartQuatro[3]?.price;

  //let aumentoPriceSinco = cartSinco[4]?.price * percentual;
  let novo_priceSinco = cartSinco[4]?.price;

  let prod = {
    title: cartUm[0]?.name,
    price: cartTotal.cartTotalAmount,
    image: cartUm[0]?.image,
    category: "PensanoEmMim",
    description: "PensanoEmMim toda loja em promoção",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      cartUm[0] &&
      cartDois[1] == undefined &&
      cartTres[2] == undefined &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(cartTotal.cartTotalAmount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartUm[0].image}` ? `${cartUm[0].image}` : "",
        nameproduct1: `${cartUm[0].name}` ? `${cartUm[0].name}` : "",
        quanty1: `${cartUm[0].cartQuantity}` ? `${cartUm[0].cartQuantity}` : "",
        price1: `${cartTotal.cartTotalAmount}`
          ? `${cartTotal.cartTotalAmount * cartDois[0]?.cartQuantity}`
          : "",
        cor1: `${cartUm[0].cor}` ? `${cartUm[0].cor}` : "",
        medidas1: `${cartUm[0].size}` ? `${cartUm[0].size}` : "",
        codigo1: `${code_compra}` ? `${code_compra}` : "",
        url_product1: `${cartUm[0].url_product}`
          ? `${cartUm[0].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
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

      if (cartUm[0]) {
        const ids = JSON.stringify(cartUm[0].id);
        const names = JSON.stringify(cartUm[0].name);
        const images = JSON.stringify(cartUm[0].image[0]);
        const prices = JSON.stringify(cartTotal.cartTotalAmount);
        const cartQuantitys = JSON.stringify(cartUm[0].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra";

        const ArreyData = [
          lembrete,
          "______________________________________________________________________________________________________________",
          cvId,
          cvName,
          cvImage,
          cvPrice,
          cvQuantity,
          cvTamnho,
          cvCorres,
          cvCodeCompra,
          "_______________________________________________________________________________________________________________",
          "Dados do Cliente abaixo!",
          "_______________________________________________________________________________________________________________",
          "Nome: " + name,
          "Telefone: " + phone,
          "Email: " + email,
          "_______________________________________________________________________________________________________________",
        ];

        const CreateCompra = {
          name: name,
          email: email,
          phone: dataPhone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: dataCpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[0].name,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cartUm[0].image,
          productSize: cartUm[0].size,
          productClolor: cartUm[0].cor,
          productUrl: templeteParams.url_product1,
        };

        //console.log(cpf);

        await api
          .post("/compra", CreateCompra)
          .then((res) => {
            toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });
      }
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] == undefined &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(cartTotal.cartTotalAmount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartDois[0].image}` ? `${cartDois[0].image}` : "",
        nameproduct1: `${cartDois[0].name}` ? `${cartDois[0].name}` : "",
        quanty1: `${cartDois[0].cartQuantity}`
          ? `${cartDois[0].cartQuantity}`
          : "",
        price1: `${cartTotal.cartTotalAmount}`,
        cor1: `${cartDois[0].cor}` ? `${cartDois[0].cor}` : "",
        medidas1: `${cartDois[0].size}` ? `${cartDois[0].size}` : "",
        codigo1: code_compra,
        url_product1: `${cartDois[0].url_product}`
          ? `${cartDois[0].url_product}`
          : "",

        image2: `${cartTres[1].image}` ? `${cartTres[1].image}` : "",
        nameproduct2: `${cartDois[1].name}` ? `${cartTres[1].name}` : "",
        quanty2: `${cartTres[1].cartQuantity}`
          ? `${cartTres[1].cartQuantity}`
          : "",
        price2: `${cartTres[1].cartQuantity}`,
        cor2: `${cartTres[1].cor}` ? `${cartTres[1].cor}` : "",
        medidas2: `${cartTres[1].size}` ? `${cartTres[1].size}` : "",
        codigo2: code_compra,
        url_product2: `${cartTres[1].url_product}`
          ? `${cartTres[1].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
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

      if (cartUm[0]) {
        const ids = JSON.stringify(cartUm[0].id);
        const names = JSON.stringify(cartUm[0].name);
        const images = JSON.stringify(cartUm[0].image[0]);
        const prices = JSON.stringify(cartTotal.cartTotalAmount);
        const cartQuantitys = JSON.stringify(cartUm[0].cartQuantity);
        const cartQuantitys2 = JSON.stringify(cartUm[1].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra";

        const ArreyData = [
          lembrete,
          "______________________________________________________________________________________________________________",
          cvId,
          cvName,
          cvImage,
          cvPrice,
          cvQuantity,
          cvTamnho,
          cvCorres,
          cvCodeCompra,
          "_______________________________________________________________________________________________________________",
          "Dados do Cliente abaixo!",
          "_______________________________________________________________________________________________________________",
          "Nome: " + name,
          "Telefone: " + phone,
          "Email: " + email,
          "_______________________________________________________________________________________________________________",
        ];

        const CreateCompra = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[0].name,
          productPrice: cartUm[0].price,
          productQuantity: cartQuantitys,
          productImage: cartUm[0].image,
          productSize: cartUm[0].size,
          productClolor: cartUm[0].cor,
          productUrl: cartUm[0].url_product,
        };

        const CreateCompra2 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[1].name,
          productPrice: cartUm[1].price,
          productQuantity: cartQuantitys2,
          productImage: cartUm[1].image,
          productSize: cartUm[1].size,
          productClolor: cartUm[1].cor,
          productUrl: cartUm[1].url_product,
        };

        //console.log(CreateCompra);

        await api
          .post("/compra", CreateCompra)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra2)
          .then((res) => {
            toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        //alert("Ta chegando");
      }

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
    }
    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(cartTotal.cartTotalAmount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartDois[0].image}` ? `${cartDois[0].image}` : "",
        nameproduct1: `${cartDois[0].name}` ? `${cartDois[0].name}` : "",
        quanty1: `${cartDois[0].cartQuantity}`
          ? `${cartDois[0].cartQuantity}`
          : "",
        price1: `${cartTotal.cartTotalAmount}`
          ? `${cartTotal.cartTotalAmount * cartDois[0].cartQuantity}`
          : "",
        cor1: `${cartDois[0].cor}` ? `${cartDois[0].cor}` : "",
        medidas1: `${cartDois[0].size}` ? `${cartDois[0].size}` : "",
        codigo1: code_compra,
        url_product1: `${cartDois[0].url_product}`
          ? `${cartDois[0].url_product}`
          : "",

        image2: `${cartTres[1].image}` ? `${cartTres[1].image}` : "",
        nameproduct2: `${cartDois[1].name}` ? `${cartTres[1].name}` : "",
        quanty2: `${cartTres[1].cartQuantity}`
          ? `${cartTres[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartTres[1].cartQuantity}`
          : "",
        cor2: `${cartTres[1].cor}` ? `${cartTres[1].cor}` : "",
        medidas2: `${cartTres[1].size}` ? `${cartTres[1].size}` : "",
        codigo2: code_compra,
        url_product2: `${cartTres[1].url_product}`
          ? `${cartTres[1].url_product}`
          : "",

        image3: `${cartTres[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartTres[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartTres[2].cartQuantity}`
          ? `${cartTres[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartTres[2].cartQuantity}`
          : "",
        cor3: `${cartTres[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartTres[2].size}` ? `${cartTres[2].size}` : "",
        codigo3: code_compra,
        url_product3: `${cartTres[2].url_product}`
          ? `${cartTres[2].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
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

      if (cartUm[0]) {
        const ids = JSON.stringify(cartUm[0].id);
        const names = JSON.stringify(cartUm[0].name);
        const images = JSON.stringify(cartUm[0].image[0]);
        const prices = JSON.stringify(cartTotal.cartTotalAmount);
        const cartQuantitys = JSON.stringify(cartUm[0].cartQuantity);
        const cartQuantitys2 = JSON.stringify(cartUm[1].cartQuantity);
        const cartQuantitys3 = JSON.stringify(cartUm[2].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra";

        const ArreyData = [
          lembrete,
          "______________________________________________________________________________________________________________",
          cvId,
          cvName,
          cvImage,
          cvPrice,
          cvQuantity,
          cvTamnho,
          cvCorres,
          cvCodeCompra,
          "_______________________________________________________________________________________________________________",
          "Dados do Cliente abaixo!",
          "_______________________________________________________________________________________________________________",
          "Nome: " + name,
          "Telefone: " + phone,
          "Email: " + email,
          "_______________________________________________________________________________________________________________",
        ];

        const CreateCompra = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[0].name,
          productPrice: cartUm[0].price,
          productQuantity: cartQuantitys,
          productImage: cartUm[0].image,
          productSize: cartUm[0].size,
          productClolor: cartUm[0].cor,
          productUrl: cartUm[0].url_product,
        };

        const CreateCompra2 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[1].name,
          productPrice: cartUm[1].price,
          productQuantity: cartQuantitys2,
          productImage: cartUm[1].image,
          productSize: cartUm[1].size,
          productClolor: cartUm[1].cor,
          productUrl: cartUm[1].url_product,
        };

        const CreateCompra3 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[2].name,
          productPrice: cartUm[2].price,
          productQuantity: cartQuantitys3,
          productImage: cartUm[2].image,
          productSize: cartUm[2].size,
          productClolor: cartUm[2].cor,
          productUrl: cartUm[2].url_product,
        };

        //console.log(CreateCompra);

        await api
          .post("/compra", CreateCompra)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra2)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra3)
          .then((res) => {
            toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });
      }
      /*const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();*/
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(cartTotal.cartTotalAmount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartQuatro[0].image}` ? `${cartQuatro[0].image}` : "",
        nameproduct1: `${cartQuatro[0].name}` ? `${cartQuatro[0].name}` : "",
        quanty1: `${cartQuatro[0].cartQuantity}`
          ? `${cartQuatro[0].cartQuantity}`
          : "",
        price1: `${cartTotal.cartTotalAmount}`
          ? `${cartTotal.cartTotalAmount * cartQuatro[0].cartQuantity}`
          : "",
        cor1: `${cartQuatro[0].cor}` ? `${cartQuatro[0].cor}` : "",
        medidas1: `${cartQuatro[0].size}` ? `${cartQuatro[0].size}` : "",
        codigo1: code_compra,
        url_product1: `${cartQuatro[0].url_product}`
          ? `${cartQuatro[0].url_product}`
          : "",

        image2: `${cartQuatro[1].image}` ? `${cartQuatro[1].image}` : "",
        nameproduct2: `${cartQuatro[1].name}` ? `${cartQuatro[1].name}` : "",
        quanty2: `${cartQuatro[1].cartQuantity}`
          ? `${cartQuatro[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartQuatro[1].cartQuantity}`
          : "",
        cor2: `${cartQuatro[1].cor}` ? `${cartQuatro[1].cor}` : "",
        medidas2: `${cartQuatro[1].size}` ? `${cartQuatro[1].size}` : "",
        codigo2: code_compra,
        url_product2: `${cartQuatro[1].url_product}`
          ? `${cartQuatro[1].url_product}`
          : "",

        image3: `${cartQuatro[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartQuatro[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartQuatro[2].cartQuantity}`
          ? `${cartQuatro[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartQuatro[2].cartQuantity}`
          : "",
        cor3: `${cartQuatro[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartQuatro[2].size}` ? `${cartTres[2].size}` : "",
        codigo3: code_compra,
        url_product3: `${cartQuatro[2].url_product}`
          ? `${cartQuatro[2].url_product}`
          : "",

        image4: `${cartQuatro[3].image}` ? `${cartQuatro[3].image}` : "",
        nameproduct4: `${cartQuatro[3].name}` ? `${cartQuatro[3].name}` : "",
        quanty4: `${cartQuatro[3].cartQuantity}`
          ? `${cartQuatro[3].cartQuantity}`
          : "",
        price4: `${novo_priceQuatro}`
          ? `${novo_priceQuatro * cartQuatro[3].cartQuantity}`
          : "",
        cor4: `${cartQuatro[3].cor}` ? `${cartQuatro[3].cor}` : "",
        medidas4: `${cartQuatro[3].size}` ? `${cartQuatro[3].size}` : "",
        codigo4: code_compra,
        url_product4: `${cartQuatro[3].url_product}`
          ? `${cartQuatro[3].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
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

      if (cartUm[0]) {
        const ids = JSON.stringify(cartUm[0].id);
        const names = JSON.stringify(cartUm[0].name);
        const images = JSON.stringify(cartUm[0].image[0]);
        const prices = JSON.stringify(cartTotal.cartTotalAmount);
        const cartQuantitys = JSON.stringify(cartUm[0].cartQuantity);
        const cartQuantitys2 = JSON.stringify(cartUm[1].cartQuantity);
        const cartQuantitys3 = JSON.stringify(cartUm[2].cartQuantity);
        const cartQuantitys4 = JSON.stringify(cartUm[3].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra";

        const ArreyData = [
          lembrete,
          "______________________________________________________________________________________________________________",
          cvId,
          cvName,
          cvImage,
          cvPrice,
          cvQuantity,
          cvTamnho,
          cvCorres,
          cvCodeCompra,
          "_______________________________________________________________________________________________________________",
          "Dados do Cliente abaixo!",
          "_______________________________________________________________________________________________________________",
          "Nome: " + name,
          "Telefone: " + phone,
          "Email: " + email,
          "_______________________________________________________________________________________________________________",
        ];

        const CreateCompra = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[0].name,
          productPrice: cartUm[0].price,
          productQuantity: cartQuantitys,
          productImage: cartUm[0].image,
          productSize: cartUm[0].size,
          productClolor: cartUm[0].cor,
          productUrl: cartUm[0].url_product,
        };

        const CreateCompra2 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[1].name,
          productPrice: cartUm[1].price,
          productQuantity: cartQuantitys2,
          productImage: cartUm[1].image,
          productSize: cartUm[1].size,
          productClolor: cartUm[1].cor,
          productUrl: cartUm[1].url_product,
        };

        const CreateCompra3 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[2].name,
          productPrice: cartUm[2].price,
          productQuantity: cartQuantitys3,
          productImage: cartUm[2].image,
          productSize: cartUm[2].size,
          productClolor: cartUm[2].cor,
          productUrl: cartUm[2].url_product,
        };

        const CreateCompra4 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[3].name,
          productPrice: cartUm[3].price,
          productQuantity: cartQuantitys4,
          productImage: cartUm[3].image,
          productSize: cartUm[3].size,
          productClolor: cartUm[3].cor,
          productUrl: cartUm[3].url_product,
        };

        //console.log(CreateCompra);

        await api
          .post("/compra", CreateCompra)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra2)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra3)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra4)
          .then((res) => {
            toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });
      }

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
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] &&
      cartSinco[4]
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(cartTotal.cartTotalAmount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartSinco[0].image}` ? `${cartSinco[0].image}` : "",
        nameproduct1: `${cartSinco[0].name}` ? `${cartSinco[0].name}` : "",
        quanty1: `${cartSinco[0].cartQuantity}`
          ? `${cartSinco[0].cartQuantity}`
          : "",
        price1: `${cartTotal.cartTotalAmount}`
          ? `${cartTotal.cartTotalAmount * cartSinco[0].cartQuantity}`
          : "",
        cor1: `${cartSinco[0].cor}` ? `${cartUm[0].cor}` : "",
        medidas1: `${cartSinco[0].size}` ? `${cartSinco[0].size}` : "",
        codigo1: code_compra,
        url_product1: `${cartSinco[0].url_product}`
          ? `${cartSinco[0].url_product}`
          : "",

        image2: `${cartSinco[1].image}` ? `${cartSinco[1].image}` : "",
        nameproduct2: `${cartSinco[1].name}` ? `${cartSinco[1].name}` : "",
        quanty2: `${cartSinco[1].cartQuantity}`
          ? `${cartSinco[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartSinco[1].cartQuantity}`
          : "",
        cor2: `${cartSinco[1].cor}` ? `${cartSinco[1].cor}` : "",
        medidas2: `${cartSinco[1].size}` ? `${cartSinco[1].size}` : "",
        codigo2: code_compra,
        url_product2: `${cartSinco[1].url_product}`
          ? `${cartSinco[1].url_product}`
          : "",

        image3: `${cartSinco[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartSinco[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartSinco[2].cartQuantity}`
          ? `${cartSinco[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartSinco[2].cartQuantity}`
          : "",
        cor3: `${cartSinco[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartSinco[2].size}` ? `${cartTres[2].size}` : "",
        codigo3: code_compra,
        url_product3: `${cartSinco[2].url_product}`
          ? `${cartSinco[2].url_product}`
          : "",

        image4: `${cartSinco[3].image}` ? `${cartQuatro[3].image}` : "",
        nameproduct4: `${cartSinco[3].name}` ? `${cartQuatro[3].name}` : "",
        quanty4: `${cartSinco[3].cartQuantity}`
          ? `${cartSinco[3].cartQuantity}`
          : "",
        price4: `${novo_priceQuatro}`
          ? `${novo_priceQuatro * cartSinco[3].cartQuantity}`
          : "",
        cor4: `${cartSinco[3].cor}` ? `${cartQuatro[3].cor}` : "",
        medidas4: `${cartSinco[3].size}` ? `${cartQuatro[3].size}` : "",
        codigo4: code_compra,
        url_product4: `${cartSinco[3].url_product}`
          ? `${cartSinco[3].url_product}`
          : "",

        image5: `${cartSinco[4].image}` ? `${cartSinco[4].image}` : "",
        nameproduct5: `${cartSinco[4].name}` ? `${cartSinco[4].name}` : "",
        quanty5: `${cartSinco[4].cartQuantity}`
          ? `${cartSinco[4].cartQuantity}`
          : "",
        price5: `${novo_priceSinco}`
          ? `${novo_priceSinco * cartSinco[4].cartQuantity}`
          : "",
        cor5: `${cartSinco[4].cor}` ? `${cartSinco[4].cor}` : "",
        medidas5: `${cartSinco[4].size}` ? `${cartSinco[4].size}` : "",
        codigo5: code_compra,
        url_product5: `${cartSinco[4].url_product}`
          ? `${cartSinco[4].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
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

      if (cartUm[0]) {
        const ids = JSON.stringify(cartUm[0].id);
        const names = JSON.stringify(cartUm[0].name);
        const images = JSON.stringify(cartUm[0].image[0]);
        const prices = JSON.stringify(cartTotal.cartTotalAmount);
        const cartQuantitys = JSON.stringify(cartUm[0].cartQuantity);
        const cartQuantitys2 = JSON.stringify(cartUm[1].cartQuantity);
        const cartQuantitys3 = JSON.stringify(cartUm[2].cartQuantity);
        const cartQuantitys4 = JSON.stringify(cartUm[3].cartQuantity);
        const cartQuantitys5 = JSON.stringify(cartUm[4].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra";

        const ArreyData = [
          lembrete,
          "______________________________________________________________________________________________________________",
          cvId,
          cvName,
          cvImage,
          cvPrice,
          cvQuantity,
          cvTamnho,
          cvCorres,
          cvCodeCompra,
          "_______________________________________________________________________________________________________________",
          "Dados do Cliente abaixo!",
          "_______________________________________________________________________________________________________________",
          "Nome: " + name,
          "Telefone: " + phone,
          "Email: " + email,
          "_______________________________________________________________________________________________________________",
        ];

        const CreateCompra = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[0].name,
          productPrice: cartUm[0].price,
          productQuantity: cartQuantitys,
          productImage: cartUm[0].image,
          productSize: cartUm[0].size,
          productClolor: cartUm[0].cor,
          productUrl: cartUm[0].url_product,
        };

        const CreateCompra2 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[1].name,
          productPrice: cartUm[1].price,
          productQuantity: cartQuantitys2,
          productImage: cartUm[1].image,
          productSize: cartUm[1].size,
          productClolor: cartUm[1].cor,
          productUrl: cartUm[1].url_product,
        };

        const CreateCompra3 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[2].name,
          productPrice: cartUm[2].price,
          productQuantity: cartQuantitys3,
          productImage: cartUm[2].image,
          productSize: cartUm[2].size,
          productClolor: cartUm[2].cor,
          productUrl: cartUm[2].url_product,
        };

        const CreateCompra4 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[3].name,
          productPrice: cartUm[3].price,
          productQuantity: cartQuantitys4,
          productImage: cartUm[3].image,
          productSize: cartUm[3].size,
          productClolor: cartUm[3].cor,
          productUrl: cartUm[3].url_product,
        };

        const CreateCompra5 = {
          name: name,
          email: email,
          phone: phone,
          state: cep.state,
          city: cep.city,
          cep: cep.cep,
          street: cep.street,
          number: number,
          district: cep.neighborhood,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cartUm[4].name,
          productPrice: cartUm[4].price,
          productQuantity: cartQuantitys5,
          productImage: cartUm[4].image,
          productSize: cartUm[4].size,
          productClolor: cartUm[4].cor,
          productUrl: cartUm[4].url_product,
        };

        //console.log(CreateCompra);

        await api
          .post("/compra", CreateCompra)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra2)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra3)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra4)
          .then((res) => {
            //toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });

        await api
          .post("/compra", CreateCompra5)
          .then((res) => {
            toast.success("Estamos redirecinando para o mercado pago");
            //console.log(res)
          })
          .catch((msg) => {
            console.log({ msg: msg.response.data });
          });
      }

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
    }
  };

  //Nova mudança

  return (
    <>
      {cartUm == "" ? (
        <Example />
      ) : (
        <CompraStyle>
          <FormBox>
            <img src="Logo.png" alt="logo" />
            <Title>Preencha com seus dados</Title>
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
                  type="text"
                  name="phone"
                  id="phone"
                  maxlength="11"
                  onChange={(e) => setPhone(e.target.value)}
                  value={dataPhone}
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
                  maxlength="11"
                  onChange={(e) => setCpf(e.target.value)}
                  value={dataCpf}
                  required
                />
                <label htmlFor="">CPF</label>
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
