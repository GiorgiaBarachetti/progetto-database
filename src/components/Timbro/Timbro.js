import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../../css/timbro.css'


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button onClick={handleClose}>Chiudi</Button>
      </section>
    </div>
  );
};

const Timbro = () => {
  const [timbri, setTimbri] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchTimbri = async () => {
    const response = await fetch("http://localhost:3000/utenti");
    const dataJson = await response.json();
    setTimbri(dataJson);
  };

  const [dataOra, setDataOra] = useState("");
  const [tipo, setTipo] = useState("entrata");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Data e ora: ${dataOra}, Tipo: ${tipo}`);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchTimbri();
  }, []);

  return (
    <div>
      <Button onClick={handleOpenModal} style={{margin: "10px"}}>Nuovo</Button>
      {timbri?.map((timbro, index) => (
        <div>Il tuo ID: {timbro.id}</div>
      ))}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {timbri?.map((timbro, index) => (
            <tr key={index}>
              <td>{timbro.data}</td>
              <td>{timbro.ora}</td>
              <td>{timbro.tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} handleClose={handleCloseModal}>
      <Form onSubmit={handleSubmit} >
      <Form.Group controlId="data-ora">
        <Form.Label>Data e ora</Form.Label>
        <Form.Control
          type="datetime-local"
          value={dataOra}
          onChange={(e) => setDataOra(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="tipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Control
          as="select"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="entrata">Entrata</option>
          <option value="uscita">Uscita</option>
        </Form.Control>
      </Form.Group>

      <Button type="submit" style={{marginTop:"5px", marginBottom:"5px"}}>Invia</Button>
    </Form>
      </Modal>
    </div>
  );
};

export default Timbro;
