import React from 'react';
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import HeadShot from "./components/HeadShot"
import About from "./components/pages/About"
import ContactMe from "./components/pages/ContactMe"
import Resume from "./components/pages/Resume"
import Work from "./components/pages/Work"
// import Card from "./components/Card"
// import Card2 from "./components/Card2"
// import Wrapper from "./components/Wrapper";
import "./App.css";
import projects from "./projects.json"

// function App() {
  class App extends React.Component{
  
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
        <Nav
          projectsProp = {this.state.projects}
          displayProp = {this.state.display}
          handleDisplayChangeProp = {this.handleDisplayChange}
        />
        {/* <About/> */}
        {/* Below is basically just my work  */}
        {/* <Wrapper>
        {this.state.projects.map(project =>{
          return(
            <Card
            key = {project.id}
            id = {project.id}
            {...project} //image title summary gitLink actualLink
            />
          )
        })}
        </Wrapper> */}
        {(this.state.display === "AboutMe") && <About/>}
        {(this.state.display === "ContactMe") && <ContactMe/>}
        {(this.state.display === "Resume") && <Resume/>}
        {(this.state.display === "Work") && <Work/>}

      </div>
    );
  }
}

export default App;
