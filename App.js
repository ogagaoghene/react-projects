import React from 'react';

class App extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                <p>{ data }</p>
            </div>
        )
    }
}

class Child extends React.Component{
  
    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
        </div>
        )
    }
}

export default App;