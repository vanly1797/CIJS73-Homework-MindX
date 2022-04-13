import { NavLink, Outlet } from "react-router-dom";
import './style.css'

const Auth = () => {
    return (
        <div>
            <h1>Authentication Page - Please Login</h1>
            <ul>
                <li>
                    <NavLink to="/auth/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/invoices">Invoices</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/about">About</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <div className="box-form">
                <input type="text" placeholder="Enter username here..." /> <br />
                <button>Login</button>
            </div>

        </div>
    );
};

const Register = () => {
    return <h1>Register Page</h1>
};

export { Login, Register };

export default Auth;