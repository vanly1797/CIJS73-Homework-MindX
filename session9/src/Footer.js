import { useContext } from 'react';
import { LanguageContext } from './Context';

const Footer = () => {
    const languageCtx = useContext(LanguageContext);

    const handleChangeCode = () => {

    };

    return (
        <div>
            <select value={languageCtx.code}>
                <option value="vi">vi</option>
                <option value="en">en</option>
            </select>
        </div>
    );
};

export default Footer;