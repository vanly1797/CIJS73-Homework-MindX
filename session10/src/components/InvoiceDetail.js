import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";

const InvoiceDetail = () => {
    const params = useParams();
    const value = useContext(Context);

    return <div>
        {value.checklogin && (<div>Invoice {params.invoiceId} detail</div>)}
    </div>

};

export default InvoiceDetail;