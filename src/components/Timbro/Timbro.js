import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
//import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../../css/timbro.css'
import '../../css/popUpTimbro.css'
import 'datatables.net/js/jquery.dataTables.min.js'

import $ from "jquery";

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
  
  const [showModal, setShowModal] = useState(false);
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

  

const handleSave  = async () => {
  const body = JSON.stringify({ dataOra, tipo });
    await fetch('http://localhost:3000/utenti', {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });
}
$(document).ready(function () {
  setTimeout(function () {
  $('#myTable').DataTable({
    ajax: 'http://localhost:3000/utenti',
    columns: [
        { data: 'dataOra' },
        { data: 'tipo' }
    ],
  });
});
}); //inserisci codice in un pulsante per evitare allert 
    

  return (
    <div>
      <Button onClick={handleOpenModal} style={{margin: "10px"}}>Nuovo</Button>
      

      
      <table id="myTable" className="table align-items-center justify-content-center mb-0"  >
        <thead>
          <tr>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">dataOra</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">tipo</th>
          </tr>
        </thead>
        <tfoot>
            <tr>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">dataOra</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">tipo</th>
            </tr>
        </tfoot>
      </table>
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

      <Button type="submit" style={{marginTop:"5px", marginBottom:"5px"}}onClick={handleSave} >Invia</Button>
    </Form>
      </Modal>
    </div>
  );
};

export default Timbro;
