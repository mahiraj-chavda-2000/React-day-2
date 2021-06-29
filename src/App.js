import React from 'react';
import Hello from './Hello';
import Update from './Update';
import Header from './Headers';
import Timer from './Timer';
import PureComp from './PureComp';
import Simple from './Simple';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            show : true 
        }
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    render(){
        // console.log('Render');
        return (
            <>
            {
                this.state.show ? <Hello /> : null
            }
           
            <button className="btn btn-primary" onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
            <Update />
            <br></br>
            <Header />
            <Timer/>
            {/* <PureComp /> */}
            <Simple />
            </>

        );

    }

}




export default App;
