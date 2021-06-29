import React from 'react';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ favoritecolor: "yellow" })
  //   }, 1000)
  // }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true;
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  }
 
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button btn btn-outline-primary type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
