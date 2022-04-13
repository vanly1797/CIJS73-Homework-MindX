import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();

    return <div>Product {params.productId} detail</div>;
};

export default ProductDetail;