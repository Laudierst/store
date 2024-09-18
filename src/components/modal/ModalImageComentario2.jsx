import { useEffect, useState, useRef } from "react";
import { CoontainerSlids } from "./modal";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../api/api";
//import { useDispatch } from "react-redux";
//import { addDecription } from "../../redux/cart/cart";

export const ModalImageComentario = ({ data, comnetario }) => {
  const arrey = [comnetario];

  const filterImage = arrey[0]?.filter((resp) => resp.id == data);

  const carrousel = useRef(null);

  if (!data || !data.length) return null;

  const hendleLeftClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    console.log(e, "teste");
  };

  const hendleRigthClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    console.log(e, "teste");
  };

  //console.log(data, "")

  return (
    <>
      <CoontainerSlids>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {filterImage.map((imgData) => {
            const { image } = imgData;
            const loopImg = [image[0], image[1], image[2], image[3]];

            return (
              <>
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      {loopImg.map((res) =>
                        res == "" ? (
                          ""
                        ) : (
                          <img
                            src={res}
                            id="logo"
                            alt="Imagem não encontrada"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </>
            );
          })}
        </div>
        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext className="buttons2" />
          </button>
        </div>
      </CoontainerSlids>
    </>
  );
};
