import { useState } from "react";

const CountWord = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleCountAfterInput = (e) => {
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        const space = /\S/;
        setText(e.target.value);

        // if (format.test(e.target.value) || space.test(e.target.value)) {
        //     console.log(!format.test(e.target.value));
        //     console.log(!space.test(e.target.value));
        //     console.log(!format.test(e.target.value) || !space.test(e.target.value));

        // }
        const arr = (e.target.value).split(' ');
        setCount(e.target.value == "" ? 0 : arr.length);

    };

    return (
        <div>
            <textarea style={{ width: 500 }} value={text} onChange={handleCountAfterInput}></textarea>
            <div><span>Word(s): {count}</span></div>
        </div>


    );
};

export default CountWord;