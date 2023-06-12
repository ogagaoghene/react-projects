import React, { useState } from 'react';

const Input = props => {
    const [name, setName] = useState('');
    const handleOnChange = ( event ) => {
        setName(event.target.value);
    }

    const handleCallBack = () => {
        props.handleClick( name );
    }

    return (
        <>
            <input type="text" value={name} onChange={handleOnChange}/>
            <button onClick={ handleCallBack }>Update name</button>
        </>
    )
}

export default Input;