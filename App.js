import React from 'react';

import './style.css';

const App = props => {
    const [displayName, setDisplayName] = useState();

    return (
        <>
            <Title title="Welcome to the app"/>
            <Greeting name={displayName}/>
            <p>Enter your name below so we can get better acquainted</p>
            <Input handleClick={name => setDisplayName(name)} />
        </>
    );
}

export default App;