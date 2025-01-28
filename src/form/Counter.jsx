import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setCounter(counter + 3); console.log(counter);
                }}>Increment</button>
            </div>

            <h1>Counter : {counter}</h1>
        </div>
    )
}