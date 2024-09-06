import React from 'react'
import { ProduVideoPlay, ProduVideoPlay2 } from './ReactVideoPlay'
import { DefaultPlayer  as Video } from "react-html5video"
import "react-html5video/dist/styles.css"
//import video from "./videos/ts.mp4"
//import ReactPlayer from "react-player"

export const ReactVideoPlay = () => {

  //Video autoPlay loop
  return(
    <>
      <ProduVideoPlay>
        <Video style={{width: 550, height: 310, marginTop: 80}}>
          <source src="https://cvf.shopee.com.br/file/dcd1a8a6e14d3fe5ff955f08bc88991b" type='video/webm'/>
        </Video>
      </ProduVideoPlay>
    </>
  )
}

export const ReactVideoPlay2 = () => {

  //Video autoPlay loop
  return(
    <>
      <ProduVideoPlay2>
        <Video>
          <source src="https://cvf.shopee.com.br/file/dcd1a8a6e14d3fe5ff955f08bc88991b" type='video/webm'/>
        </Video>
      </ProduVideoPlay2>
    </>
  )
}
