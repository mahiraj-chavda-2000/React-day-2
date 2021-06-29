import React from 'react';

class PureComp extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        strObj : {
          data : 10

        }
       
      }
      
      
      setInterval(() => {
        this.setState({
          // data : 10
          strObj :{
            // ...this.state.strObj,
            data : 10
          }
          // data : this.state.data +1
          
        });console.log(this.state.strObj.data)
      }, 1000);
    }
    
    render() {
      console.log("Render called");
      return <b>Data is : {this.state.strObj.data}</b>
    }
  }
  export default PureComp;