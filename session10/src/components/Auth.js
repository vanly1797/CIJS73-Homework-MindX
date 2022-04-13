import { useState } from "react";
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
            </ul>
            <Outlet />
        </div>
    );
};

const Login = () => {
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [visible, setVisible] = useState(true);

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {
        if (/\S/.test(username) !== "") {
            setLogin(true)
            setVisible(false)
        }
        else {
            setLogin(false)
            setVisible(true)
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <div>
                {visible && (
                    <div className="box-form">
                        <input type="text" placeholder="Enter username here..." value={username} onChange={handleInputUsername} /> <br />
                        <button type="submit" onClick={handleLogin}>Login</button>
                    </div>
                )}
                {login && (<div>
                    <h2>{`Hello, ${username}`}</h2>
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

        </div>
    );
};

const Register = () => {
    return <h1>Register Page</h1>
};

export { Login, Register };

export default Auth;