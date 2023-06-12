import React, {useState } from 'react';

const App = (props) => {
    const [data, setData] = useState('');

    handleCallBack = (data) => {
        setData(data);
    }

    return(
        <ChildComponent parentCallBack = { handleCallBack } />
    );
}

const ChildComponent = (props) => {
    onTrigger = (event) => {
        props.parentCallBack("Data from child");
        event.preventDefault();
    }
    return (
        <div>
            <form onSububmit = {props.onTrigger}>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


