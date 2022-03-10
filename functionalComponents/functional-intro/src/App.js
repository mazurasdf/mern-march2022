import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1><marquee>hey it's me!</marquee></h1>

      <ClassCounter text="hey, I'm classin here!"/>
      <FunctionCounter text="hey, I'm functionin here!"/>
    </div>
  );
}

export default App;
