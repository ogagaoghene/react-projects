import React from 'react';

const Input = props => {
    return (
        <>
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Update name</button>
        </>
    )
}

export default Input;