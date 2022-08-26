import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {imHungryFor: "Empanadas"};
    }
    componentDidMount() {
      console.log('montado')
      setTimeout(() => {
        this.setState({imHungryFor: "Pizza"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("myH2").innerHTML =
      "Ahora tengo ganas de comer " + this.state.imHungryFor;
      console.log("El componente se actualizó!");
    }
    render() {
      return (
        <div>
        <h1>Tengo ganas de comer {this.state.imHungryFor}</h1>
        <h2 id="myH2"></h2>
        </div>
      );
    }
  }