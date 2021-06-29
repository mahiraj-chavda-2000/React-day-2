import React from 'react';

class Simple extends React.Component {
    constructor() {
        super();
        this.state = {
            strObj: {
                data: 10

            }
        }


        setInterval(() => {
            this.setState({
                strObj: {
                    // ...this.state.strObj,
                    data: 10
                }
            });
        }, 1000);
    }

    render() {
        console.log("Render called");
        return <b>Data is : {this.state.strObj.data}</b>
    }
}
export default Simple;