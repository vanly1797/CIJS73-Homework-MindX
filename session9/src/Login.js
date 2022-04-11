import { useContext } from "react";
import Context from "./Context";

const Login = () => {
    const value = useContext(Context);

    return (
        <div>
            {value.checklogin ? `Welcome, ${value.username}` : "Login"}
        </div>
    );
};

export default Login;