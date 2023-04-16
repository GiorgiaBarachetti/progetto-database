import Input from '../componentsLogin/input'
import Button from '../componentsLogin/button'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {PathRoutes, ROUTE} from '../ruotes/PathRoutes'

const Login = () => {



    
  const [users, setUsers] = useState([
    {id: 1, email: 'gio@example.com', password: 'gio'},
    {id: 2, email: 'glo@example.com', password: 'glo'}
  ]);

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
    
  const navigate = useNavigate();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
    setError('');
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const user = users.find(u => u.email === username && u.password === password);
    if (user) {
      navigate('timbro');
    } else {
      setError('Invalid email or password');
    }
  }

  const handleRegistration = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (users.some(u => u.email === username)) {
      setError('Email already registered');
      return;
    }
    const newUser = { id: users.length + 1, email: username, password: password };
    setUsers([...users, newUser]);
    navigate('timbro');
  }

  return (
    <div style={{border:'1px solid lightblue' , backgroundColor: 'lightblue' , padding: '20px' , paddingBottom:'40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
      <Button onClick={handleLogin} label='LOG IN'></Button>
      <Button onClick={handleRegistration} label='REGISTRATI'></Button>
      <p style={{color: 'red', marginTop:'10px', fontSize:'20px'}}>{error}</p>
    </div>
  );
};

export default Login;
