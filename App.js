import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Data from Parent Component'
        };
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <ChildComponent dataParentToChild={data}/>
            </div>
        );
    }
}


class ChildComponet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.dataParentToChild
        }
    };
    render() {
        const { data } = this.state
        return (
            <h1>{data}</h1>
        );
    };
}