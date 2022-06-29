import { useState, useEffect } from "react";
import './boxQuestion.css';


function Timer(props) {
    const [count, setCount] = useState(props.timer);

    // pass function verifResult in props for run it
    const { verifResult } = props

    useEffect(() => {
        if (count === 0) {
            verifResult()
        }
        setTimeout(() => {
            setCount((count) => count - 1);
        }, 1000);
    });

    return <div className="timer"><h3>{count}</h3></div>;
}


export default Timer;