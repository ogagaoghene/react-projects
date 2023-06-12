import React from 'react'

const Greeting = ( {name} ) => {
    return (
        <p>Hi there, {name || "we've not been introduced"} </p>
    );
};

export default Greeting;