import { useEffect, useState } from "react";

const CountWord = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleCountAfterInput = (e) => {
        // const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        setText(e.target.value);
        const arr = (e.target.value).split(' ');
        setCount(e.target.value === "" ? 0 : arr.length);

        // setCount(e.target.value === "" ? 0 : arr.length);
        // if (format.test(e.target.value)) {
        //     const arr = (e.target.value).split(' ');
        //     setCount(e.target.value === "" ? 0 : arr.length);
        // }
        // else {
        //     setCount(0);
        // }
    };

    return (
        <div>
            <textarea style={{ width: 500 }} value={text} onChange={handleCountAfterInput}></textarea>
            <div><span>Word(s): {count}</span></div>
        </div>


    );
};

export default CountWord;