import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { CFontainerImageProduct, ConatinerModal } from './modal';
import { FaCloudUploadAlt } from "react-icons/fa";
//import { toast } from 'react-toastify';
//import api from '../../api/api';

export const ModalDrop = () => {

  const localId = localStorage.getItem("id")


  const [name, setName] = useState([]);
  const [estrela, setEstrela] = useState([]);
  const [message, setMessage] = useState([]);


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

  const [file, setFile] = useState(null)
  
  //if(file) return null;
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/jpeg': ['.pdf', '.png', '.jpg', '.jpeg', '.webp'],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((files) => Object.assign(files, {
          image: URL.createObjectURL(files)
        }))
      )
    }
  });


  const dataList = {
    imgName: file ? file[0].image : "",
    name: name,
    estrela: estrela,
    message: message,
    idProduct: localId
  }

  //console.log(file)

  return (
    <ConatinerModal style={{display: "inline-block"}}>
      <div className='imageName'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {file ? <img src={file[0].image} alt="img" style={{display: "flex", margin: "auto", width: 100, height: 100, borderRadius: 100}} /> :
            isDragActive ?
              <p>Solte para adicionar ...</p> :
              <FaCloudUploadAlt style={{display: "flex", margin: "auto", fontSize: 100, cursor: "pointer"}}/>
          }
        </div>
        <ul>
          <li className='liImageName'>
          </li>
          <li>
            {' '}
            <input type="text" placeholder='Seu nome' name='name' onChange={(e) => onChange4(e.target.value)} />
          </li>
          <li>
            <input type="text" placeholder='quantas estrelas' name='estrela' onChange={(e) => onChange5(e.target.value)} />
          </li>
          <li>
            <textarea type="text" maxlength="200" placeholder='Seu nome' name='message' onChange={(e) => onChange6(e.target.value)} />
          </li>
        </ul>
        <CFontainerImageProduct>
        <h5>Imagem do produto</h5>
        <ImageListDrop1/>
        <ImageListDrop2/>
        <ImageListDrop3/>
        <ImageListDrop4/>
        <ImageListDrop5 dataTodos={dataList}/>
        </CFontainerImageProduct>
      </div>
    </ConatinerModal>
  );
};

const ImageListDrop1 = ({dataTodos}) => {

  const [data, setData] = useState(null)
  
  //if(file) return null;
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/jpeg': ['.pdf', '.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setData(
        acceptedFiles.map((files) => Object.assign(files, {
          image: URL.createObjectURL(files)
        }))
      )
    }
  });

  /*onDrop: (e) => {
      e.preventDefault()
      const files = Array.from(e.dataTransfer.files);
      files.map((fileData) => {;
        const {name, size} = fileData;
        const reader = new FileReader();
        reader.readAsDataURL(fileData)
        reader.onloadend = () => {
          const image = reader.result;
          const images = { name, size, image };

          setData((prevImage) => {
            return [...prevImage, images]
          })
        }
        return null
      })
    }
  });*/

  return (
    <ConatinerModal style={{display: "inline-block"}}>
      <div className='imageName'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {data ? <img src={data[0].image} alt="img" style={{display: "flex", margin: "auto", width: 100, height: 100, borderRadius: 100}} /> :
            isDragActive ?
              <p>Solte para adicionar ...</p> :
              <FaCloudUploadAlt style={{display: "flex", margin: "auto", fontSize: 100, cursor: "pointer"}}/>
          }
        </div>
        
      </div>
    </ConatinerModal>
  )
}

const ImageListDrop2 = ({dataTodos}) => {

  const [data, setData] = useState(null)

  //if(file) return null;
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/jpeg': ['.pdf', '.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setData(
        acceptedFiles.map((files) => Object.assign(files, {
          image: URL.createObjectURL(files)
        }))
      )
    }
  });

  return (
    <ConatinerModal style={{display: "inline-block"}}>
      <div className='imageName'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {data ? <img src={data[0].image} alt="img" style={{display: "flex", margin: "auto", width: 100, height: 100, borderRadius: 100}} /> :
            isDragActive ?
              <p>Solte para adicionar ...</p> :
              <FaCloudUploadAlt style={{display: "flex", margin: "auto", fontSize: 100, cursor: "pointer"}}/>
          }
        </div>
       
      </div>
    </ConatinerModal>
  )
}

const ImageListDrop3 = ({dataTodos}) => {

  const [data, setData] = useState(null)
  
  //if(file) return null;
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/jpeg': ['.pdf', '.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setData(
        acceptedFiles.map((files) => Object.assign(files, {
          image: URL.createObjectURL(files)
        }))
      )
    }
  });

  return (
    <ConatinerModal style={{display: "inline-block"}}>
      <div className='imageName'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {data ? <img src={data[0].image} alt="img" style={{display: "flex", margin: "auto", width: 100, height: 100, borderRadius: 100}} /> :
            isDragActive ?
              <p>Solte para adicionar ...</p> :
              <FaCloudUploadAlt style={{display: "flex", margin: "auto", fontSize: 100, cursor: "pointer"}}/>
          }
        </div>
      </div>
    </ConatinerModal>
  )
}

const ImageListDrop4 = ({dataTodos}) => {

  const [data, setData] = useState(null)

  //if(file) return null;
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/jpeg': ['.pdf', '.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setData(
        acceptedFiles.map((files) => Object.assign(files, {
          image: URL.createObjectURL(files)
        }))
      )
    }
  });

  return (
    <ConatinerModal style={{display: "inline-block"}}>
      <div className='imageName'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {data ? <img src={data[0].image} alt="img" style={{display: "flex", margin: "auto", width: 100, height: 100, borderRadius: 100}} /> :
            isDragActive ?
              <p>Solte para adicionar ...</p> :
              <FaCloudUploadAlt style={{display: "flex", margin: "auto", fontSize: 100, cursor: "pointer"}}/>
          }
        </div>
      </div>
    </ConatinerModal>
  )
}

const ImageListDrop5 = ({dataTodos}) => {

  const localId = localStorage.getItem("id")

  const [data] = useState(null)

  //if(file) return null;
 

  const handleProcess = async (e) => {

    e.preventDefault()

    //const res = {...dataTodos}
    
    const img1 = localStorage.getItem("image1")
    const img2 = localStorage.getItem("image1")
    const img3 = localStorage.getItem("image1")
    const img4 = localStorage.getItem("image1")
    const img5 = localStorage.getItem("image1")

    if(data){

      const dataListPronto = {
        image: [img1, img2, img3, img4, img5],
        imgName: dataTodos.imgName,
        name: dataTodos.name,
        estrela: dataTodos.estrela,
        message: dataTodos.message,
        idProduct: localId
      }

      console.log(dataListPronto)
    
      /*await api.post("/comentario", dataListPronto).then((response) => {
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
      })

      //console.log(dataList.image[0][0].data_url)
      console.log(dataListPronto)
    }else{
      console.log("Tem algo errado")*/
    }
  }

  return (
    <ConatinerModal>
      <div>
        <button type="submit" className='btnEnviar' onClick={handleProcess}>Enviar</button>
      </div>
    </ConatinerModal>
  )
}

