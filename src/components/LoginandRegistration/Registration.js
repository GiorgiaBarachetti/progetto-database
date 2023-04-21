import {Form} from 'react-bootstrap';
import React from 'react'
import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
import Spacer from '../componentsLogin/spacer';
import background from '../../utils/images/registrazione.jpeg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../ruotes/PathRoutes';

import Login from './Login';

function Registration() {

  const [utenti, setUtenti] = useState([]);

    const navigate = useNavigate('')
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [datanascita, setDataNascita] = useState('')
    const [sesso, setSesso] = useState('M')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [nomeError, setNomeError] = useState('')
    const [cognomeError, setCognomeError] = useState('')
    const[emailError, setEmailError] = useState('')
    const [dataNascitaError, setDataDiNascitaError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users")
      const dataJson = await response.json()
      setUtenti(dataJson)
  }

    useEffect(()=>{
      fetchUsers()
  },[])

    const handleChangeNome = (event) => {
        setNome(event.target.value);
      }

      const handleChangeCognome = (event) => {
        setCognome(event.target.value);
      }
      
      const handleChangeData = (event) => {
        setDataNascita(event.target.value);
      }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      }
    
      const handleChangePassword = (event) => {
        setPassword(event.target.value);
      }

      const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


      const handleSaveClick = () => {
        if (!validateEmail.test(email.toLowerCase())) {
          setEmailError("Email non valida")
          return;
        }
        if(!email.length){
          setEmailError('Inserimento email obbligatorio')
          return;
        }
        if (utenti.some(u => u.email === email)) {
          setEmailError('Email già registrata');
          return;
        }
        if (!nome.length) {
            setNomeError("Inserimento nome obbligatorio")
            return;
          }
        if (!cognome.length) {
            setCognomeError("Inserimento cognome obbligatorio")
            return;
          }
        if (!datanascita.length) {
          setDataDiNascitaError("Inserimento data obbligatorio")
          return;
        }
        if (!password.length) {
          setPasswordError("Inserimento password obbligatorio")
          return;
        }
        if(!validateEmail.test(email.toLowerCase()) || !nome.length || !cognome.length){
          alert("Riprova ad effettuare l'iscrizione") 
          return null
        }

        const data = { nome, cognome, datanascita, sesso, email, password };
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            alert('Data saved successfully!');
            navigate(ROUTE.login)
          } else {
            alert('Error saving data');
          }
        })
        .catch(error => {
          console.log('Error:', error);
        });
      }

  return <div style={{paddingLeft:'10px', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        <Spacer height={20}/>
        <h1 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}> Registrati con le tue credenziali..</h1>
        <Input 
        placeholder='Nome'
        value={nome}
        onChange={handleChangeNome}
        error={nomeError}
        />
        <Input 
        placeholder='Cognome'
        value={cognome}
        onChange={handleChangeCognome}
        error={cognomeError}
        />
        <Input 
        label='(Data di nascita)'
        id="data" 
        type="date"
        value={datanascita}
        onChange={handleChangeData}
        error={dataNascitaError}
        />
        <Form.Control
            style={{marginTop: '20px', width:'40px'}}
            as="select"
            value={sesso}
            onChange={(e) => setSesso(e.target.value)}
          >
            <option value="m">M</option>
            <option value="f">F</option>
          </Form.Control>

        <Input 
        placeholder='Email'
        value={email}
        onChange={handleChangeEmail}
        error={emailError}
        />
        
        <Input 
        placeholder='Password'
        value={password}
        onChange={handleChangePassword}
        error={passwordError}
        />
      <Spacer height={10}/>
      <Form.Check style={{backgroundColor:'white', fontSize:'10px', marginRight:'10px', padding:'20px', borderRadius:'5px'}} type="checkbox" label="Ai sensi dell'Articolo 7 del GDPR, l'utente con la presente acconsente alla raccolta, alla conservazione e al trattamento dei dati personali forniti dall'utente all'amministratore, che è il fornitore, attraverso l'uso del servizio. L'utente dà il consenso al trattamento e all'utilizzo dei dati personali dell'utente da parte del fornitore, dei suoi dipendenti e/o dei suoi partner commerciali autorizzati. Questo consenso è concesso a condizione che l'utente non rimuova il proprio account dal servizio."/>
      <Button label="REGISTRAMI" onClick={handleSaveClick}></Button>
      <Spacer height={50}/>
    </div>
  
}

export default Registration
