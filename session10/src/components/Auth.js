import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Context from "./Context";
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
            </ul>
            <Outlet />
        </div>
    );
};

const Login = () => {
    const value = useContext(Context);

    const handleInputUsername = (e) => {
        value.setName(e.target.value);
    }

    const handleLogin = () => {
        if (/\S/.test(value.username) !== "") {
            value.setCheckLogin(true)
            value.setVisible(false)
        }
        else {
            value.setCheckLogin(false)
            value.setVisible(true)
        }
    };

    return (
        <div>
            {value.visible && (
                <div>
                    <h1>Login Page</h1>
                    <div className="box-form">
                        <input type="text" placeholder="Enter username here..." value={value.username} onChange={handleInputUsername} /> <br />
                        <button type="submit" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            )}
            {value.checklogin && (<div>
                <h2>{`Hello, ${value.username}`}</h2>
                <ul>
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
            </div>)}
        </div>
    );
};

const Register = () => {
    return <h1>Register Page</h1>
};

export { Login, Register };

export default Auth;