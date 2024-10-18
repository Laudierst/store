/* eslint-disable eqeqeq */
//import { useState } from 'react';
import { ConatinerModalImageSlids } from "./modal";
import { Swiper, SwiperSlide } from "swiper/react";

//console.clear()
export const ModalImageComentario = ({ data, comnetario }) => {
  const arrey = [comnetario];

  //window.history.pushState(null, null, "/desc")
  //const ev = window.history.back()
  //const str =  window.history.pushState(null, null, "/desc")

  if (window.history.length) {
    const ev = document.querySelector("#root");

    ev.addEventListener("hidePrevented.bs.modal", () => {
      alert(window.history.length);
    });
  }

  const filterImage = arrey[0]?.filter((resp) => resp.id == data);

  //console.log(data, "k")
  return (
    <ConatinerModalImageSlids>
      <>
        {
          <Swiper
            slidesPerView={1}
            pagination={{ onClick: true }}
            grabCursor={true}
            navigation
            style={{ width: "100%", height: "80vh", color: "aqua" }}
          >
            {filterImage.map((imgData) => {
              const { image } = imgData;
              const loopImg = [image[0], image[1], image[2], image[3]];

              return (
                <div key={ImageData}>
                  {loopImg.map((res) =>
                    res ? (
                      <SwiperSlide
                        key={res}
                        style={{ width: "100%", height: "80vh" }}
                      >
                        <img
                          src={res}
                          style={{ width: "100%", height: "70vh" }}
                          id="logo"
                          alt="Imagem não encontrada"
                        />
                      </SwiperSlide>
                    ) : (
                      ""
                    )
                  )}
                </div>
              );
            })}
          </Swiper>
        }
      </>
    </ConatinerModalImageSlids>
  );
};
