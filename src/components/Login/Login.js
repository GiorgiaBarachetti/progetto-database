/*
import Flex from "../../components/Flex";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import Button from "../../components/Button";
*/
import {FormControl, FormLabel, Form} from 'react-bootstrap';
import Input from '../componentsLogin/input'
import { useState } from "react";
//import { validateEmail, ROUTES } from "../../utils/costants";
import { useNavigate } from 'react-router-dom';

const Login = () => {
/*
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [error, setError] = useState('');

    const handleChangeUsername = (event) => {
        setError('');
        setErrorUsername('');
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setError('');
        setPassword(event.target.value);
    };

    const handleClickLogin = () => {
        if (!validateEmail.test(username.toLowerCase())) {
            setErrorUsername('Error username');
        }

        if (username.toLowerCase() === '') {
            setErrorUsername('Error username');
        }

        if (username.toLowerCase() === 'admin@gmail.com' && password.toLowerCase() === 'admin') {
            return navigate(ROUTES.home);
        }

        return setError('login errata');
    };
*/
    return (
            <div>
                <Input
                  label='email'
                  placeholder='write here...'

                />
                <Input
                  label='Password'
                  placeholder='write here...'

                />

            </div>

/*
        Flex({ column: true, alignItems: "center" },

            "Login",

            Spacer({ height: 50 }),

            Flex({ column: true, alignItems: "center", border: '2px solid #0020f0', width: 400, padding: 20 },

                Input({ placeholder: 'username', label: 'Username', onChange: handleChangeUsername, value: username, error: errorUsername }),

                Spacer({ height: 30 }),

                Input({ placeholder: 'password', type: 'password', label: 'Password', onChange: handleChangePassword, value: password }),

                Spacer({ height: 30 }),

                Button({ onClick: handleClickLogin }, "Login"),

                error
                )
                )
                */
    );
};

export default Login;
