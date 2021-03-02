import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import HeadShot from "./components/HeadShot"
import Card from "./components/Card"
import Wrapper from "./components/Wrapper";
import "./App.css";


function App() {

  return (
    <div className="App">
      <Jumbotron>
        <HeadShot/>
      </Jumbotron>
      <Nav/>
      <Wrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Wrapper>
      

    </div>
  );


}

export default App;
