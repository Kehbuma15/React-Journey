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
import LifecycleA from './Component/LifecycleA';
import { Fragment } from 'react';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
import PureComp from './Component/PureComp';
import ParentComp from './Component/ParentComp';
import RefsDemo from './Component/RefsDemo'; import FRParentInput from './Component/FRParentInput';
import Hero from './Component/Hero';
import ErrorBoundary from './Component/ErrorBoundary';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import ClickCounterTwo from './Component/ClickCounterTwo';
import HoverCounterTwo from './Component/HoverCounterTwo';
import User from './Component/User';
import CounterTwo from './Component/CounterTwo';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value= "Charles">
      <ComponentC/>
      </UserProvider>
      
      {/* <CounterTwo 
        render={(count, incrementCount) => (<ClickCounterTwo count = {count} incrementCount={incrementCount}/>)}
        />
      <CounterTwo 
        render={(count, incrementCount) => (<HoverCounterTwo count = {count} incrementCount={incrementCount}/>)}
        /> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Charles' : 'Guest' }/> */}
      {/* <ClickCounter name='Charles'/>
      <HoverCounter name='Charles'/> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Superman"/>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Johnz"/>
      </ErrorBoundary> */}
      {/* <FRParentInput/> */}
      {/* <RefsDemo/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
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
