import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Context from "./Context";

const Products = () => {
    const value = useContext(Context);

    return (
        <div>
            {value.checklogin && (
                <div>
                    <h1>Products-Page</h1>
                    <div className="box-list-details">
                        <ul>
                            <li> <Link to="/auth/products/1">Product 1</Link></li>
                            <li> <Link to="/auth/products/2">Product 2</Link></li>
                            <li> <Link to="/auth/products/3">Product 3</Link></li>
                        </ul>
                    </div>
                </div>

            )}
            <Outlet />
        </div>
    );
};

export default Products;