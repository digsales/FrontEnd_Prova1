import Pagina from "@/components/Pagina";
import apiArtes from "@/services/apiArtes";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaRegShareSquare, FaBackspace } from "react-icons/fa";

const index = ({ obra }) => {
  const image = `https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg`;
  return (
    <Pagina titulo={obra.title}>
      <Row>
        <Col>
          {obra.image_id ? (
            <Card border="danger">
              <Card.Header className="bg-danger text-white">Foto</Card.Header>
              <Card.Img
                src={image}
                alt={obra.title}
                className="border border-secondary rounded-top "
              />
              <Card.Body>
                <Link className="btn btn-primary" href={image} target="_blank">
                  Ampliar <FaRegShareSquare />
                </Link>
              </Card.Body>
            </Card>
          ) : (
            <Card border="danger">
              <Card.Header className="bg-danger text-white">
                Sem Foto
              </Card.Header>
            </Card>
          )}
          <Link className="btn btn-success my-3" href={"/obras"}>
            <FaBackspace /> Voltar
          </Link>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Header className="bg-danger text-white">
              {obra.title}
            </Card.Header>
            <Card.Body>
              <p>
                <strong>Artista:</strong> {obra.artist_title}
              </p>
              <p>
                <strong>Departamento:</strong> {obra.department_title}
              </p>
              <p>
                <strong>Origem:</strong> {obra.place_of_origin}
              </p>
              <p>
                <strong>Dimensões:</strong> {obra.dimensions}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiArtes.get(`/artworks/${id}`);
  const obra = await resultado.data.data;
  return {
    props: { obra },
  };
}
