import React, {useState } from 'react';

const App = () => {
    const [data, setData] = useState(null);

    const handleCallBack = (data) => {
        setData(data)
    }
    
    return (
        <div>
            <ChildComponent parentCallBack = { handleCallBack } />
            <p>Status: { data } </p>
        </div>
        
    );
}

const ChildComponent = (props) => {

    const onTrigger = (event) => {
        props.parentCallBack("Data from child Component");
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit = { onTrigger }>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


export default App;