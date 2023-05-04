import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ProtectedRoutes } from './ProtectedRoutes';
import HomePage from "./pages/Home"



const Router = () => {
    return(
        <Routes>
            {/* <Route ROTA PARA PAGINA HOME></Route>   */}
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/" element={<Login />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route  index element={<Dashboard />}></Route>
            </Route>
        </Routes>
    )

};

export default Router;
