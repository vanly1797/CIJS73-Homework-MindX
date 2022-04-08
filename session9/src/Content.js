import { useState, useContext } from "react";
import Context from "./Context";


const Content = () => {
    const [name, setName] = useState("");
    const value = useContext(Context);

    return (
        <div>
            <span>ĐĂNG NHẬP</span>
            <div>
                <input type="text" placeholder="Username ..." />
                <button>ĐĂNG NHẬP</button>
            </div>
        </div>
    );
};

export default Content;