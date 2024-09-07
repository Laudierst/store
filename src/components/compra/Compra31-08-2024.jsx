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
  const cart = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);
  const tmItens = useSelector((state) => state.cart.tmMedidas);
  const tmCor = useSelector((state) => state.cart.tmCores);

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
        const req = await axios
          .get(`https://brasilapi.com.br/api/cep/v2/${envento}`)
          .then((response) => {
            console.log(response.data);
            //const res = await req.data;
            setCep(response.data);
          })
          .catch((erro) => {
            alert("Coloque um cep valido");
          });
      })();
    }
  };

  //window.location.reload();

  //console.log(productslist)

  const Example = () => (
    /* Deixei esse valores aqui para lembra os metodos que posso usar no ReactLoading
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

  //Aqui crio letiaveis que recebe os valores que quero
  const name2 = cart[0].name ? cart[0].name : "";
  const price2 = cart[0].name ? novo_amount : "";
  const image2 = cart[0].name ? cart[0].image[0] : "";
  //const description2 = cart[0].name ? cart[0].description : ""

  //E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api
  let prod = [
    {
      title: name2,
      price: price2,
      image: image2,
      category: "Roupas",
      description: "Isso é um teste",
    },
  ];

  //E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api
  /*let prod2 = [
  {
      title: "Fone",
      price: 25,
      image: "https://m.media-amazon.com/images/I/41qM+itS5SL._AC_SY300_SX300_.jpg",
      category: "placas",
      description: "Isso é um teste",
  },
]

const [ data2, setData2 ] = useState([])

//console.log("data2", data2)

useEffect(() => {
  (async() => {
    const req = await api.get("/compra")
    const res = await req.data;

    setData2(res)
  })()
},[])*/

  /*const ts = data2.map(r => r.productslist)

console.log(cart[0])*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      cart[0] &&
      cart[1] === undefined &&
      cart[2] === undefined &&
      cart[3] == undefined &&
      cart[4] == undefined
    ) {
      let adress = `Estado: ${data.state} , Cidade: ${data.city} , Cep: ${data.cep} , Barrio: ${data.district} , Rua: ${data.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      let res1 = JSON.stringify(cart[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",
        image1: `${res1}` ? `${res1}` : "",
        nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
        quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
        price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",
        total: `${res5}`,
        cor1: `${tmCor[0].cor}` ? `${tmCor[0].cor}` : "",
        medidas1: `${tmItens[0].tm}` ? `${tmItens[0].tm}` : "",
        url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",
      };

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
        await api.post("payment", ...prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();

      if (cart[0]) {
        const ids = JSON.stringify(cart[0].id);
        const names = JSON.stringify(cart[0].name);
        const images = JSON.stringify(cart[0].image[0]);
        const prices = JSON.stringify(novo_price);
        const cartQuantitys = JSON.stringify(cart[0].cartQuantity);
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
          state: state,
          city: city,
          cep: cep,
          street: street,
          number: number,
          district: district,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cvName,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cvImage,
          productSize: cvTamnho,
          productClolor: cvCorres,
          productUrl: templeteParams.url_product1,
        };

        console.log(CreateCompra);

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
      cart[0] &&
      cart[1] &&
      cart[2] === undefined &&
      cart[3] == undefined &&
      cart[4] == undefined
    ) {
      let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`;

      let res1 = JSON.stringify(cart[0].image[0]);
      let res2 = JSON.stringify(cart[1].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${res1}` ? `${res1}` : "",
        nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
        quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
        price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",
        cor1: `${tmCor[0].cor}` ? `${tmCor[0].cor}` : "",
        medidas1: `${tmItens[0].tm}` ? `${tmItens[0].tm}` : "",
        url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",

        image2: `${res2}` ? `${res2}` : "",
        nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
        quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
        price2: `${cart[1].price}`
          ? `${cart[1].price * cart[1].cartQuantity}`
          : "",
        cor2: tmCor[1] ? tmCor[1].cor : "",
        medidas2: tmItens[1] ? tmItens[1].tm : "",
        url_product2: `${cart[1].url_product}` ? `${cart[1].url_product}` : "",
        total: `${res5}`,
      };

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
        await api.post("payment", ...prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err);
          }
        );
      };
      PagamentoMercadoPago();

      if (cart[0] && cart[1]) {
        const ids = JSON.stringify(cart[0].id);
        const names = JSON.stringify(cart[0].name);
        const images = JSON.stringify(cart[0].image[0]);
        const prices = JSON.stringify(cart[0].price);
        const cartQuantitys = JSON.stringify(cart[0].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const ids2 = JSON.stringify(cart[1].id);
        const names2 = JSON.stringify(cart[1].name);
        const images2 = JSON.stringify(cart[1].image[0]);
        const prices2 = JSON.stringify(cart[1].price);
        const cartQuantitys2 = JSON.stringify(cart[1].cartQuantity);
        const cvCodeCompra2 = JSON.stringify(GeraCode);
        const localTn2 = localStorage.getItem("tmMedidas");
        const localCor2 = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        const resTm2 = JSON.parse(localTn2);
        const resCor2 = JSON.parse(localCor2);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        const tmMedidas2 = JSON.stringify(resTm2[1].tm);
        const tmCores2 = JSON.stringify(resCor2[1].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let cvId2 = ids2.replace(/"/g, "");
        let cvName2 = names2.replace(/"/g, "");
        let cvImage2 = images2.replace(/"/g, "");
        let cvPrice2 = prices2.replace(/"/g, "");
        let cvQuantity2 = cartQuantitys2.replace(/"/g, "");
        let cvTamnho2 = tmMedidas2.replace(/"/g, "");
        let cvCorres2 = tmCores2.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra: Aqui é compra 1";

        let lembrete2 =
          "Informação lenght: 12 = id, 13 = name, 14 = image, 15 = price, 16 = quantity, 17 = size, 18 = cor, 19 = code_compra: Aqui é compra 2";

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
          lembrete2,
          "______________________________________________________________________________________________________________",
          cvId2,
          cvName2,
          cvImage2,
          cvPrice2,
          cvQuantity2,
          cvTamnho2,
          cvCorres2,
          cvCodeCompra2,
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
          state: state,
          city: city,
          cep: cep,
          street: street,
          number: number,
          district: district,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cvName,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cvImage,
          productSize: cvTamnho,
          productClolor: cvCorres,
          productUrl: templeteParams.url_product1,
        };

        await api.post("/compra", CreateCompra).then((res) => {
          toast.success("Estamos redirecinando para o mercado pago");
          console.log(res);
        });
      }
    }

    if (
      cart[0] &&
      cart[1] &&
      cart[2] &&
      cart[3] == undefined &&
      cart[4] == undefined
    ) {
      let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`;

      let res1 = JSON.stringify(cart[0].image[0]);
      let res2 = JSON.stringify(cart[1].image[0]);
      let res3 = JSON.stringify(cart[2].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${res1}` ? `${res1}` : "",
        nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
        quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
        price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",
        cor1: `${tmCor[0].cor}` ? `${tmCor[0].cor}` : "",
        medidas1: `${tmItens[0].tm}` ? `${tmItens[0].tm}` : "",
        url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",

        image2: `${res2}` ? `${res2}` : "",
        nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
        quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
        price2: `${cart[1].price}`
          ? `${cart[1].price * cart[1].cartQuantity}`
          : "",
        cor2: `${tmCor[1].cor}` ? `${tmCor[1].cor}` : "",
        medidas2: `${tmItens[1].tm}` ? `${tmItens[1].tm}` : "",
        url_product2: `${cart[1].url_product}` ? `${cart[1].url_product}` : "",

        image3: `${res3}` ? ` ${res3}` : "",
        nameproduct3: `${cart[2].name ? cart[2].name : ""}`,
        quanty3: `${cart[2].cartQuantity ? cart[2].cartQuantity : ""}`,
        price3: `${cart[2].price ? cart[2].price * cart[2].cartQuantity : ""}`,
        cor3: tmCor[2] ? tmCor[2].cor : "",
        medidas3: tmItens[2] ? tmItens[2].tm : "",
        url_product3: `${cart[2].url_product}` ? `${cart[2].url_product}` : "",

        total: `${res5}`,
      };

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
        await api.post("payment", ...prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err);
          }
        );
      };
      //localStorage.clear()
      PagamentoMercadoPago();

      if (cart[0] && cart[1] && cart[2]) {
        const ids = JSON.stringify(cart[0].id);
        const names = JSON.stringify(cart[0].name);
        const images = JSON.stringify(cart[0].image[0]);
        const prices = JSON.stringify(cart[0].price);
        const cartQuantitys = JSON.stringify(cart[0].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const ids2 = JSON.stringify(cart[1].id);
        const names2 = JSON.stringify(cart[1].name);
        const images2 = JSON.stringify(cart[1].image[0]);
        const prices2 = JSON.stringify(cart[1].price);
        const cartQuantitys2 = JSON.stringify(cart[1].cartQuantity);
        const cvCodeCompra2 = JSON.stringify(GeraCode);
        const localTn2 = localStorage.getItem("tmMedidas");
        const localCor2 = localStorage.getItem("tmCores");

        const ids3 = JSON.stringify(cart[1].id);
        const names3 = JSON.stringify(cart[1].name);
        const images3 = JSON.stringify(cart[1].image[0]);
        const prices3 = JSON.stringify(cart[1].price);
        const cartQuantitys3 = JSON.stringify(cart[1].cartQuantity);
        const cvCodeCompra3 = JSON.stringify(GeraCode);
        const localTn3 = localStorage.getItem("tmMedidas");
        const localCor3 = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        const resTm2 = JSON.parse(localTn2);
        const resCor2 = JSON.parse(localCor2);

        const resTm3 = JSON.parse(localTn3);
        const resCor3 = JSON.parse(localCor3);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        const tmMedidas2 = JSON.stringify(resTm2[1].tm);
        const tmCores2 = JSON.stringify(resCor2[1].cor);

        const tmMedidas3 = JSON.stringify(resTm3[1].tm);
        const tmCores3 = JSON.stringify(resCor3[1].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let cvId2 = ids2.replace(/"/g, "");
        let cvName2 = names2.replace(/"/g, "");
        let cvImage2 = images2.replace(/"/g, "");
        let cvPrice2 = prices2.replace(/"/g, "");
        let cvQuantity2 = cartQuantitys2.replace(/"/g, "");
        let cvTamnho2 = tmMedidas2.replace(/"/g, "");
        let cvCorres2 = tmCores2.replace(/"/g, "");

        let cvId3 = ids3.replace(/"/g, "");
        let cvName3 = names3.replace(/"/g, "");
        let cvImage3 = images3.replace(/"/g, "");
        let cvPrice3 = prices3.replace(/"/g, "");
        let cvQuantity3 = cartQuantitys3.replace(/"/g, "");
        let cvTamnho3 = tmMedidas3.replace(/"/g, "");
        let cvCorres3 = tmCores3.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra: Aqui é compra 1";

        let lembrete2 =
          "Informação lenght: 12 = id, 13 = name, 14 = image, 15 = price, 16 = quantity, 17 = size, 18 = cor, 19 = code_compra: Aqui é compra 2";

        let lembrete3 =
          "Informação lenght: 22 = id, 23 = name, 24 = image, 25 = price, 26 = quantity, 27 = size, 28 = cor, 29 = code_compra: Aqui é compra 3";

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
          lembrete2,
          "______________________________________________________________________________________________________________",
          cvId2,
          cvName2,
          cvImage2,
          cvPrice2,
          cvQuantity2,
          cvTamnho2,
          cvCorres2,
          cvCodeCompra2,
          lembrete3,
          "______________________________________________________________________________________________________________",
          cvId3,
          cvName3,
          cvImage3,
          cvPrice3,
          cvQuantity3,
          cvTamnho3,
          cvCorres3,
          cvCodeCompra3,
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
          state: state,
          city: city,
          cep: cep,
          street: street,
          number: number,
          district: district,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cvName,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cvImage,
          productSize: cvTamnho,
          productClolor: cvCorres,
          productUrl: templeteParams.url_product1,
        };

        await api.post("/compra", CreateCompra).then((res) => {
          toast.success("Estamos redirecinando para o mercado pago");
          console.log(res);
        });
      }
    }

    if (cart[0] && cart[1] && cart[2] && cart[3] && cart[4] == undefined) {
      let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`;

      let res1 = JSON.stringify(cart[0].image[0]);
      let res2 = JSON.stringify(cart[1].image[0]);
      let res3 = JSON.stringify(cart[2].image[0]);
      let res04 = JSON.stringify(cart[3].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${res1}` ? `${res1}` : "",
        nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
        quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
        price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",
        cor1: `${tmCor[0].cor}` ? `${tmCor[0].cor}` : "",
        medidas1: `${tmItens[0].tm}` ? `${tmItens[0].tm}` : "",
        url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",

        image2: `${res2}` ? `${res2}` : "",
        nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
        quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
        price2: `${cart[1].price}`
          ? `${cart[1].price * cart[1].cartQuantity}`
          : "",
        cor2: `${tmCor[1].cor}` ? `${tmCor[1].cor}` : "",
        medidas2: `${tmItens[1].tm}` ? `${tmItens[1].tm}` : "",
        url_product2: `${cart[1].url_product}` ? `${cart[1].url_product}` : "",

        image3: `${res3}` ? ` ${res3}` : "",
        nameproduct3: `${cart[2].name ? cart[2].name : ""}`,
        quanty3: `${cart[2].cartQuantity ? cart[2].cartQuantity : ""}`,
        price3: `${cart[2].price ? cart[2].price * cart[2].cartQuantity : ""}`,
        cor3: tmCor[2] ? tmCor[2].cor : "",
        medidas3: tmItens[2] ? tmItens[2].tm : "",
        url_product3: `${cart[2].url_product}` ? `${cart[2].url_product}` : "",

        image4: `${res04}` ? ` ${res04}` : "",
        nameproduct4: `${cart[3].name}` ? `${cart[3].name}` : "",
        quanty4: `${cart[3].cartQuantity}` ? `${cart[3].cartQuantity}` : "",
        price4: `${cart[3].price ? cart[3].price * cart[3].cartQuantity : ""}`,
        cor4: tmCor[3] ? tmCor[3].cor : "",
        medidas4: tmItens[3] ? tmItens[3].tm : "",
        url_product4: `${cart[3].url_product}` ? `${cart[3].url_product}` : "",

        total: `${res5}`,
      };

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
        await api.post("payment", ...prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err);
          }
        );
      };
      PagamentoMercadoPago();

      if (cart[0] && cart[1] && cart[2] && cart[3]) {
        const ids = JSON.stringify(cart[0].id);
        const names = JSON.stringify(cart[0].name);
        const images = JSON.stringify(cart[0].image[0]);
        const prices = JSON.stringify(cart[0].price);
        const cartQuantitys = JSON.stringify(cart[0].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const ids2 = JSON.stringify(cart[1].id);
        const names2 = JSON.stringify(cart[1].name);
        const images2 = JSON.stringify(cart[1].image[0]);
        const prices2 = JSON.stringify(cart[1].price);
        const cartQuantitys2 = JSON.stringify(cart[1].cartQuantity);
        const cvCodeCompra2 = JSON.stringify(GeraCode);
        const localTn2 = localStorage.getItem("tmMedidas");
        const localCor2 = localStorage.getItem("tmCores");

        const ids3 = JSON.stringify(cart[2].id);
        const names3 = JSON.stringify(cart[2].name);
        const images3 = JSON.stringify(cart[2].image[0]);
        const prices3 = JSON.stringify(cart[2].price);
        const cartQuantitys3 = JSON.stringify(cart[2].cartQuantity);
        const cvCodeCompra3 = JSON.stringify(GeraCode);
        const localTn3 = localStorage.getItem("tmMedidas");
        const localCor3 = localStorage.getItem("tmCores");

        const ids4 = JSON.stringify(cart[3].id);
        const names4 = JSON.stringify(cart[3].name);
        const images4 = JSON.stringify(cart[3].image[0]);
        const prices4 = JSON.stringify(cart[3].price);
        const cartQuantitys4 = JSON.stringify(cart[3].cartQuantity);
        const cvCodeCompra4 = JSON.stringify(GeraCode);
        const localTn4 = localStorage.getItem("tmMedidas");
        const localCor4 = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        const resTm2 = JSON.parse(localTn2);
        const resCor2 = JSON.parse(localCor2);

        const resTm3 = JSON.parse(localTn3);
        const resCor3 = JSON.parse(localCor3);

        const resTm4 = JSON.parse(localTn4);
        const resCor4 = JSON.parse(localCor4);

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        const tmMedidas2 = JSON.stringify(resTm2[1].tm);
        const tmCores2 = JSON.stringify(resCor2[1].cor);

        const tmMedidas3 = JSON.stringify(resTm3[2].tm);
        const tmCores3 = JSON.stringify(resCor3[2].cor);

        const tmMedidas4 = JSON.stringify(resTm4[3].tm);
        const tmCores4 = JSON.stringify(resCor4[3].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let cvId2 = ids2.replace(/"/g, "");
        let cvName2 = names2.replace(/"/g, "");
        let cvImage2 = images2.replace(/"/g, "");
        let cvPrice2 = prices2.replace(/"/g, "");
        let cvQuantity2 = cartQuantitys2.replace(/"/g, "");
        let cvTamnho2 = tmMedidas2.replace(/"/g, "");
        let cvCorres2 = tmCores2.replace(/"/g, "");

        let cvId3 = ids3.replace(/"/g, "");
        let cvName3 = names3.replace(/"/g, "");
        let cvImage3 = images3.replace(/"/g, "");
        let cvPrice3 = prices3.replace(/"/g, "");
        let cvQuantity3 = cartQuantitys3.replace(/"/g, "");
        let cvTamnho3 = tmMedidas3.replace(/"/g, "");
        let cvCorres3 = tmCores3.replace(/"/g, "");

        let cvId4 = ids4.replace(/"/g, "");
        let cvName4 = names4.replace(/"/g, "");
        let cvImage4 = images4.replace(/"/g, "");
        let cvPrice4 = prices4.replace(/"/g, "");
        let cvQuantity4 = cartQuantitys4.replace(/"/g, "");
        let cvTamnho4 = tmMedidas4.replace(/"/g, "");
        let cvCorres4 = tmCores4.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra: Aqui é compra 1";

        let lembrete2 =
          "Informação lenght: 12 = id, 13 = name, 14 = image, 15 = price, 16 = quantity, 17 = size, 18 = cor, 19 = code_compra: Aqui é compra 2";

        let lembrete3 =
          "Informação lenght: 22 = id, 23 = name, 24 = image, 25 = price, 26 = quantity, 27 = size, 28 = cor, 29 = code_compra: Aqui é compra 3";

        let lembrete4 =
          "Informação lenght: 32 = id, 33 = name, 34 = image, 35 = price, 36 = quantity, 37 = size, 38 = cor, 39 = code_compra: Aqui é compra 4";

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
          lembrete2,
          "______________________________________________________________________________________________________________",
          cvId2,
          cvName2,
          cvImage2,
          cvPrice2,
          cvQuantity2,
          cvTamnho2,
          cvCorres2,
          cvCodeCompra2,
          lembrete3,
          "______________________________________________________________________________________________________________",
          cvId3,
          cvName3,
          cvImage3,
          cvPrice3,
          cvQuantity3,
          cvTamnho3,
          cvCorres3,
          cvCodeCompra3,
          lembrete4,
          "______________________________________________________________________________________________________________",
          cvId4,
          cvName4,
          cvImage4,
          cvPrice4,
          cvQuantity4,
          cvTamnho4,
          cvCorres4,
          cvCodeCompra4,
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
          state: state,
          city: city,
          cep: cep,
          street: street,
          number: number,
          district: district,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cvName,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cvImage,
          productSize: cvTamnho,
          productClolor: cvCorres,
          productUrl: templeteParams.url_product1,
        };

        await api.post("/compra", CreateCompra).then((res) => {
          toast.success("Estamos redirecinando para o mercado pago");
          console.log(res);
        });
      }
    }

    if (cart[0] && cart[1] && cart[2] && cart[3] && cart[4]) {
      let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`;

      let res1 = JSON.stringify(cart[0].image[0]);
      let res2 = JSON.stringify(cart[1].image[0]);
      let res3 = JSON.stringify(cart[2].image[0]);
      let res04 = JSON.stringify(cart[3].image[0]);
      let res05 = JSON.stringify(cart[4].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${res1}` ? `${res1}` : "",
        nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
        quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
        price1: `${novo_price}` ? `${novo_price * cart[0].cartQuantity}` : "",
        cor1: `${tmCor[0].cor}` ? `${tmCor[0].cor}` : "",
        medidas1: `${tmItens[0].tm}` ? `${tmItens[0].tm}` : "",
        url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : "",

        image2: `${res2}` ? `${res2}` : "",
        nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
        quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
        price2: `${cart[1].price}`
          ? `${cart[1].price * cart[1].cartQuantity}`
          : "",
        cor2: `${tmCor[1].cor}` ? `${tmCor[1].cor}` : "",
        medidas2: `${tmItens[1].tm}` ? `${tmItens[1].tm}` : "",
        url_product2: `${cart[1].url_product}` ? `${cart[1].url_product}` : "",

        image3: `${res3}` ? ` ${res3}` : "",
        nameproduct3: `${cart[2].name ? cart[2].name : ""}`,
        quanty3: `${cart[2].cartQuantity ? cart[2].cartQuantity : ""}`,
        price3: `${cart[2].price ? cart[2].price * cart[2].cartQuantity : ""}`,
        cor3: tmCor[2] ? tmCor[2].cor : "",
        medidas3: tmItens[2] ? tmItens[2].tm : "",
        url_product3: `${cart[2].url_product}` ? `${cart[2].url_product}` : "",

        image4: `${res04}` ? ` ${res04}` : "",
        nameproduct4: `${cart[3].name}` ? `${cart[3].name}` : "",
        quanty4: `${cart[3].cartQuantity}` ? `${cart[3].cartQuantity}` : "",
        price4: `${cart[3].price ? cart[3].price * cart[3].cartQuantity : ""}`,
        cor4: tmCor[3] ? tmCor[3].cor : "",
        medidas4: tmItens[3] ? tmItens[3].tm : "",
        url_product4: `${cart[3].url_product}` ? `${cart[3].url_product}` : "",

        image5: `${res05}` ? ` ${res05}` : "",
        nameproduct5: `${cart[4].name}` ? `${cart[4].name}` : "",
        quanty5: `${cart[4].cartQuantity}` ? `${cart[4].cartQuantity}` : "",
        price5: `${cart[4].price ? cart[4].price * cart[4].cartQuantity : ""}`,
        cor5: tmCor[4] ? tmCor[4].cor : "",
        medidas5: tmItens[4] ? tmItens[4].tm : "",
        url_product5: `${cart[4].url_product}` ? `${cart[4].url_product}` : "",

        total: `${res5}`,
      };

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
        await api.post("payment", ...prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err);
          }
        );
      };
      PagamentoMercadoPago();

      if (cart[0] && cart[1] && cart[2] && cart[3] && cart[4]) {
        const ids = JSON.stringify(cart[0].id);
        const names = JSON.stringify(cart[0].name);
        const images = JSON.stringify(cart[0].image[0]);
        const prices = JSON.stringify(cart[0].price);
        const cartQuantitys = JSON.stringify(cart[0].cartQuantity);
        const cvCodeCompra = JSON.stringify(GeraCode);
        const localTn = localStorage.getItem("tmMedidas");
        const localCor = localStorage.getItem("tmCores");

        const ids2 = JSON.stringify(cart[1].id);
        const names2 = JSON.stringify(cart[1].name);
        const images2 = JSON.stringify(cart[1].image[0]);
        const prices2 = JSON.stringify(cart[1].price);
        const cartQuantitys2 = JSON.stringify(cart[1].cartQuantity);
        const cvCodeCompra2 = JSON.stringify(GeraCode);
        const localTn2 = localStorage.getItem("tmMedidas");
        const localCor2 = localStorage.getItem("tmCores");

        const ids3 = JSON.stringify(cart[2].id);
        const names3 = JSON.stringify(cart[2].name);
        const images3 = JSON.stringify(cart[2].image[0]);
        const prices3 = JSON.stringify(cart[2].price);
        const cartQuantitys3 = JSON.stringify(cart[2].cartQuantity);
        const cvCodeCompra3 = JSON.stringify(GeraCode);
        const localTn3 = localStorage.getItem("tmMedidas");
        const localCor3 = localStorage.getItem("tmCores");

        const ids4 = JSON.stringify(cart[3].id);
        const names4 = JSON.stringify(cart[3].name);
        const images4 = JSON.stringify(cart[3].image[0]);
        const prices4 = JSON.stringify(cart[3].price);
        const cartQuantitys4 = JSON.stringify(cart[3].cartQuantity);
        const cvCodeCompra4 = JSON.stringify(GeraCode);
        const localTn4 = localStorage.getItem("tmMedidas");
        const localCor4 = localStorage.getItem("tmCores");

        const ids5 = JSON.stringify(cart[4].id);
        const names5 = JSON.stringify(cart[4].name);
        const images5 = JSON.stringify(cart[4].image[0]);
        const prices5 = JSON.stringify(cart[4].price);
        const cartQuantitys5 = JSON.stringify(cart[4].cartQuantity);
        const cvCodeCompra5 = JSON.stringify(GeraCode);
        const localTn5 = localStorage.getItem("tmMedidas");
        const localCor5 = localStorage.getItem("tmCores");

        const resTm = JSON.parse(localTn);
        const resCor = JSON.parse(localCor);

        const resTm2 = JSON.parse(localTn2);
        const resCor2 = JSON.parse(localCor2);

        const resTm3 = JSON.parse(localTn3);
        const resCor3 = JSON.parse(localCor3);

        const resTm4 = JSON.parse(localTn4);
        const resCor4 = JSON.parse(localCor4);

        const resTm5 = JSON.parse(localTn5);
        const resCor5 = JSON.parse(localCor5);

        //console.log(localCor)

        const tmMedidas = JSON.stringify(resTm[0].tm);
        const tmCores = JSON.stringify(resCor[0].cor);

        const tmMedidas2 = JSON.stringify(resTm2[1].tm);
        const tmCores2 = JSON.stringify(resCor2[1].cor);

        const tmMedidas3 = JSON.stringify(resTm3[2].tm);
        const tmCores3 = JSON.stringify(resCor3[2].cor);

        const tmMedidas4 = JSON.stringify(resTm4[3].tm);
        const tmCores4 = JSON.stringify(resCor4[3].cor);

        const tmMedidas5 = JSON.stringify(resTm5[4].tm);
        const tmCores5 = JSON.stringify(resCor5[4].cor);

        let cvId = ids.replace(/"/g, "");
        let cvName = names.replace(/"/g, "");
        let cvImage = images.replace(/"/g, "");
        let cvPrice = prices.replace(/"/g, "");
        let cvQuantity = cartQuantitys.replace(/"/g, "");
        let cvTamnho = tmMedidas.replace(/"/g, "");
        let cvCorres = tmCores.replace(/"/g, "");

        let cvId2 = ids2.replace(/"/g, "");
        let cvName2 = names2.replace(/"/g, "");
        let cvImage2 = images2.replace(/"/g, "");
        let cvPrice2 = prices2.replace(/"/g, "");
        let cvQuantity2 = cartQuantitys2.replace(/"/g, "");
        let cvTamnho2 = tmMedidas2.replace(/"/g, "");
        let cvCorres2 = tmCores2.replace(/"/g, "");

        let cvId3 = ids3.replace(/"/g, "");
        let cvName3 = names3.replace(/"/g, "");
        let cvImage3 = images3.replace(/"/g, "");
        let cvPrice3 = prices3.replace(/"/g, "");
        let cvQuantity3 = cartQuantitys3.replace(/"/g, "");
        let cvTamnho3 = tmMedidas3.replace(/"/g, "");
        let cvCorres3 = tmCores3.replace(/"/g, "");

        let cvId4 = ids4.replace(/"/g, "");
        let cvName4 = names4.replace(/"/g, "");
        let cvImage4 = images4.replace(/"/g, "");
        let cvPrice4 = prices4.replace(/"/g, "");
        let cvQuantity4 = cartQuantitys4.replace(/"/g, "");
        let cvTamnho4 = tmMedidas4.replace(/"/g, "");
        let cvCorres4 = tmCores4.replace(/"/g, "");

        let cvId5 = ids5.replace(/"/g, "");
        let cvName5 = names5.replace(/"/g, "");
        let cvImage5 = images5.replace(/"/g, "");
        let cvPrice5 = prices5.replace(/"/g, "");
        let cvQuantity5 = cartQuantitys5.replace(/"/g, "");
        let cvTamnho5 = tmMedidas5.replace(/"/g, "");
        let cvCorres5 = tmCores5.replace(/"/g, "");

        let lembrete =
          "Informação lenght: 2 = id, 3 = name, 4 = image, 5 = price, 6 = quantity, 7 = size, 8 = cor, 9 = code_compra: Aqui é compra 1";

        let lembrete2 =
          "Informação lenght: 12 = id, 13 = name, 14 = image, 15 = price, 16 = quantity, 17 = size, 18 = cor, 19 = code_compra: Aqui é compra 2";

        let lembrete3 =
          "Informação lenght: 22 = id, 23 = name, 24 = image, 25 = price, 26 = quantity, 27 = size, 28 = cor, 29 = code_compra: Aqui é compra 3";

        let lembrete4 =
          "Informação lenght: 32 = id, 33 = name, 34 = image, 35 = price, 36 = quantity, 37 = size, 38 = cor, 39 = code_compra: Aqui é compra 4";

        let lembrete5 =
          "Informação lenght: 42 = id, 43 = name, 44 = image, 45 = price, 46 = quantity, 47 = size, 48 = cor, 49 = code_compra: Aqui é compra 5";

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
          lembrete2,
          "______________________________________________________________________________________________________________",
          cvId2,
          cvName2,
          cvImage2,
          cvPrice2,
          cvQuantity2,
          cvTamnho2,
          cvCorres2,
          cvCodeCompra2,
          lembrete3,
          "______________________________________________________________________________________________________________",
          cvId3,
          cvName3,
          cvImage3,
          cvPrice3,
          cvQuantity3,
          cvTamnho3,
          cvCorres3,
          cvCodeCompra3,
          lembrete4,
          "______________________________________________________________________________________________________________",
          cvId4,
          cvName4,
          cvImage4,
          cvPrice4,
          cvQuantity4,
          cvTamnho4,
          cvCorres4,
          cvCodeCompra4,
          lembrete5,
          "______________________________________________________________________________________________________________",
          cvId5,
          cvName5,
          cvImage5,
          cvPrice5,
          cvQuantity5,
          cvTamnho5,
          cvCorres5,
          cvCodeCompra5,
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
          state: state,
          city: city,
          cep: cep,
          street: street,
          number: number,
          district: district,
          apartment_or_house: house,
          cpf: cpf,
          code_compra: code_compra,
          productslist: ArreyData,
          productName: cvName,
          productPrice: prices,
          productQuantity: cvQuantity,
          productImage: cvImage,
          productSize: cvTamnho,
          productClolor: cvCorres,
          productUrl: templeteParams.url_product1,
        };

        await api.post("/compra", CreateCompra).then((res) => {
          toast.success("A compra foi criada com sucesso");
          console.log(res);
        });
      }
    }
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
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={state.state}
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
                  value={city.city}
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
                  value={district.district}
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
                  value={street.street}
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
