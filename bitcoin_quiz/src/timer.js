import { useState, useEffect, useRef } from "react";
import './boxQuestion.css';
// import './countdown.scss'



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

    return <div className="timer">
        <div class="countdown"><svg viewBox="-50 -50 100 100" stroke-width="10">
            <circle r="45"></circle>
            <circle r="45" stroke-dasharray="282.7433388230814" stroke-dashoffset="282.7433388230814px"></circle>
        </svg></div>
    </div>;
}


export default Timer;