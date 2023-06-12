import React from 'react';

const App = function() {
    const data = 'Pass data from Parent to Child Component'
    return (
        <ChildComponent dataParentToChild = { data } />
    )
}

const ChildComponent = function( { dataParentToChild} ) {
    return (
        <h1> { dataParentToChild } </h1>
    );
}

export default App;