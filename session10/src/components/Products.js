import { Link, Outlet } from "react-router-dom";

const Products = () => {

    return (
        <div>
            <h1>Products</h1>
            <div className="box-list-products">
                <ul>
                    <li> <Link to="/products/1">Products 1</Link></li>
                    <li> <Link to="/products/2">Products 2</Link></li>
                    <li> <Link to="/products/3">Products 3</Link></li>
                </ul>
            </div>

            <Outlet />
        </div>
    );
};

export default Products;