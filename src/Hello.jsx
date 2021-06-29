import React from 'react';
class Hello extends React.Component{
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return (
            <h1>This is heading</h1>
        );

    }
}

export default Hello;