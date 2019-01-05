import React from 'react';
import Child from './Child';
export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleMinus() {
        this.setState({
            count: this.state.count-1
        })
    }
    handleAdd=()=>{
        this.setState({
                count: this.state.count+1
        });
    }

    render() {
        return (
            <div style={{padding:50}}>
                <p>Hello React!</p>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleMinus.bind(this)}>-</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}/>
            </div>
        );
    }
}

