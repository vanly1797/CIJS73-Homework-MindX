import { useContext } from 'react';
import Context from './Context';

const Footer = () => {
    const codeCtx = useContext(Context);

    const handleChangeCode = (e) => {
        codeCtx.setCode(e.target.value);
    };

    return (
        <div>
            <select value={codeCtx.code} onChange={handleChangeCode}>
                <option value="vi">vi</option>
                <option value="en">en</option>
            </select>
        </div>
    );
};

export default Footer;