import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {PathRoutes, ROUTE} from '../ruotes/PathRoutes'

const Login = () => {


    const names = [
          {'id':1,
          'name': 'gio',
          'password': 'gio'
          },
  
          {'id': 2,
          'name': 'glo',
          'password': 'glo'
          },
      ]
  
      const validatEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/
  
      const [username, setUsername] = useState(''); 
      const [password, setPassword] = useState(''); 
      const [error, setError] = useState(''); 
      
      const [errorUsername, setErrorUsername] = useState('');
  
      const navigate = useNavigate();
  
      const handleChangeUsername = (event) => {
          setUsername(event.valueOf());
          setError('');
      }
  
      const handleChangePassword = (event) => {
          setPassword(event.target.valueOf());
      }
  /*
      const alertMessage = () =>{
          alert(document.getElementById('username').value)
      }
  */
  
  
      //controllo errori password
      
      const handleClickLogin = () => {
          if((document.getElementById('username').value)==='luca' && (document.getElementById('psw').value)=== 'luca'){
              return navigate('timbro')
          }
          /*
          if(!validatEmail.test(username.toLowerCase())){
              setErrorUsername("Errore nell'username");
          }
          
              /*navigate(ROUTE.timbro);
          }else if(username.toLowerCase() === '' && password.toLowerCase() === ''){
              return setError('Inserisci le credenziali nei campi');
          }else{
              return setError('LOGIN ERRATA');
          }*/
          }

    return (
        <div style={{border:'1px solid lightblue' , backgroundColor: 'lightblue' , padding: '20px' , paddingBottom:'40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{color:'white'}}>Login</h1>
                <Input
                  id='username'
                  placeholder='Write here...'
                  
                  onChange={handleChangeUsername}
                  
                />
                <Input 
                  id='psw'
                  label='Password '
                  placeholder='Write here...'
                  type= 'password'
                  onChange={handleChangePassword}
               />
                <Button
                 onClick={handleClickLogin}                
                />
                <div style={{color: 'black'}}>{error}</div>
            </div>
    );
};

export default Login;
