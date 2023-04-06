import React, { useState, useEffect } from 'react';
import '../../css/timbro.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Chiudi</button>
      </section>
    </div>
  );
};

const Timbro = () => {
  const [timbri, setTimbri] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchTimbri = async () => {
    const response = await fetch("urljson");
    const dataJson = await response.json();
    setTimbri(dataJson.users);
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
      <button onClick={handleOpenModal}>Nuovo</button>
      {timbri.map((timbro, index) => (
        <div>Il tuo ID: {timbro.id}</div>
      ))}
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {timbri.map((timbro, index) => (
            <tr key={index}>
              <td>{timbro.data}</td>
              <td>{timbro.ora}</td>
              <td>{timbro.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Timbratura</h2>
        <p>Contenuto del Modale</p>
      </Modal>
    </div>
  );
};

export default Timbro;