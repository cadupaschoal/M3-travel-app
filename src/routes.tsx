import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const Router = () => {
    return(
        <Routes>
            {/* <Route ROTA PARA PAGINA HOME></Route>   */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
};

export default Router;
