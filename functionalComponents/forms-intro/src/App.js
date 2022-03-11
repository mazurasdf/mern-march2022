import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SimpleForm from './components/SimpleForm';
import TraditionalForm from './components/TraditionalForm';

function App() {
  return (
    <div className="App">
      {/* <TraditionalForm/> */}
      <SimpleForm/>
    </div>
  );
}

export default App;
