import { useState, useEffect, useRef } from "react";
import './boxQuestion.css';



function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Timer = (props: any) => {

    // pass function verifResult in props for run it
    const { verifResult } = props
    let [count, setCount] = useState(props.timer);

    useInterval(() => {
        setCount(count - 1);
    }, 1000);

    if (count === 0) {
        verifResult()
    }

    return <div className="timer"><span class="loader"></span></div>;
}


export default Timer;