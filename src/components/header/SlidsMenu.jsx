import { useEffect, useState, useRef } from "react";
import { Container } from "./styles";
import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

export function SlidsMenu() {

  const [ data, setData ] = useState([])
  const carrousel = useRef(null)
  
  console.log(data)
  useEffect(() => {
    async function RequaryData(){
      const req = await axios.get("https://api-store-v4bm.onrender.com/product")
      const res = await req.data

      setData(res)
    }
    RequaryData()
  },[])

  if(!data || !data.length) return null

  const hendleLeftClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
  }

  const hendleRigthClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft += carrousel.current.offsetWidth
  }

  return (
    <>
      <Container>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {data.map(res => {

            const { id, name, price, image } = res
            
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ 100,00</span>
                  <span className="price">R$ {price},00</span>
                </div>
              </div>
            )
            
          })}
        </div>
        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext className="buttons2"/>
          </button>
        </div>
      </Container>
    </>
  )
}
