import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";

const ProductDetail = () => {
    const params = useParams();
    const value = useContext(Context);

    return <div>
        {value.checklogin && (<div>Product {params.productId} detail</div>)}
    </div>

};

export default ProductDetail;