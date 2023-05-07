import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ProtectedRoutes } from './ProtectedRoutes';
import HomePage from "./pages/Home"
import Edit from './pages/Edit';



const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/" element={<Login />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route  index element={<Dashboard />}></Route>
            </Route>
            <Route path='/editUser' element={<Edit/>}></Route>
        </Routes>
    )

};

export default Router;
