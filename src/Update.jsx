
import React, { Component } from 'react';



class Update extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // console.log('constructor');
    }

  
    render() {
        // console.log('Render');
        return (
            <>
                <Child data={this.state.counter}/>
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Increment</button>
                <p>{this.state.counter}</p>
            </>
        );

    }

}


class Child extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // console.log('constructor');
    }
    componentDidUpdate(prevProps, prevState, snapShots) {
        console.log("Updated",prevProps,snapShots);
        // if (prevState.counter < 5) {
        //     console.log("Greter")
        //     this.setState({ counter: this.state.counter + 1 })
        //     console.log('Match');
        // }
    }
    getSnapshotBeforeUpdate(preProps,preState) {
        return preProps.data*10;
    }
      
    render() {
        return (
            <div>
                <h1>Child Component {this.props.data}</h1>
           
            </div>
        )
    }
}





export default Update;
