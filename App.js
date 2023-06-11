import React from 'react';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    };

    handleClick(event) {
        this.setState({
            displayName: this.state.name
        })
    }

    render() {
        return (
            <>
               <h1>Welcome to the app</h1>
               <p>Hi there, {this.state.displayName}</p>
               <input type="text" value={this.state.name} onChange={this.handleChange}/>
               <button onClick={this.handleClick}>Update name</button>
            </>
        );
    }
}


export default App;