import React from 'react';
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import HeadShot from "./components/HeadShot"
import Card from "./components/Card"
// import Card2 from "./components/Card2"
import Wrapper from "./components/Wrapper";
import "./App.css";
import projects from "./projects.json"

// function App() {
  class App extends React.Component{
  
  state = {
    projects:projects
  }

  render(){
    return (
      <div className="App">
        <Jumbotron>
          <HeadShot/>
        </Jumbotron>
        <Nav/>
        <Wrapper>
        {this.state.projects.map(project =>{
          return(
            <Card
            key = {project.id}
            id = {project.id}
            {...project} //image title summary gitLink actualLink
            />
          )
        })}
        </Wrapper>
        

      </div>
    );
  }
}

export default App;
