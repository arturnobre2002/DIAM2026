import React from "react";
import { Button, Form, FormGroup, Table } from "reactstrap";
import moment from "moment";

function DetailData({ options, comentarios, question, toggle }) {
  // (1)

  const closeModal = (e) => {
    // (2)
    e.preventDefault();
    toggle();
  };

  return (
    <Form onSubmit={closeModal}>
      {/* (3) */}
      <FormGroup>
        <b>Texto:</b>
        <p>{question.questao_texto}</p>

        <b>Data de publicação:</b>
        <p>{moment(question.pub_data).format("YYYY-MM-DD HH:mm")}</p>
        {/* (4) */}
      </FormGroup>

      <FormGroup>
        <Table>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Opção</th>
              <th style={{ textAlign: "right" }}>Votos</th>
            </tr>
          </thead>

          <tbody>
            {options.map((o) => (
              // (5)
              <tr key={o.id}>
                <td style={{ textAlign: "left" }}>{o.opcao_texto}</td>
                <td style={{ textAlign: "right" }}>{o.votos}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </FormGroup>

      <FormGroup>

        <b>Comentários</b>
            {comentarios.map((c) => (
            <div key={c.id}>
              <b>Autor:</b>
              <p>{c.autor}</p>
              <b>Comentário:</b>
              <p>{c.comentario_texto}</p>
            </div>
          ))}


      </FormGroup>

      <Button type="submit">Fechar</Button>
      {/* (3) */}
    </Form>
  );
}

export default DetailData;