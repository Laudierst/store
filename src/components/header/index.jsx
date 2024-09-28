import { AiFillAlert } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";
import { LuPackageSearch } from "react-icons/lu";
import logosimples from "./images/LogoTop2.png";

// Styles
import { Container, Logo, ContainerAMR, ContainerPRT } from "./styles";
import { SeartResults } from "./SeartResults";

export function Header() {
  return (
    <>
      <ContainerAMR>
        <Logo>
          <a href="/" className="a-color">
            <img src={logosimples} alt="img" className="img3" />
            PensandoEmMim
          </a>
        </Logo>
        <a href="/" style={{ fontSize: 13 }}>
          <AiFillAlert className="mb-2 h5" /> SUPER OFERTAS - PensandoEmMim tem
          de tudo
        </a>
      </ContainerAMR>

      <SeartResults />
      <Container></Container>
      <ContainerPRT>
        <ul>
          <li>
            <a
              href="https://wa.me/5575998172448?text=Ol%C3%A1%20tudo%20bem%2C%20gostaria%20de%20saber%20mais%20sobre%20alguns%20produtos%20da%20Loja%3F"
              target="blank"
            >
              <AiOutlineWhatsApp className="text-white h5 m-1 mb-2 p" />
              Contato
            </a>
          </li>
          <li>
            <a
              href="https://rastreamento.correios.com.br/app/index.php"
              target="blank"
            >
              <BsTruck className="text-white h5 m-1 mb-2 p" />
              Rastreio
            </a>
          </li>
          <li>
            <a href="/politicatrocadevolucao" target="blank">
              <LuPackageSearch className="text-white h5 m-1 mb-2 p" />
              Devolução
            </a>
          </li>
          <li>
            <a href="/novidades">
              <AiFillAlert className="text-white h5 m-1 mb-2 p" />
              Novidade
            </a>
          </li>
          <li>
            <a href="/politica" target="blank">
              <BsJournalText className="text-white h5 m-1 mb-2 p" />
              Politica
            </a>
          </li>
          <li>
            <a href="/meuproduto" target="blank">
              <LuPackageSearch className="text-white h5 m-1 mb-2 p" />
              MeusPedido
            </a>
          </li>
        </ul>
      </ContainerPRT>
    </>
  );
}
