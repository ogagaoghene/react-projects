import React, { useState } from 'react';

const Input = props => {
    const [name, setName] = useState('');

    return (
        <>
            <input type="text" value={name} onChange={evt => setName(evt.target.value)}/>
            <button onClick={() => props.handleClick(name)}>Update name</button>
        </>
    )
}

export default Input;