import React from 'react'
import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
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

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      }
    
      const handleChangePassword = (event) => {
        setPassword(event.target.value);
      }


  return <div style={{backgroudColor:'pink'}}>
      <Input 
      placeholder='Nome'
      />
      <Input 
      placeholder='Cognome'
      />
      <Input 
      placeholder='Data di nascita'
      />
      <Input 
      placeholder='Sesso'
      as="select"
      value={sesso}
      onChange={(e) => setSesso(e.target.value)}
      >
        <option value="entrata">Entrata</option>
        <option value="uscita">Uscita</option>
      </Input>
      <Input 
      placeholder='Email'
      />
      <Button>REGISTRATI</Button>
    </div>
  
}

export default Registration
