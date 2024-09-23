import React from "react";
// Importa a modal do react-modal
import Modal from "react-modal";
import LogoImg from "./image/Logo.png";

export const ModalApk = () => {
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(true);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  // Código JSX necessário para criar uma modal simples que abre e fecha
  return (
    <div>
      <button onClick={abrirModal}>Abrir modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0 ,0, 0.8)",
          },
          content: {
            border: "1px solid green",
            background: "#839cff",
            borderRadius: "20px",
            padding: "20px",
            width: "60%",
            height: "100px",
            margin: "auto",
          },
        }}
      >
        <img src={LogoImg} alt="apk" style={{ width: 50, borderRadius: 50 }} />
        <a
          href="http://"
          target="_blank"
          style={{ fontWeight: "bold", margin: 12 }}
          rel="noopener noreferrer"
        >
          BAIXAR APK
        </a>
        <button
          style={{
            fontWeight: "bold",
            color: "red",
            border: "none",
            background: "#839CFF",
            position: "absolute",
            marginTop: "-15px",
            marginLeft: "10%",
            fontSize: 20,
          }}
          onClick={fecharModal}
        >
          X
        </button>
      </Modal>
    </div>
  );
};
