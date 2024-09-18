/* eslint-disable eqeqeq */
import { ConatinerModalImageSlids } from "./modal";
import { Swiper, SwiperSlide } from "swiper/react";

//console.clear()
export const SlidsComentarioImg = ({ data, comnetario }) => {
  const arrey = [comnetario];

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
                <>
                  {loopImg.map((res) => (
                    <SwiperSlide
                      key={imgData}
                      style={{ width: "100%", height: "100vh" }}
                    >
                      {res == "" ? (
                        ""
                      ) : (
                        <img
                          src={res}
                          style={{ width: "100%", height: "80vh" }}
                          id="logo"
                          alt="Imagem não encontrada"
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </>
              );
            })}
          </Swiper>
        }
      </>
    </ConatinerModalImageSlids>
  );
};
