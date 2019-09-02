import React, { Component } from "react";
// import data from "./data";
import axios from 'axios';
import Nav from "./Nav";
// import data from "./data";
import Header from "./Header";
import Services from "./Services"
import Portfolio from "./Portfolio"
import Footer from "./Footer"





class App extends Component {

  state = {
   
    data:[]
    
  };
 componentDidMount() {
    axios.get("/api").then(res => {
      console.log(res);
      this.setState({
        data: [...res.data]
      });
    });
  }
  render() {
    if(this.state.data[0]){
      console.log(this.state.data[0].nav);
      return(
        <React.Fragment>
        <Nav data={this.state.data[0].nav} />
        <Header data={this.state.data[0].header} />
        <Services data={this.state.data[0].serivces} />
        <Portfolio data={this.state.data[0].Portfolio} />
        <Footer data={this.state.data[0].footer} />
        </React.Fragment>

      )
    }else{
      return(
        <div>Hello</div>
      )
    }
  }
}
export default App;
