/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { ButtonBox, InputBox, CompraStyle, Title } from './stylend';
import { FormBox, LoadingPage, Logo2 } from "./FormBox";
import api from '../../api/api';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import emailjs from "@emailjs/browser"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

console.clear()

function Compra() {

  //Aqui estamos recebendo os respequitivos valores de arrey contido no estados gerenciado pelo redux
  const cart = useSelector(state => state.cart.cartItems)
  const cartTotal = useSelector(state => state.cart)
  const tmItens = useSelector(state => state.cart.tmMedidas)
  const tmCor = useSelector(state => state.cart.tmCores)

  //console.log(tmCor[0].cor)

  const productAmount = [cartTotal.cartTotalAmount]
  //const productQuantity = [cartTotal.cartTotalQuantyti]


  const GeraCode = Math.random()
  const ConvertCode = JSON.stringify(GeraCode)

  // Aqui abaixo estamos criando arrey de estados para receber os valores do input vindo co form compra com useSatate
  const [ name, setName ] = useState("")
  const [ email, setEmail] = useState("")
  const [ phone, setPhone] = useState("")
  const [ state, setState ] = useState("")
  const [ city, setCity] = useState("")
  const [ cep, setCep ] = useState("")
  const [ street, setStreet ] = useState("")
  const [ number, setNumber ] = useState("")
  const [ district, setDistrict ] = useState("")
  const [ house, setHouse ] = useState("")
  const [ cpf, setCpf ] = useState("")
  const [ code_compra ] = useState(ConvertCode)
  //const [ productslist] = useState(res)
  
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
    <ReactLoading type='spokes' color='aqua' height={'100%'} width={'100%'}  />
  </LoadingPage>
);

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
      productslist: []
    }

    console.log(CreateCompra)

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
    code_compra
  }

  let percentual = 0.25;
  let aumento = productAmount[0] * percentual;
  let novo_amount = productAmount[0] - aumento;
  let aumentoPrice = cart[0].price * percentual;
  let novo_price = cart[0].price - aumentoPrice;
  

  //Aqui crio variaveis que recebe os valores que quero
  const name2 = cart[0].name ? cart[0].name : ""
  const price2 = cart[0].name ? novo_amount : ""
  const image2 = cart[0].name ? cart[0].image[0] : ""
  //const description2 = cart[0].name ? cart[0].description : ""

  //E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api
  let prod = [
    {
        title: name2,
        price: price2,
        image: image2,
        category: "Roupas",
        description: "",
    }
  ]

//E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api
let prod2 = [
  {
      title: "Fone",
      price: 25,
      image: "https://m.media-amazon.com/images/I/41qM+itS5SL._AC_SY300_SX300_.jpg",
      category: "placas",
      description: "Isso é um teste",
  },
]
  
  //console.log(cart)

  const handleSubmit = async (e) => {
    e.preventDefault()

      if(cart[0] && cart[1] === undefined && cart[2] === undefined && cart[3] == undefined && cart[4] == undefined){

        let adress = `Estado: ${data.state} , Cidade: ${data.city} , Cep: ${data.cep} , Barrio: ${data.district} , Rua: ${data.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(novo_amount)

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
          url_product1: `${cart[0].url_product}` ? `${cart[0].url_product}` : ""
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
            console.log(prod, prod2)
          })  
        }
        PagamentoMercadoPago()

        if(cart[0] && cart[1] === undefined && cart[2] === undefined && cart[3] == undefined && cart[4] == undefined){

          //const ids = JSON.stringify(cart[0].id)
          const names = JSON.stringify(cart[0].name)
          const images = JSON.stringify(cart[0].image[0])
          const prices = JSON.stringify(cart[0].price)
          const cartQuantitys = JSON.stringify(cart[0].cartQuantity)
          const localTn  = localStorage.getItem("tmMedidas")
          const localCor  = localStorage.getItem("tmCores")
  
          const resTm = JSON.parse(localTn)
          const resCor = JSON.parse(localCor)
  
          //console.log(localCor)
  
          const tmMedidas = JSON.stringify(resTm[0].tm)
          const tmCores = JSON.stringify(resCor[0].cor)
  
          //let cvId = ids.replace(/"/g, "");
          let cvName = names.replace(/"/g, "");
          let cvImage = images.replace(/"/g, "");
          let cvPrice = prices.replace(/"/g, "");
          let cvQuantity = cartQuantitys.replace(/"/g, "");
          let cvTamnho = tmMedidas.replace(/"/g, "");
          let cvCorres = tmCores.replace(/"/g, "");
  
          const ArreyData = [
            cvName,
            cvPrice,
            cvQuantity,
            cvImage,
            cvTamnho,
            cvCorres,
            cart[0].url_product
            ]
  
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
            productName: ArreyData[0],
            productPrice: ArreyData[1],
            productQuantity: ArreyData[2],
            productImage: ArreyData[3],
            productSize: ArreyData[4],    
            productClolor: ArreyData[5],
            productUrl: ArreyData[6],
          }
          
          console.log(CreateCompra)
  
  
          await api.post("/compra", CreateCompra).then((res) => {
            toast.success("A compra foi criada com sucesso")
            console.log(res)
          }).catch((err) => {
            toast.error("Houve um erro ", err)
          })
        
      
          console.log(CreateCompra)
        }
      }

      if(cart[0] && cart[1] && cart[2] === undefined && cart[3] == undefined && cart[4] == undefined){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(novo_amount)

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
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
          cor2: tmCor[1] ? tmCor[1].cor : "",
          medidas2: tmItens[1] ? tmItens[1].tm : "",
          url_product2: `${cart[1].url_product}` ? `${cart[1].url_product}` : "",
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()

        if(cart[0] && cart[1] && cart[2] === undefined && cart[3] == undefined && cart[4] == undefined){

          //const ids = JSON.stringify(cart[0].id)
          const names = JSON.stringify(cart[0].name)
          const images = JSON.stringify(cart[0].image[0])
          const prices = JSON.stringify(cart[0].price)
          const cartQuantitys = JSON.stringify(cart[0].cartQuantity)
          const localTn  = localStorage.getItem("tmMedidas")
          const localCor  = localStorage.getItem("tmCores")
  
          const resTm = JSON.parse(localTn)
          const resCor = JSON.parse(localCor)
  
          //console.log(localCor)
  
          const tmMedidas = JSON.stringify(resTm[0].tm)
          const tmCores = JSON.stringify(resCor[0].cor)
  
          //let cvId = ids.replace(/"/g, "");
          let cvName = names.replace(/"/g, "");
          let cvImage = images.replace(/"/g, "");
          let cvPrice = prices.replace(/"/g, "");
          let cvQuantity = cartQuantitys.replace(/"/g, "");
          let cvTamnho = tmMedidas.replace(/"/g, "");
          let cvCorres = tmCores.replace(/"/g, "");
  
          const ArreyData = [
            cvName,
            cvPrice,
            cvQuantity,
            cvImage,
            cvTamnho,
            cvCorres,
            cart[0].url_product
            ]
  
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
            productName: ArreyData[0],
            productPrice: ArreyData[1],
            productQuantity: ArreyData[2],
            productImage: ArreyData[3],
            productSize: ArreyData[4],    
            productClolor: ArreyData[5],
            productUrl: ArreyData[6],
          }

          const names1 = JSON.stringify(cart[0].name)
          const images1 = JSON.stringify(cart[0].image[0])
          const prices1 = JSON.stringify(cart[0].price)
          const cartQuantitys1 = JSON.stringify(cart[0].cartQuantity)
          const localTn1  = localStorage.getItem("tmMedidas")
          const localCor1  = localStorage.getItem("tmCores")
  
          const resTm1 = JSON.parse(localTn1)
          const resCor1 = JSON.parse(localCor1)
  
          //console.log(localCor)
  
          const tmMedidas1 = JSON.stringify(resTm1[1].tm)
          const tmCores1 = JSON.stringify(resCor1[1].cor)

          //let cvId = ids.replace(/"/g, "");
          let cvName1 = names1.replace(/"/g, "");
          let cvImage1 = images1.replace(/"/g, "");
          let cvPrice1 = prices1.replace(/"/g, "");
          let cvQuantity1 = cartQuantitys1.replace(/"/g, "");
          let cvTamnho1 = tmMedidas1.replace(/"/g, "");
          let cvCorres1 = tmCores1.replace(/"/g, "");
  
          const ArreyData1 = [
            cvName1,
            cvPrice1,
            cvQuantity1,
            cvImage1,
            cvTamnho1,
            cvCorres1,
            cart[1].url_product
          ]
  
          const CreateCompra1 = {
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
            productName: ArreyData1[0],
            productPrice: ArreyData1[1],
            productQuantity: ArreyData1[2],
            productImage: ArreyData1[3],
            productSize: ArreyData1[4],    
            productClolor: ArreyData1[5],
            productUrl: ArreyData1[6],
          }
          
          
          console.log(CreateCompra)
  
  
          await api.post("/compra", CreateCompra).then((res) => {
            toast.success("A compra foi criada com sucesso")
            
            api.post("/compra1", CreateCompra1).then((res) => {
              console.log(res)
            }).catch((err) => {
              toast.error("Houve um erro ", err)
            })
          }).catch((err) => {
            toast.error("Houve um erro ", err)
          })
        
      
          console.log(CreateCompra)
        }
      }
      
      if(cart[0] && cart[1] && cart[2] && cart[3] == undefined && cart[4] == undefined){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res3 =  JSON.stringify(cart[2].image[0]) 
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(novo_amount)

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
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
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
          
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
         
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        //localStorage.clear()
        PagamentoMercadoPago()
      }

      if(cart[0] && cart[1] && cart[2] && cart[3] && cart[3] == undefined && cart[4] == undefined){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res3 =  JSON.stringify(cart[2].image[0]) 
        let res04 =  JSON.stringify(cart[3].image[0]) 
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(novo_amount)

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
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
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

          image4: `${res04}`? ` ${res04}` : "",
          nameproduct4: `${cart[3].name}`? `${cart[3].name}` : "",
          quanty4: `${cart[3].cartQuantity}`? `${cart[3].cartQuantity}` : "",
          price4: `${cart[3].price ? cart[3].price * cart[3].cartQuantity : ""}`,
          cor4: tmCor[3] ? tmCor[3].cor : "",
          medidas4: tmItens[3] ? tmItens[3].tm : "",
          url_product4: `${cart[3].url_product}` ? `${cart[3].url_product}` : "",

          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()
      }

      if(cart[0] && cart[1] && cart[2] && cart[3] && cart[4]){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res3 =  JSON.stringify(cart[2].image[0]) 
        let res04 =  JSON.stringify(cart[3].image[0]) 
        let res05 =  JSON.stringify(cart[4].image[0]) 
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(novo_amount)

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
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
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

          image4: `${res04}`? ` ${res04}` : "",
          nameproduct4: `${cart[3].name}`? `${cart[3].name}` : "",
          quanty4: `${cart[3].cartQuantity}`? `${cart[3].cartQuantity}` : "",
          price4: `${cart[3].price ? cart[3].price * cart[3].cartQuantity : ""}`,
          cor4: tmCor[3] ? tmCor[3].cor : "",
          medidas4: tmItens[3] ? tmItens[3].tm : "",
          url_product4: `${cart[3].url_product}` ? `${cart[3].url_product}` : "",

          image5: `${res05}`? ` ${res05}` : "",
          nameproduct5: `${cart[4].name}`? `${cart[4].name}` : "",
          quanty5: `${cart[4].cartQuantity}`? `${cart[4].cartQuantity}` : "",
          price5: `${cart[4].price ? cart[4].price * cart[4].cartQuantity : ""}`,
          cor5: tmCor[4] ? tmCor[4].cor : "",
          medidas5: tmItens[4] ? tmItens[4].tm : "",
          url_product5: `${cart[4].url_product}` ? `${cart[4].url_product}` : "",

          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()
      }
    
  }


  return (
    <>
     
      {cart == "" ? <Example/> :
        <CompraStyle>
       <FormBox>
          <form onSubmit={handleSubmit}>
          <br />
            <Title>
              Preencha com seus dados
            </Title>
            
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
                type="text" 
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
                name="cep" 
                id="cep" 
                onChange={(e) => setCep(e.target.value)} 
                value={cep.cep}  
                required
              />
              <label htmlFor="">Cep</label>
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
                type="text" 
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
            <ButtonBox type="submit">
              Finaliza Compra
            </ButtonBox>
          </form>  
      </FormBox>
    </CompraStyle>}
    <Logo2>
      <Link to="/" className='Logo'>Voltar para StylesTop</Link> 
    </Logo2>
    </>
  );
}

export default Compra;
