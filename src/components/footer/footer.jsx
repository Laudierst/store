/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { ContainerFooter, ContainerFooter1, ContainerFooter2 } from "./styles";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ShareSocial } from "react-share-social";
import { toast } from "react-toastify";
import correios from "./images/correios@2x.png";
import pac from "./images/pac@2x.png";
import sedex from "./images/sedex@2x.png";
import trasport from "./images/transportadoras.jpg";
import seloSeguranca from "./images/selo-seguranca.png";
//import ssl from "./images/ssl.png";
//import { Height } from '@material-ui/icons';

export default function Footer() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  function sendEmail(e) {
    e.preventDefault();

    const templetEmail = {
      from_name: name,
      email: email,
    };

    if (name == "" || email == "") {
      toast.error(`Os compos tem que está preechidos!`);
    }

    emailjs
      .send(
        "service_mu6fcse",
        "template_vkb1i55",
        templetEmail,
        "H_LKfhQ_8yndus8Af"
      )
      .then(
        (result) => {
          toast.success(
            "Mensagem enviada com sucesso! 👍 Em breve você receberá um E-mail de com novidades!"
          );
        },
        (error) => {
          toast.error("Houve um erro tente novamente mais tarde!");
        }
      );

    e.target.reset();
  }

  const imgCart = [
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png",
    },
    {
      img: "https://www.designi.com.br/images/preview/10028350.jpg",
    },
  ];

  const formaEnvio = [
    {
      envio: correios,
    },
    {
      envio: pac,
    },
    {
      envio: sedex,
    },
    {
      envio: trasport,
    },
  ];

  const seguranca = [
    /*{
      seguro: ssl,
    },*/
    {
      seguro: seloSeguranca,
    },
  ];

  return (
    <>
      <ContainerFooter>
        <Link to="/">
          <h2>PensanoEmMim</h2>
        </Link>

        <form onSubmit={sendEmail} name="contact" nelify>
          <h5>Receba novidades em primeira mão, deixe seu e-mail aqui!</h5>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="submit" value="Enviar" className="btnInput" />
          {/*<textarea name="message" id="" cols="100%" rows="4" placeholder='Message'></textarea>*/}
        </form>
      </ContainerFooter>
      <ContainerFooter2>
        <div>
          <h4>Bandeiras</h4>
          {imgCart.map((img) => (
            <img src={img.img} alt="im" />
          ))}
        </div>
        <div>
          <h4>Meios de envio</h4>
          {formaEnvio.map((img) => (
            <img src={img.envio} alt="im" />
          ))}
        </div>
        <div className="imgSeg">
          {seguranca.map((seg) => (
            <img src={seg.seguro} alt="im" />
          ))}
        </div>
      </ContainerFooter2>
      <ShareSocial
        style={{ backgroundColor: "#fffff", /*"#001414"*/ width: "100%" }}
        url="https://PensanoEmMim.com.br"
        socialTypes={[
          "facebook",
          "whatsApp",
          "twitter",
          "linkedin",
          "reddit",
          "line",
          "instapaper",
          "email",
          "ok",
          "email",
        ]}
      />
      <ContainerFooter1>
        <div>
          <strong>
            Trabalhamos com total responsabilidade para que você, receba seu
            produto ou devolvemos seu dinheiro d volta.
          </strong>
          <p>&copy; Todos os direitos reservado PensanoEmMim</p>
        </div>
        <div>
          <url>
            <li>E-mail: laudiersantanamei@gmail.com</li>
            <li>Phone: (75) 998239680</li>
            <li>CNPJ: 11.363.576/0001-30</li>
          </url>
        </div>
      </ContainerFooter1>
    </>
  );
}
