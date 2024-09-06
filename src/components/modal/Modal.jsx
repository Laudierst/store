/* eslint-disable no-use-before-define */
/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";
import { CFontainerImageProduct, ConatinerModal } from './modal';
import api from '../../api/api';
import { toast } from 'react-toastify';

export const Modal = () => {

  const localId = localStorage.getItem("id")

  const [images, setImages] = useState([]);
  const [imagesLista1, setLista1] = useState([]);
  const [imageUm, setImageUm] = useState([])
  const [name, setName] = useState([]);
  const [estrela, setEstrela] = useState([]);
  const [message, setMessage] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setImages(imageList);
  };

  const onChange0 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImageUm(imageList[0].data_url);
    
    setLista1(imageList);

    //console.log(imageList)
  };

  const onChange4 = (e) => {
    // data for submit
    
    setName(e);
  };
  const onChange5 = (e) => {
    // data for submit
    
    setEstrela(e);
  };
  const onChange6 = (e) => {
    // data for submit
    
    setMessage(e);
  };

  const dataList = {
    imgName: images,
    name: name,
    estrela: estrela,
    message: message,
    idProduct: localId
  }

  const handleProcess = async (e) => {

    e.preventDefault()

    if(imageUm){

      const dataListPronto = {
        image: [imageUm],
        imgName: dataList.imgName[0].data_url,
        name: name,
        estrela: estrela,
        message: message,
        idProduct: localId
      }

      console.log(dataListPronto)
    
     await api.post("/comentario", dataListPronto).then((response) => {

      try {
        setTimeout(() => {
        }, 10000)
 
       toast.success(`Obrigado por da sua opinião!`)
 
         const dataRelations2 = {
           id_comentario: `${response.data.comentario.id}`,
           id_product: `${localId}`
         }
     
         api.post("/comentariorelation", dataRelations2).then((catego) => {
           toast.success(`O relacionamento foi feito!`)
         })
        } catch (error) {
          console.log(error.response.data)
        }
      })
    }
  }

  return (
    <ConatinerModal>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <h5>Coloque uma imagem sua</h5>
          <li className='liImageName'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div>
                {imageList == "" ?
                <>
                   <button
                      style={{marginLeft: "-10px"}}
                      className='btn-outline-warning btn-block'
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                    <div>
                      <ImCloudUpload style={{width: 210, height: 80, cursor: "pointer", margin: "auto", display: "flex"}}/>
                    </div>
                    </button>
                    &nbsp;
                </>
                : 
               
                imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="200" height="200" style={
                        {borderRadius: "100px", border: "solid 1px", padding: "10px", margin: "5px"}
                      }/>
                    </div>
                    
                    <div>
                    <button style={
                      {width: 160, fontSize: 15, fontWeight: "bold", margin: "auto", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px", margin: "auto", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px"}
                      } onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          </li>
          <li>
            {' '}
            <input type="text" placeholder='Seu nome' name='name' onChange={(e) => onChange4(e.target.value)} />
          </li>
          <li>
            <input type="text" placeholder='quantas estrelas' name='estrela' onChange={(e) => onChange5(e.target.value)} />
          </li>
          <li>
            <textarea type="text" maxlength="200" placeholder='Sua message' name='message' onChange={(e) => onChange6(e.target.value)} />
          </li>
        </ul>
        <CFontainerImageProduct>
        <div className='imageName'>
        <h5>Imagem do produto</h5>
        <ImageUploading
            multiple
            value={imagesLista1}
            onChange={onChange0}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="">
                {imageList == "" ?
                <>
                   <button
                      style={{marginLeft: 25}}
                      className='btn-outline-warning btn-block'
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                    <div>
                      <ImCloudUpload style={{width: 210, height: 80, cursor: "pointer", margin: "auto", display: "flex"}}/>
                    </div>
                    </button>
                    &nbsp;
                </>
                : 
               
                imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                      <img src={image['data_url']} alt="" width="250" height="250" style={
                        {border: "solid 1px", padding: "10px", margin: "5px"}
                      }/>
                    </div>
                    
                    <div>
                  </div>
                  </div>
                ))}
                
              </div>
            )}
          </ImageUploading>
          </div>
          
        </CFontainerImageProduct>
      </div>
      <button type="submit" className='btn btn-info btn-block' onClick={handleProcess}>Enviar</button>
    </ConatinerModal>
  );
};
