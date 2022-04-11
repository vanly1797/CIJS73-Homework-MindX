import { useContext } from "react";
import Context from "./Context";

const Login = () => {
    const value = useContext(Context);

    return (
        <div>
            {value.code === "vi" ? (
                <div>{value.checklogin ? `Xin chào, ${value.username}` : "Đăng nhập"}</div>
            ) : (
                <div>{value.checklogin ? `Welcome, ${value.username}` : "Login"}</div>
            )}
        </div>
    );
};

export default Login;
