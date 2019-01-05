import React from 'react';

export default class Child extends React.Component {
    componentDidMount() {
        console.log("did mount")
    }

    componentWillMount() {
        console.log("will mount")

    }

    componentWillReceiveProps(props) {
        console.log("will receive " + props.name)

    }

    shouldComponentUpdate() {
        console.log("should update ");
        return true;

    }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>)
    }
}