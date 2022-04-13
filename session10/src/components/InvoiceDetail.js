import { useParams } from "react-router-dom";

const InvoiceDetail = () => {
    const params = useParams();


    return <div>InvoiceID: {params.productId}</div>;
};

export default InvoiceDetail;