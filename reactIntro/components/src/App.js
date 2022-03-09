import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Click me!</button>

      <Box text="hey it's you!" number={42} isDark={true}/>
      <Box text="I'm the second one!" number={15} isDark={false}/>

      <Box text="where's the hidden h1?" number={-14} isDark={true}>
        <h1>hidden h1!</h1>
      </Box>
    {/* npx create-react-app project-name */}
    {/* npm start */}
    </div>
  );
}

export default App;
