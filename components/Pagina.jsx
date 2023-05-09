import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-3 text-center text-white mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container>{props.children}</Container>

      <Rodape />
    </>
  );
};

export default Pagina;
