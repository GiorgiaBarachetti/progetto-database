import Login from "../LoginandRegistration/Login";
import Timbro from '../Timbro/Timbro'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ROUTE } from "./PathRoutes";
import Registration from "../LoginandRegistration/Registration";

const Routers = () => {
    
    //<Route path={ROUTE.timbro} element={<Timbro/>}/>
    return (
        <BrowserRouter>
        <Routes>
            <Route path={ROUTE.login} element={<Login/>}/>
            <Route path={ROUTE.registration} element={<Registration/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default Routers;