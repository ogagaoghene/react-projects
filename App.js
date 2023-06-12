import React, {useState} from 'react';

const App = props => {
    const [items, setItems] = useState(['apple', 'pear', 'orange']);

    const clearBasket = () => {
        setItems([])
    };

    return <ChildComponent basket={items} clickHandler={clearBasket}/>;
}

const ChildComponent = props => {
    
    return (
        <>
            <p>You have {props.basket.length} items in your basket</p>
            <button onClick={props.clickHandler}>Empty basket</button>
        </>
    );
}

export default App;