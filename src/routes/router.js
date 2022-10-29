import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages';
import Welcome from './../pages/welcome/welcome';
import Register from '../pages/register/register';
import Login from '../pages/login/login';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/welcome",
        element: <Welcome />,
    },
]);
export default router