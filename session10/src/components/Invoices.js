import { Link, Outlet } from "react-router-dom";

const Invoices = () => {

    return (
        <div>
            <h1>Invoices-Page</h1>
            <div className="box-list-invoices">
                <ul>
                    <li> <Link to="/invoices/1">Products 1</Link></li>
                    <li> <Link to="/invoices/2">Products 2</Link></li>
                    <li> <Link to="/invoices/3">Products 3</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Invoices;