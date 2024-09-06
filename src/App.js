import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { ErrorBoundary } from "react-error-boundary";
//import { Products } from "./components/products/Products";
//import Desc from "./components/descricao/descricao-produto";
import Cart from "./components/cart";
import CartFinalize from "./components/cart/cartFinalize";
import Politicas from "./components/politica/Politicas";
//import ReactGA from "react-ga" 
import Compra from "./components/compra/Compra";
import { Vestido } from "./components/categorys/Vestido";
import { Calcado } from "./components/categorys/Calcado";
import { Relogio } from "./components/categorys/Relogio";
import { AudioVideo } from "./components/categorys/AudioVideo";
import { Intima } from "./components/categorys/Intima";
import { Maquiagem } from "./components/categorys/Maquiagem";
import { Conjuntof } from "./components/categorys/Conjuntof";
import { Calcaf } from "./components/categorys/Calcaf";
import { Shortm } from "./components/categorys/Shortm";
import { Shortf } from "./components/categorys/Shortf";
import { Calcam } from "./components/categorys/Calcam";
import { Camisetaf } from "./components/categorys/Camisetaf";
import { Camisetam } from "./components/categorys/Camisetam";
import { Informatica } from "./components/categorys/Informatica";
import { Ferramentas } from "./components/categorys/Ferramentas"
import { Estetica } from "./components/categorys/Estetica"
import { PoliticasDevolucaoTroca } from "./components/politicaTrocaDevolucao/politicaTrocaDevolucao";
import { Meuproduto } from "./components/Meuproduto";
import { Products } from "./components/products/Products"
import { Bone } from "./components/categorys/Bone";
import { Eletronica } from "./components/categorys/Eletronica";
import { Smartphone } from "./components/categorys/Smartphone";
import { register } from "swiper/element/bundle"
import { DescriptionProducts } from "./components/descricao/descricao-produtos";
import { LoadPage } from "./components/leadPage/LoadPage"
import { Acessorio } from "./components/categorys/Acessorio";
import { ProductsLoading } from "./components/products/ProductsLoading";

console.log("teste ls")

register()
// eslint-disable-next-line import/first
import 'swiper/css';
// eslint-disable-next-line import/first
import 'swiper/css/navigation';
// eslint-disable-next-line import/first
import 'swiper/css/pagination';
// eslint-disable-next-line import/first
import 'swiper/css/scrollbar';
// eslint-disable-next-line import/first
//import 'swiper/css/effect-flip';


// Conexão com google Analytct
//const TRACKING_ID = "" 

//ReactGA.initialize(TRACKING_ID)

function App() {

  //var stateObj = { foo: "bar" };
  //window.history.pushState(stateObj, "page 2", "/desc");

  useEffect(() => {
    window.scroll({
      top: 100,
    });

  },[])

  /*setTimeout(() => {
    localStorage.clear()
  },30000)*/

  //const localId = localStorage.getItem("id")

  //let url = window.location.pathname;
  //let parts = url.split("/");
  //let lastPart = parts.pop() || parts.pop();

  //window.history.pushState(null, null, `/${localId}`) 

  /*useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);*/
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },

    {
      path: "/loading",
      element: <ProductsLoading />,
    },

    {
      path: "/descpage",
      element: <LoadPage />,
    },

    {
      path: "/cart",
      element: <Cart />,
    },

    {
      path: `/desc`,
      element: <DescriptionProducts />,
    },

    {
      path: "/cartFinali",
      element: <CartFinalize />,
    },
    {
      path: "/politica",
      element: <Politicas />,
    },
    {
      path: "/politicatrocadevolucao",
      element: <PoliticasDevolucaoTroca />,
    },
    {
      path: "/compra",
      element: <Compra />,
    },
    {
      path: "/vestido",
      element: <Vestido />,
    }, {
      path: "/calcados",
      element: <Calcado />,
    },
    {
      path: "/relogio",
      element: <Relogio />,
    },
    {
      path: "/audiovideo",
      element: <AudioVideo />,
    },
    {
      path: "/intimo",
      element: <Intima />,
    },
    {
      path: "/maquiagem",
      element: <Maquiagem />,
    },
    {
      path: "/conjuntof",
      element: <Conjuntof />,
    },
    {
      path: "/calcaf",
      element: <Calcaf />,
    },
    {
      path: "/shortm",
      element: <Shortm />,
    },
    {
      path: "/acessorio",
      element: <Acessorio />,
    },
    {
      path: "/shortf",
      element: <Shortf />,
    },
    {
      path: "/calcam",
      element: <Calcam />,
    },
    {
      path: "/camisetaf",
      element: <Camisetaf />,
    },{
      path: "/camisetam",
      element: <Camisetam />,
    },
    {
      path: "/informatica",
      element: <Informatica />,
    },
    {
      path: "/ferramentas",
      element: <Ferramentas />,
    },
    {
      path: "/estetica",
      element: <Estetica />,
    },
    {
      path: "/meuproduto",
      element: <Meuproduto />,
    },
    {
      path: "/bone",
      element: <Bone />,
    },
    {
      path: "/eletronico",
      element: <Eletronica />,
    },
    {
      path: "/smartphone",
      element: <Smartphone />,
    }

  ]);  

  function ErroHandler() {
    return <h4>Houve um erro</h4>;
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router}>
        <div className="page-container">
          <div className="conatiner-wrap">
            <ErrorBoundary
              FallbackComponent={ErroHandler}
              onError={(arg1, arg2) => {
                console.log("arg1", arg1, "arg2", arg2);
              }}
              >            
            </ErrorBoundary>
            <ErrorBoundary />
          </div>
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
