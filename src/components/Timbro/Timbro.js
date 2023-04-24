import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import {ROUTE} from '../ruotes/PathRoutes'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../css/timbro.css'
import '../../css/popUpTimbro.css'
import $ from "jquery";
import background from '../../utils/images/background-timbro.jpg'

//$.DataTable = require('datatables.net');

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
  const navigate = useNavigate();


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
    await fetch('http://localhost:8080/progetto_gruppo', {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });
}

const handleReturnToLogin = () =>{
  navigate(ROUTE.login);
}

  $(document).ready(function () {
    setTimeout(function () {
    $('#myTable').DataTable({
      destroy: true,
      ajax: 'http://localhost:8080/progetto_gruppo',
      columns: [
          { data: 'dataOra' },
          { data: 'tipo' }
      ],
    });
  });
  });
  /*
  #oggetto che gli piace 
  {
  "utenti": {
    "data": [
      {
        "dataOra": "2023-04-08T22:21",
        "tipo": "entrata"
      }
    ]
  }
}
l'oggetto creato da me con questo formato non da errore

#oggetto che crea

{
  "utenti": {
    "dataOra": "2023-04-08T22:38",
    "tipo": "entrata"
  }
}
l'oggetto come lo crea lui da errore 

ipotesi: il plugin json server funziona solo se 

  */


    

  return (
    <div div style={{padding:'10px', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", display: 'flex', flexDirection: 'column'}}>
      <Button onClick={handleOpenModal} style={{margin: "10px"}}>Nuovo</Button>


      
      <table id="myTable" className="display"  width='100%'>
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
      
      <Button onClick={handleReturnToLogin} style={{margin: "10px"}}>Back</Button>
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
