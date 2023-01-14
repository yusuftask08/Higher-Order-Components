import React from 'react'
import WithCounter from './WithCounter';

const HoverIncrease = (props) => {
    const { counter, incrementCounter, name } = props;
    return (
        <div>
            <button onMouseOver={incrementCounter}>
                Hover Increase
            </button>
            <p>
                Hover Counter: {counter}
            </p>
            <h3> Hover Name: {name}</h3>

        </div>
    )
}

export default WithCounter(HoverIncrease) 