import { useNavigate } from "react-router-dom";
import "./style.css";
import { LoadingPage } from "../products/products";
import ReactLoading from "react-loading";

export const SeartResult = ({ data }) => {
  const navigate = useNavigate();

  function LocalSto(e) {
    localStorage.removeItem("id");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);

    setTimeout(() => {
      <LoadingPage>
        <ReactLoading
          type="spokes"
          color="aqua"
          height={"100%"}
          width={"100%"}
          delay={"100"}
        />
      </LoadingPage>;
    }, 1000);

    const ids = localStorage.getItem("id");
    navigate("/desc/" + ids);
    window.location.reload();
  }

  /*const Description = (e) => {
    console.log(e.id)
    navigate("/desc/" + e.id)
	window.location.reload()
  }*/

  //console.log(data, "t")

  const resutList = data.map((item) => {
    return (
      <>
        {data ? (
          <div className="serach">
            <span key={item.id} style={{ textDecoration: "none" }}>
              <span>
                <p onClick={() => LocalSto(item)}>{item.name}</p>
                {item.image[0] ? (
                  <img
                    src={item.image[0]}
                    onClick={() => LocalSto(item)}
                    alt="img"
                  />
                ) : (
                  ""
                )}
              </span>
            </span>
          </div>
        ) : (
          <h4>Veja se voçe escreveu corretamente</h4>
        )}
      </>
    );
  });

  return <div>{resutList}</div>;
};
