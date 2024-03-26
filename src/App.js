import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome'
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name = "Charlie" heroName = "Batman">
        <p>This is Children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "SuperMan">
        <button>Subscribe</button>
      </Greet>
      <Greet name = "diana" heroName = "SpiderMan"/>

      <Welcome name = "Bruce" heroName = "SuperMan"/>
      <Welcome name = "Charlo" heroName = "Batman"/>
      <Welcome name = "Kelvin" heroName = "ChapMan"/> */}
      {/* <Hello/> */}
      
    </div>
  );
}

export default App;
