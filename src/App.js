import React from "react";

export default function App () {
    const [counter, setCount] = React.useState(0);

    const onClickPlus = () => {
        setCount(counter + 1)
    }

    const onClickMinus = () => {
        setCount(counter - 1)
    }

    return (
        <div className="counter">
            <h2>Счетчик:</h2>
            <h1>{counter}</h1>
            <button onClick={onClickPlus} className="btn">Plus +</button>
            <button onClick={onClickMinus} className="btn">- Minus</button>
        </div>
    )
}