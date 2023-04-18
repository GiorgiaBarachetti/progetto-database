import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
import background from '../../utils/images/background.jpeg'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {PathRoutes, ROUTE} from '../ruotes/PathRoutes'

const Login = () => {

  const [utenti, setUtenti] = useState([]);

  const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users")
      const dataJson = await response.json()
      setUtenti(dataJson)
  }

  useEffect(()=>{
      fetchUsers()
  },[])


  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
    
  const navigate = useNavigate();

  const handleChangeUsername = (event) => {
    setEmail(event.target.value);
    setError('');
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const user = utenti.find(u => u.email === email && u.password === password);
    if (user) {
      alert(`Benvenuto ${user.name}`)
      navigate(ROUTE.timbro);
    } else {
      setError('Invalid email or password!');
    }
  }

  const handleRegistration = () => {
    navigate(ROUTE.registration)
    /*
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (users.some(u => u.email === email)) {
      setError('Email already registered');
      return;
    }
    const newUser = { id: users.length + 1, email: email, password: password };
    setUsers([...users, newUser]);
    alert('Nuovo dipendente aggiunto')
    navigate(ROUTE.timbro);
    */
  }

  return (
    <div id="divLogin" 
    style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", border:'1px solid lightblue' , backgroundColor: 'lightblue' , padding: '20px' , paddingBottom:'40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{color:'white'}}>Login</h1>
      <Input
        placeholder='Email'
        onChange={handleChangeUsername}
      />
      <Input 
        id='psw'
        placeholder='Password'
        type= 'password'
        onChange={handleChangePassword}
      />
        <p style={{color: 'red', marginTop:'10px', fontSize:'15px'}}>{error}</p>
      <Button onClick={handleLogin} label='LOG IN'></Button>
      <p style={{marginTop:'20px', marginBottom:'0', color:'white'}}>Non sei ancora registrato? registrati ora.</p>
      <Button onClick={handleRegistration} label='REGISTRATI'>REGISTRATI</Button>
    </div>
  );
};

export default Login;
