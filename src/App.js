styleimport React from 'react';
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import HeadShot from "./components/HeadShot"
import About from "./components/pages/About"
import Contact from "./components/Contact"
import ContactMe from "./components/pages/ContactMe"
import Resume from "./components/pages/Resume"
import Work from "./components/pages/Work"
// import Card from "./components/Card"
// import Card2 from "./components/Card2"
// import Wrapper from "./components/Wrapper";
import M from "materialize-css"
import "./App.css";
import projects from "./projects.json"

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, options);
// });

// function App() {
  class App extends React.Component{
    
componentDidMount(){


    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
}
  
  
  state = {
    projects:projects,
    display: "AboutMe"
  }

  handleDisplayChange = page => {
    this.setState({display: page})
  }
  render(){
    return (
      <div className="App">
        <Jumbotron>
          <HeadShot/>
        </Jumbotron>
   
        {/* <Nav
          // projectsProp = {this.state.projects}
          displayProp = {this.state.display}
          handleDisplayChangeProp = {this.handleDisplayChange}
        /> */}

        <Nav
          // projectsProp = {this.state.projects}
          displayProp = {this.state.display}
          handleDisplayChangeProp = {this.handleDisplayChange}
        >
          <Contact/>
        </Nav>
   

          {(this.state.display === "AboutMe") && <About/>}
          {/* {(this.state.display === "ContactMe") && <ContactMe/>} */}
          {(this.state.display === "Resume") && <Resume/>}
          {(this.state.display === "Work") && <Work projectsProp = {this.state.projects}/>}

     


      </div>
    );
  }
}

export default App;
