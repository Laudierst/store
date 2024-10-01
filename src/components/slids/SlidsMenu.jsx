import { useState, useRef } from "react";
import { Coontainer } from "./slidsMenu";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { useQuery } from "react-query";

export function SlidsMenu() {
  const [data, setData] = useState([]);
  const carrousel = useRef(null);

  //const convertName = data[13].name.slice(6)
  //console.log(convertName)

  const { isLoading } = useQuery("meuproduto", async () => {
    const req = await api.get(`/category`);
    const res = await req.data;

    setData(res);

    if (isLoading) {
      return <div className="load">Carregando...</div>;
    }
  });

  if (!data || !data.length) return null;

  const hendleLeftClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  const hendleRigthClik = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  //console.log(data, "jhgjghg");
  //console.clear()

  return (
    <>
      <Coontainer>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore
              className="buttons1"
              style={{ width: 50, height: 100 }}
            />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          <div>
            <Link to="/vestido">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[0]?.image === 0
                        ? "/imgCategory/calca-f.webp"
                        : data[0]?.image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[0]?.name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/calcaf">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[1].image === 0
                        ? "/imgCategory/bolsawebp"
                        : data[1].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[1].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/bolsa">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[2].image === 0
                        ? "/imgCategory/bolsawebp"
                        : data[2].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[2].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/acessorio">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[3].image === 0
                        ? "/imgCategory/shor-f.webp"
                        : data[3].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[3].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/conjuntof">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[4].image === 0
                        ? "/imgCategory/shortf.webp"
                        : data[4].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[4].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/saia">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[5].image === 0
                        ? "/imgCategory/conjuntofm.webp"
                        : data[5].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[5].name}</span>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/body">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[6].image === 0
                        ? "/imgCategory/estetica.webp"
                        : data[6].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[6].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/macaquinho">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[7].image === 0
                        ? "/imgCategory/bone.webp"
                        : data[7].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[7].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/intimo">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[8].image === 0
                        ? "/imgCategory/short-m.webp"
                        : data[8].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[8].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/eletronicos">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[9].image === 0
                        ? "/imgCategory/calca-m.webp"
                        : data[9].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[9].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/estetica">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[10].image === 0
                        ? "/imgCategory/info.webp"
                        : data[10].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[10].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/camisetaf">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[11].image === 0
                        ? "/imgCategory/Smartphone.webp"
                        : data[11].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[11].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/calcados">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[12].image === 0
                        ? "/imgCategory/eletronico.webp"
                        : data[12].image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[12].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/smartphone">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[13].image === 0
                        ? "/imgCategory/smartphone.webp"
                        : data[13]?.image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[13].name}</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/shortf">
              <div className="item">
                <div className="image">
                  <img
                    src={
                      data[14].image === 0
                        ? "/imgCategory/smartphone.webp"
                        : data[14]?.image
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="info">
                <span className="name">{data[14].name}</span>
              </div>
            </Link>
          </div>
          {/*<div>
              <Link to="/acessorio">
                <div className="item">
                  <div className="image">
                    <img src={data[14].image === "" ? "/imgCategory/Acessorio.webp" : data[0]?.image} : data[15].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[15].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/relogio">
                <div className="item">
                  <div className="image">
                    <img src={data[].image === 0 ? /imgCategory/relogio.webp" : data[0]?.image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[16].name}</span>
                </div>
              </Link>
          </div>*/}
        </div>

        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext
              className="buttons2"
              style={{ width: 50, height: 100 }}
            />
          </button>
        </div>
      </Coontainer>
    </>
  );
}
