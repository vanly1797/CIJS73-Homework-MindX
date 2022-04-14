import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Context from "./Context";

const Invoices = () => {
    const value = useContext(Context);

    return (
        <div>
            {value.checklogin && (
                <div>
                    <h1>Invoices-Page</h1>
                    <div className="box-list-details">
                        <ul>
                            <li> <Link to="/auth/invoices/1">Invoice 1</Link></li>
                            <li> <Link to="/auth/invoices/2">Invoice 2</Link></li>
                            <li> <Link to="/auth/invoices/3">Invoice 3</Link></li>
                        </ul>
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default Invoices;