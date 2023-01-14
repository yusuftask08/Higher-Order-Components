import React from 'react'
import WithCounter from './WithCounter';

const ClickIncrease = (props) => {
    const { counter, incrementCounter, name } = props;

    return (
        <div>
            <button onClick={incrementCounter}>
                Click Increase
            </button>

            <p> Counter: {counter}</p>
            <h3> Name: {name}</h3>
        </div>
    )
}

export default WithCounter(ClickIncrease) 