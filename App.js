import React from 'react';
import Title from './components/Title';
import Input from './components/Input';
import Greeting from './components/Greeting';

import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: ''
        };
        this.handleClick  = this.handleClick.bind(this);
    }

    handleClick(name) {
        this.setState({
            displayName: name
        });
    };

    render() {
        return (
            <>
               <Title title="Welcome to the app"/>
               <Greeting name={this.state.displayName}/>
               <p>Enter your name below so we can get better acquainted</p>
               <Input handleClick={this.handleClick} />
            </>
        );
    }
}


export default App;