import React, { useEffect, useState } from 'react';
import FormularioCadastro from '../formulario/FormularioCadastro';
//import './cadastro.css';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
//import { toast } from 'react-toastify';
import api from '../../api/api';
import { Promocao } from './styled';
//import { ContainerBG } from "./styled"

export default function Cadastro() {

  //const URL = "https://api-store-v4bm.onrender.com/user"

  const [product, setProduct] = useState([])
  const [promo, setPromo] = useState([])

  useEffect(() => {
    async function ProductAll(){
      const req = await api.get("/product")
      const res = await req.data

      setProduct(res)
    }
    ProductAll()
    async function PromoAll(){
      const req = await api.get("/promocao")
      const res = await req.data

      setPromo(res)
    }
    PromoAll()
  },[])

  //console.log(promo)

  /**
   * Esse hook useState esta recebendo o valor do evento onClick e assim
   * passo como parâmetro para o componente FormularioCadastro para que assim
   * possamos preencher os campos imput e atualizá-lo com identificação via id
   *
   */
  const [idAtual, setIdAtual] = useState('');
  const [pega, setPega] = useState('');

  /**
   * Essa função é responsável por apaga um usuario via id,
   * que esta vindo via evento do onClick
   */
  const Apagausuario = (id) => {

    //console.log(id)

    api //Esse process.env.REACT_APP_API_URL é uma variave de ambiente que contem a url da api
      .delete("/product/" + id)
      .then((res) => {
        alert('O usuário foi deletado com sucesso');
        
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta apaga esse usuário, erro relacionado a ' +
          erro
        );
      });
  };

  //https://piracicabamktdigital.com.br/wp-content/uploads/2023/03/Banner-Promocao-Dia-dos-Pais-1-1536x768.jpg
  //https://img.freepik.com/psd-premium/venda-de-black-friday-nas-midias-sociais-no-instagram-no-banner-da-web-ou-no-modelo-de-capa-do-facebook_220443-1040.jpg
  //https://img.freepik.com/psd-premium/venta-black-friday-publicacion-redes-sociales-publicacion-instagram-banner-web-o-plantilla-portada-facebook_220443-1063.jpg?w=2000

  return (
    <div className='bg-dark'>
      <br />
      <h3 style={{textAlign: "left", fontWeight: "bold", color: "white", padding: "10px"}}>Painel de controle para gerenciamento de produtos</h3>
     
      <div className="row">
        
        <div className="col-md-6 ">
          <h3 style={{textAlign: "center", fontWeight: "bold", color: "white"}}>Lista de produtos na database</h3>
          <table class="table">
            <thead>
              <tr className="text-white">
                <th scope="col">
                  <i className="fas fa-coins" />
                </th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>

            {product.map((r) => (
              <tbody key={r.id}>
                <tr className="btn-outline-secondary text-white">
                  <th scope="row">
                    <button
                      type="button"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setPega(r);
                      }}
                    >
                     <img src={r.image[0]} alt="img" className="col-5" />
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title titolo2"
                              id="exampleModalLabel"
                            >
                              Dados do Usuário
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-secondary"
                            ></button>
                          </div>
                          <div class="modal-body text-dark">
                            <Modal dados={pega} />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-block "
                              data-bs-dismiss="modal"
                            >
                              Fecha
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td style={{color: "white", fontSize: "0.7vw"}}>
                    {r.name}
                  </td>
                  <td>R$ {r.price},00</td>
                  <td>
                    <p onClick={() => { setIdAtual(r.id)}} className="mr-2">
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </p>
                    <p onClick={() => Apagausuario(r.id)}>
                      <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <Promocao>
            {promo.map(im => (
              <div key={im.id}>
                <img src={im.image} alt="img" />
              </div>
            ))}
          </Promocao>
        </div>
        <div className="col-md-5" style={{textAlign: "center", fontWeight: "bold", color: "white"}}>
          <FormularioCadastro {...{ idAtual, product, promo }} />
        </div>
      </div>
    </div>
  );
}
