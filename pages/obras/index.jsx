import Pagina from "@/components/Pagina";
import apiArtes from "@/services/apiArtes";
import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const index = ({ artes }) => {
  return (
    <Pagina titulo="Obras de Arte">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Detalhes</th>
            <th>Titulo</th>
            <th>Artista</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {artes.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/obras/${item.id}`}>
                  <FaSearch />
                </Link>
              </td>
              <td>{item.title}</td>
              <td>{item.artist_title}</td>
              <td>{item.department_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiArtes.get(`/artworks`);
  const artes = await resultado.data.data;

  // const informacoes = await apiArtes.get("/artworks/info");
  // const info = await informacoes.data.data;
  return {
    props: { artes },
  };
}
