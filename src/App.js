import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome'
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Stylesheet from './Component/Stylesheet';
import Inline from './Component/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Component/Form';
function App() {
  return (
    <div className="App">
      <Form/>
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className= {styles.success}>Error</h1> */}
      {/* <Stylesheet primary= {false}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
  {/* <Greet name = "diana" heroName = "SpiderMan"/>
<Welcome name = "Bruce" heroName = "SuperMan"/> */}
      {/* <Counter/> */}
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
