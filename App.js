import React, {useState} from 'react';

const App = props => {
    const [items, setItems] = useState(['apple', 'pear', 'orange']);

    const clearBasket = () => {
        setItems([])
    };

    return <childComponent basket={items} clickHandler={clearBasket}/>;
}

const childComponent = props => {
    return (
        <>
            <p>You have {props.basket.length} items in your basket</p>
            <button onClick={props.clickHandler}>Empty basket</button>
        </>
    );
}