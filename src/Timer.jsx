import React, { Component } from 'react';


export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            msg: "Click Here"
        }
    }
    change = () => {
        this.setState({
            counter: this.state.counter + 1,
            msg: "You Clicked the button"
        });

    }


    render() {
        return (
            <div>
                <h5>{this.state.counter}</h5>
                <button onClick={this.change}>{this.state.msg}</button>
                <Logger time={this.state.counter} />
            </div>
        )
    }
}


class Logger extends Component {
    componentWillReceiveProps(newProps,newState){
        console.log("componentWillReceiveProps",newProps)
    }
    render() {
        return this.props.time;
    }
}
