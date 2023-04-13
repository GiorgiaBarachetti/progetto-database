import Login from "../Login/Login";
import Timbro from '../Timbro/Timbro'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ROUTE } from "./PathRoutes";

const Routers = () => {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path={ROUTE.login} element={<Login/>}/>
            <Route path={ROUTE.timbro} element={<Timbro/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default Routers;