import {Form} from 'react-bootstrap';
import React from 'react'
import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
import Spacer from '../componentsLogin/spacer';
import background from '../../utils/images/registrazione.jpeg'
import {useState} from 'react'

function Registration() {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [dataDiNascita, setDataDiNascita] = useState('')
    const [sesso, setSesso] = useState('M')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleChangeNome = (event) => {
        setNome(event.target.value);
      }

      const handleChangeCognome = (event) => {
        setCognome(event.target.value);
      }
      
      const handleChangeData = (event) => {
        setDataDiNascita(event.target.value);
      }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      }
    
      const handleChangePassword = (event) => {
        setPassword(event.target.value);
      }


  return <div style={{paddingLeft:'10px', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        <Spacer height={20}/>
        <h1 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}> Registrati con le tue credenziali..</h1>
        <Input 
        placeholder='Nome'
        onChange={handleChangeNome}
        />
        <Input 
        placeholder='Cognome'
        onChange={handleChangeCognome}
        />
        <Input 
        id="data" 
        type="date"
        onChange={handleChangeData}
        />
          
        <Input 
        placeholder='Data di nascita'
        
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
        />
      <Spacer height={10}/>
      <Form.Check style={{backgroundColor:'white', fontSize:'10px', marginRight:'10px', padding:'20px', borderRadius:'5px'}} type="checkbox" label="Ai sensi dell'Articolo 7 del GDPR, l'utente con la presente acconsente alla raccolta, alla conservazione e al trattamento dei dati personali forniti dall'utente all'amministratore, che è il fornitore, attraverso l'uso del servizio. L'utente dà il consenso al trattamento e all'utilizzo dei dati personali dell'utente da parte del fornitore, dei suoi dipendenti e/o dei suoi partner commerciali autorizzati. Questo consenso è concesso a condizione che l'utente non rimuova il proprio account dal servizio."/>
      <Button label="REGISTRAMI"></Button>
      <Spacer height={50}/>
    </div>
  
}

export default Registration
