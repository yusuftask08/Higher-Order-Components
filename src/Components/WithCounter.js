import React, { useState } from 'react'

const WithCounter = (OriginalComponent) => {

    const NewComponent = (props) => {
        const [counter, setCounter] = useState(0);

        return <OriginalComponent
            {...props}
            counter={counter}
            incrementCounter={() => setCounter((counter) => counter + 1)}
        />
    }

    return NewComponent
}

export default WithCounter