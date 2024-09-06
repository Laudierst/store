/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCor, addTm } from '../../redux/cart/cart';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { Header } from '../header';
import Footer from './footer/footer';
import { LoadingPage } from '../products/products';
import { ProductContainerPai, ProductDescImage, ProductDescPrimary, ProductDescPrimary2, ProductDescSecudanry, ProductImageMini } from './products_desc';
//import { ContainerComentario } from './stylesComentarios';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { ModalImageComentario } from '../modal/ModalImageComentario';

import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
//import { ModalDrop } from '../modal/ModalDrop';
//import { Modal } from '../modal/Modal';
//import { SlidsDescriptionOfertas } from './SlidsDescriptionOfertas';
import { Comentarios } from './comentarios';
import { Realacionandos } from './relacionados';
import { ReactVideoPlay, ReactVideoPlay2 } from './reactVideoPlay';
//import ModalDrop from '../modal/Modal';


export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

setTimeout(() => {
  scrollToTop()
},500)

export const LoadPage = () => {
   
  const [ dataCores, setDatacores ] = useState('')
  const [ dataTamanho, setTamanho ] = useState('')
  const navigate = useNavigate()

  const cart = useSelector(cartItems => cartItems.cart.cartItems.length)
  const product = useSelector(productsSlice => productsSlice.products.items)
  const dataProductFilter = product.filter(productData => (productData.id === "286a8b7b-9524-4f26-801b-e2d470496664"))
    
  const priceFilter = dataProductFilter.map(pri => pri.price)
  const colorFilter = dataProductFilter.map(pri => pri.color)
  const divideColorArrey = {...colorFilter[0]}
  
  const sizeFilter = dataProductFilter.map(pri => pri.size)
  const divideSizeArrey = {...sizeFilter[0]}


  const dispatch = useDispatch()

  function handlerCartAdd(e) {

    const id = localStorage.getItem("id")

    const dataCor = {id: id, cor: dataCores}
    const dataTm = {id: id, tm: dataTamanho}
      
    dispatch(addTm(dataTm))
    dispatch(addCor(dataCor))
  
      if(cart <= 4){
  
        if(dataTamanho == ""){
          alert("Você tem que escolher um tamanho antes!")
        }else{
          if(dataCores == ""){
            alert("Você tem que escolher uma cor antes!")
          }else{
            dispatch(addCart(e))
            navigate("/cartFinali")
          }
        }        
      
    }else{
      alert("Você so pode adiciona 5 itens no carrio por vez")
      }   
  }

  function handlerCartAdd2(e) {

    let id = localStorage.getItem("id")
    let nameProduct = localStorage.getItem("name")
   
   const dataCor = {id: id, cor: dataCores}
   const dataTm = {id: id, tm: dataTamanho}
    
    dispatch(addTm(dataTm))
    dispatch(addCor(dataCor))

    if(cart <= 4){

      if(dataTamanho == ""){
        alert("Você tem que escolher um tamanho e uma cor!")
      }else{
        if(dataCores == ""){
          alert("Você so escolheu um tamnho tem que escolher uma cor tambem!")
        }else{
          dispatch(addCart(e))
          toast.success(`O produto ${nameProduct} foi adicionado ao carrinho!`, 
           {position: toast.POSITION.TOP_CENTER})
    
           scrollToTop()
          //toast.success(`O produto ${nameProduct}`)
        }
      
      }        
      
    }else{
      alert("Você so pode adiciona 5 itens no carrio por vez")
    }   
  }

  let percentual = 0.25;
  let aumento = priceFilter * percentual;
  let novo_price = priceFilter - aumento;

 
  //imagem de meio de pagamentos bandeiras
  const imgCart = [
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png"},
		{img: "img_outras/horizontal_logo.png"},
	]

  const Todes = [divideColorArrey[0], divideColorArrey[1], divideColorArrey[2], divideColorArrey[3], divideColorArrey[4], divideColorArrey[5], divideColorArrey[6]]

  const FilterColor1 = Todes.filter(e => e == "preto" || e == "Preto" || e == "Preta" || e == "PRETO" || e == "black" || e == "Black")
  const FilterColor2 = Todes.filter(e => e == "Bege" || e == "bege" || e == "beje" || e == "Beje" || e == "Gray" || e == "gray" || e == "Cinza" || e == "cinza")
  const FilterColor3 = Todes.filter(e => e == "NUDE" || e == "nude" || e == "Nude")
  const FilterColor4 = Todes.filter(e => e == "ROSA" || e == "Rosa" || e == "rosa" || e == "pink" || e == "Pink" || e == "PINK")
  const FilterColor5 = Todes.filter(e => e == "Branco" || e == "branco" || e == "white" || e == "White" || e == "BRANCO")
  const FilterColor6 = Todes.filter(e => e == "Vermelho" || e == "vermelho" || e == "red" || e == "Red" || e == "VERMELHO")
  const FilterColor7 = Todes.filter(e => e == "Jeans escuro rasgado" || e == "jeans escuro rasgado" || e == "Jens escuro rasgado" || e == "Jeans Escuro" || e == "Jeans escuro"  || e == "Dins")
  const FilterColor8 = Todes.filter(e => e == "Jeans" || e == "jeans" || e == "JEANS")
  const FilterColor9 = Todes.filter(e => e == "Camuflado" || e == "Rajado" || e == "rajado" || e == "camuflado")
  const FilterColor10 = Todes.filter(e => e == "Amarela com Preto" || e == "Amarela com Branco" || e == "Preto com Branco" || e == "Preto com Verde")
  const FilterColor11 = Todes.filter(e => e == "Amarela" || e == "AMERELO" || e == "amarelo" || e == "Amarelo")
  const FilterColor12 = Todes.filter(e => e == "Verde" || e == "verde" || e == "VERDE")
  const FilterColor13 = Todes.filter(e => e == "Preto com Rosa")
  const FilterColor14 = Todes.filter(e => e == "Kaki" || e == "kaki" || e == "KAKI")
  const FilterColor15 = Todes.filter(e => e == "Azul com rosa")
  const FilterColor16 = Todes.filter(e => e == "multi" ||  e == "Multi" ||  e == "MULTI")
  const FilterColor17 = Todes.filter(e => e == "Vinho" ||  e == "vinho")
  const FilterColor18 = Todes.filter(e => e == "Jeans claro rasgado" || e == "Jeans Claro rasgado" || e == "jeans claro rasgado" || e == "Jeans claro resgado")
  const FilterColor19 = Todes.filter(e => e == "Verde limao" || e == "Verde florecente" || e == "verde limao" || e == "verde florecente")
  const FilterColor20 = Todes.filter(e => e == "Roxo" || e == "roxo" || e == "lilais" || e == "Lilais" || e == "ROXO")
  const FilterColor21 = Todes.filter(e => e == "Marron" || e == "marron" || e == "MARRON")
  const FilterColor22 = Todes.filter(e => e == "Jeans escuro" || e == "jeans escuro" || e == "JEANS ESCURO")
  const FilterColor23 = Todes.filter(e => e == "Jeans claro" || e == "Jeans Claro" || e == "jeans claro" || e == "JEANS CLARO" || e == "Jenas Escuro")
  const FilterColor24 = Todes.filter(e => e == "Branco com preto")
  const FilterColor25 = Todes.filter(e => e == "Branco com azul")
  const FilterColor26 = Todes.filter(e => e == "Branco com  laranja")
  const FilterColor27 = Todes.filter(e => e == "Branco com rosa")
  const FilterColor28 = Todes.filter(e => e == "Branco com verde")
  const FilterColor29 = Todes.filter(e => e == "Branco com vermelho")
  const FilterColor30 = Todes.filter(e => e == "Branco com cinza")
  const FilterColor31 = Todes.filter(e =>  e == "Branco com amarelo")
  const FilterColor32 = Todes.filter(e =>  e == "Branco com roxo")
  const FilterColor33 = Todes.filter(e => e == "Preto com azul")
  const FilterColor34 = Todes.filter(e => e == "Preto com laranja")
  const FilterColor35 = Todes.filter(e => e == "Preto com rosa")
  const FilterColor36 = Todes.filter(e => e == "Preto com verde")
  const FilterColor37 = Todes.filter(e => e == "Preto com vermelho")
  const FilterColor38 = Todes.filter(e => e == "Preto com cinza")
  const FilterColor39 = Todes.filter(e =>  e == "Preto com amarelo")
  const FilterColor40 = Todes.filter(e =>  e == "Preto com roxo")
  const FilterColor41 = Todes.filter(e =>  e == "Dourado" || e == "dourado" || e == "Dourada" || e == "dourada" || e == "DOURADO" || e == "DOURADA")
  const FilterColor42 = Todes.filter(e =>  e == "Azul" || e == "azul" || e == "AZUL")
  const FilterColor43 = Todes.filter(e =>  e == "Laranja" || e == "laranja" || e == "LARANJA")
  const FilterColor44 = Todes.filter(e =>  e == "Preto com bage")
  const FilterColor45 = Todes.filter(e =>  e == "Branco com bage" || e == "Branca com bage" || e == "branco com bage" || e == "branca com bage")
  const FilterColor46 = Todes.filter(e =>  e == "Bage" || e == "bege")
  const FilterColor47 = Todes.filter(e => e == "Jeans clara rasgado" || e == "jeans claro rasgado" || e == "jeans clara rasgada" || e == "Jeans Claro Rasgado" || e == "Jeans Claro Rasgada" || e == "jeans claro rasgado" || e == "jeans claro rasgada" || e == "JEANS CLARO RASGADO")
  const FilterColor48 = Todes.filter(e => e == "Jeans clara lisa" || e == "Jeans Claro lisa" || e == "jeans claro lisa" || e == "JEANS CLARO lisa" || e == "Jenas Escuro Lisa")
  const FilterColor49 = Todes.filter(e =>  e == "Marrom" || e == "marrom" || e == "MARROM")
  
 const Example = () => (
  <LoadingPage>
    <ReactLoading type='spokes' color='aqua' height={'100%'} width={'100%'} delay={'100'} />
  </LoadingPage>
);



  return (
    <>
      <Header/>
       
      <ProductContainerPai>
      {dataProductFilter == "" ? <Example/> :
          dataProductFilter.map(res => {

            const { id, name, description, quantity, image } = res;

            const imgList = [image[0], image[1], image[2], image[3], image[4]]

            function over0() {
              document.getElementById("logo").src = `${image[0] || image[1]}`;
            }
            function over1() {
              document.getElementById("logo").src = `${image[1] || image[2]}`;
            }
            function over2() {
              document.getElementById("logo").src = `${image[2] || image[1]}`;
            }
          
            function over3() {
              document.getElementById("logo").src = `${image[3] || image[0]}`;
            }
          
            function over4() {
              document.getElementById("logo").src = `${image[4] || image[1]}`;
            }

            return (
              <>
                <ProductDescImage>
                  <Swiper 
                    style={{border: "solid 1px"}}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ['100%', 0, 0],
                      },
                    }}
                    modules={[EffectCreative]}
                    className='swiper'
                  >
                    {imgList.map(imgData => (
                      imgData == "" ? image[0] : 
                        <SwiperSlide key={id} style={{background: "white"}}>
                          <img src={imgData} className='containerImg' id="logo" alt="imgPricipal" />
                        </SwiperSlide>
                    ))}
                  </Swiper>
                 </ProductDescImage>
                <ProductImageMini>
                  <div className="imgMini">
                    <div className='imgMini' >
                      <img src={image[0] || image[1]} alt="img0" onMouseOver={() => over0(over0)} />
                    </div>
                     <div className='imgMini' >
                      <img src={image[1] || image[0]} alt="img0" onMouseOver={() => over1(over1)} />
                    </div>
                     <div className='imgMini' >
                      <img src={image[2] || image[0]} alt="img0" onMouseOver={() => over2(over2)} />
                    </div>
                     <div className='imgMini' >
                      <img src={image[3] || image[2]} alt="img0" onMouseOver={() => over3(over3)} />
                    </div>
                     <div className='imgMini' >
                      <img src={image[4] || image[1]} alt="img0" onMouseOver={() => over4(over4)} />
                    </div>
                  </div>
                </ProductImageMini>
                <ProductDescPrimary>
                  <div className="divDesc">
                    <div className="divdesc">
                    <h5 ><strong>{name}</strong></h5>
                    <div>
                      <span className='mr-2'>4.8</span>
                      <GoStarFill className='text-warning mb-1'/>
                      <GoStarFill className='text-warning mb-1'/>
                      <GoStarFill className='text-warning mb-1'/>
                      <GoStarFill className='text-warning mb-1'/>
                      <TiStarHalfOutline className='text-warning mb-1 h4'/>
                      <span className='ml-2'>({quantity})</span>
                      <p></p>
                      <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
                    </div>
                    <br />
                    
                    <h1>R$ {novo_price},00</h1>
                   
                    <span>
                  <FaCreditCard style={{margin: "10px"}} /> Em até 12x sem juros
                  <br />
                  {imgCart.map(imgCard => (
                    <img src={imgCard.img} alt="img" style={{width: "15%", display: "inline-block", margin: "5PX"}}/>
                  ))}
                </span>
                    <br />
                    <br />
                    <br />
                    <p>
                      <strong >Cor: </strong>
                      <span>{dataCores ? dataCores : "Escolha uma cor"}</span>
                    </p>
                    <div>
                    <div role="group" aria-label="Basic example" className='efctButton'>
                      {FilterColor1[0] ? <button type="button" style={{background: "#000000", border: "none", color: "white", padding: "15px"}} onClick={() => setDatacores(FilterColor1[0])}></button> : ""}
                      {FilterColor2[0] ? <button type="button" style={{background: "#C8B69A", border: "none", color: "white", padding: "15px"}} onClick={() => setDatacores(FilterColor2[0])}></button> : ""}
                      {FilterColor3[0] ? <button type="button" style={{background: "#D0BDB2", border: "none", color: "blue", padding: "15px"}} onClick={() => setDatacores(FilterColor3[0])}></button> : ""}
                      {FilterColor4[0] ? <button type="button" style={{background: "pink", border: "none", color: "gray", padding: "15px"}} onClick={() => setDatacores(FilterColor4[0])}></button> : ""}
                      {FilterColor5[0] ? <button type="button" style={{background: "#white", border: "solid 1px", color: "green", padding: "15px"}} onClick={() => setDatacores(FilterColor5[0])}></button> : ""}
                      {FilterColor6[0] ? <button type="button" style={{background: "red", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor6[0])}></button> : ""}
                      {FilterColor7[0] ? <button type="button" style={{background: "#3084bd", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor7[0])}></button> : ""}
                      {FilterColor8[0] ? <button type="button" style={{background: "#175de0", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor8[0])}></button> : ""}
                      {FilterColor9[0] ? <button type="button" style={{backgroundImage: `url("https://www.shutterstock.com/image-vector/camouflage-seamless-pattern-trendy-style-600nw-1456834667.jpg")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor9[0])}></button> : ""}
                      {FilterColor10[0] ? <button type="button" style={{background: "#fad60c", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor10[0])}></button> : ""}
                      {FilterColor11[0] ? <button type="button" style={{background: "#d6ec0e", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor11[0])}></button> : ""}
                      {FilterColor12[0] ? <button type="button" style={{background: "#31b63c", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor12[0])}></button> : ""}
                      {FilterColor13[0] ? <button type="button" style={{backgroundImage: `url("https://i.pinimg.com/736x/db/48/79/db4879aa3ebd36d996fe2fba6a3ccbef.jpg")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor13[0])}></button> : ""}
                      {FilterColor14[0] ? <button type="button" style={{background: "#8c5b32", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor14[0])}></button> : ""}
                      {FilterColor15[0] ? <button type="button" style={{background: "orange", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor15[0])}></button> : ""}
                      {FilterColor16[0] ? <button type="button" style={{backgroundImage: `url("https://ae01.alicdn.com/kf/S451958a0dc9b415aa02e94e439d709f9R/Conjunto-de-Shorts-e-Top-sem-mangas-estampa-tropical-das-mulheres-decote-em-V-ver-o.jpg_640x640.jpg_.webp")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor16[0])}></button> : ""}
                      {FilterColor17[0] ? <button type="button" style={{background: `#712D52`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor17[0])}></button> : ""}
                      {FilterColor18[0] ? <button type="button" style={{background: "#8fc8ed", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor18[0])}></button> : ""}
                      {FilterColor19[0] ? <button type="button" style={{background: "#87f30b", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor19[0])}></button> : ""}
                      {FilterColor20[0] ? <button type="button" style={{background: "#2525c0", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor20[0])}></button> : ""}
                      {FilterColor21[0] ? <button type="button" style={{background: "#884E1E", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor21[0])}></button> : ""}
                      {FilterColor22[0] ? <button type="button" style={{background: "#113adf", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor22[0])}></button> : ""}
                      {FilterColor23[0] ? <button type="button" style={{background: "#45a2e0", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor23[0])}></button> : ""}
                      {FilterColor24[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, black)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor24[0])}></button> : ""}
                      {FilterColor25[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, #00c3ff)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor25[0])}></button> : ""}
                      {FilterColor26[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, #FA8327)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor26[0])}></button> : ""}
                      {FilterColor27[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, #c6707e)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor27[0])}></button> : ""}
                      {FilterColor28[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, green)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor28[0])}></button> : ""}
                      {FilterColor29[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, red)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor29[0])}></button> : ""}
                      {FilterColor30[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, gray)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor30[0])}></button> : ""}
                      {FilterColor31[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, #5c0aeb)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor31[0])}></button> : ""}
                      {FilterColor32[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, yellow)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor32[0])}></button> : ""}
                      {FilterColor33[0] ? <button type="button" style={{background: "linear-gradient(90deg, black,#00c3ff )", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor33[0])}></button> : ""}
                      {FilterColor34[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, #FA8327)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor34[0])}></button> : ""}
                      {FilterColor35[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, #c6707e)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor35[0])}></button> : ""}
                      {FilterColor36[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, green)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor36[0])}></button> : ""}
                      {FilterColor37[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, red)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor37[0])}></button> : ""}
                      {FilterColor38[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, gray)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor38[0])}></button> : ""}
                      {FilterColor39[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, yellow)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor39[0])}></button> : ""}
                      {FilterColor40[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, #5c0aeb)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor40[0])}></button> : ""}
                      {FilterColor41[0] ? <button type="button" style={{background: "#D6A52E", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor41[0])}></button> : ""}
                      {FilterColor42[0] ? <button type="button" style={{background: "#57D8DD", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor42[0])}></button> : ""}
                      {FilterColor43[0] ? <button type="button" style={{background: "#FF662A", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor43[0])}></button> : ""}
                      {FilterColor44[0] ? <button type="button" style={{background: "linear-gradient(90deg, black, #F0D5B7)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor44[0])}></button> : ""}
                      {FilterColor45[0] ? <button type="button" style={{background: "linear-gradient(90deg, white, #F0D5B7)", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor45[0])}></button> : ""}
                      {FilterColor46[0] ? <button type="button" style={{background: "#CEB096", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor46[0])}></button> : ""}
                      {FilterColor47[0] ? <button type="button" style={{background: "#45a2e0", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor47[0])}></button> : ""}
                      {FilterColor48[0] ? <button type="button" style={{background: "#45a2e0", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor48[0])}></button> : ""}
                      {FilterColor49[0] ? <button type="button" style={{background: "#A08967", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor49[0])}></button> : ""}
                      { }
                    </div>
                    <br />
                    </div>
                    <div className='btnButtonTamanho'>
                      <p>
                        <strong>Tamnho: </strong>
                        <span>{dataTamanho ? dataTamanho : "Escolha uma tamanho"}</span>
                      </p>
                      {divideSizeArrey[0] ? 
                      <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 5px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[0])}>
                        {divideSizeArrey[0]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[1] ? 
                      <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 5px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[1])}>
                        {divideSizeArrey[1]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[2] ? 
                      <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 5px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[2])}>
                        {divideSizeArrey[2]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[3] ? 
                      <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 5px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[3])}>
                        {divideSizeArrey[3]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[4] ? 
                        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 5px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[4])}>
                        {divideSizeArrey[4]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[5] ? 
                        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[5])}>
                        {divideSizeArrey[5]}
                      </button>
                      : ""
                      }
                      {divideSizeArrey[6] ? 
                        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(divideSizeArrey[6])}>
                        {divideSizeArrey[6]}
                      </button>
                      : ""
                      }
                  </div>

                    <div>
                    </div>
                  </div>
                  </div>
                 <ReactVideoPlay/>
                </ProductDescPrimary>
                
                <ProductDescPrimary2>
                  <div className="divDesc">
                  <div className="divdescSecudare">
                <strong>Envio para todo o país</strong>
                <br />
                <span>Saiba os prazos de entrega e as formas de envio.</span>
                <div >
                  <br />
                  <LocationOnIcon /> Frete Gratis
                </div>
                <br />
                <div>
                  <p>
                    <strong>Disponivel em Estoque</strong> 
                    <div>
                      disponivel ({quantity})
                    </div>
                    <br /><br />
                    <strong>Finalize sua compra aqui!</strong>
                  </p>
                </div>
                
                  <button onClick={() => handlerCartAdd(dataProductFilter[0])} className='btnButton'>Comprar agora</button>
                  
                  <button onClick={() => handlerCartAdd2(dataProductFilter[0])} className='btnButton'>Adicionar ao carrinho</button>

                  <br />
                  <div>
                    <br /><br />
                    <p><SwapHorizIcon /> <strong>Devolução Gratis</strong> <br />
                      <span >Você tem 7 dias a partir da data de recebimento.</span>
                    </p>
                  </div>
                  <br />
                  <div>
                    <p><VerifiedUserIcon /> <strong >Compra Garantida</strong> <br />
                      <span >eceba o produto que está esperando ou devolvemos o dinheiro.</span>
                    </p>
                  </div>
                </div>
                  </div>
                  
                </ProductDescPrimary2>
              
                <ProductDescSecudanry>
                  <div className="div2">
                    <h4><strong>DESCRIÇÃO</strong></h4>
                    <p>
                      {description}
                    </p>
                  </div>
                 <ReactVideoPlay2/>
                <Realacionandos/>
                {<Comentarios/>}
                </ProductDescSecudanry>
                
              </>     
            )
          })
        }
      
      
      </ProductContainerPai>
        <Footer/>
    </>
  );
}

