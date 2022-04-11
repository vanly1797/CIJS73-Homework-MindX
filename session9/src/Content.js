import { useState, useContext } from "react";
import Context from "./Context";
import "./style.css";

const Content = () => {
    const value = useContext(Context);
    const [visible, setVisible] = useState(true);

    const handleInputForm = (e) => {
        value.setName(e.target.value);
    };

    const handleSubmit = () => {
        if (value.username.trim() !== "") {
            setVisible(false);
            value.setLogin(true);
        }
    };

    return (
        <div>
            {value.code === "vi" ? (
                <div>
                    {visible ? (
                        <div>
                            <div className="box-title">ĐĂNG NHẬP</div>
                            <div className="box-detail">
                                <input type="text" placeholder="Username ..." value={value.username} onChange={handleInputForm} />
                                <br />
                                <button onClick={handleSubmit}>ĐĂNG NHẬP</button>
                            </div>
                        </div>
                    ) : (
                        <div>Chào mừng bạn đến với MindX</div>
                    )}
                </div>
            ) : (
                <div>
                    {visible ? (
                        <div>
                            <div className="box-title">LOGIN</div>
                            <div className="box-detail">
                                <input type="text" placeholder="Username ..." value={value.username} onChange={handleInputForm} />
                                <br />
                                <button onClick={handleSubmit}>LOGIN</button>
                            </div>
                        </div>
                    ) : (
                        <div>Welcome to MindX</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Content;
