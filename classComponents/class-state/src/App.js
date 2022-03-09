import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1><marquee>hey it's me!</marquee></h1>

      <Counter text="hey i'm the component here!"/>
      {/* let counter = new Counter("blah") */}

      <Counter text="clicketh yon button" className="redBox"/>

      <Counter text="another component"/>
    </div>
  );
}

export default App;
