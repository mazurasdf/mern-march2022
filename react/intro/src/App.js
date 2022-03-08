import './App.css';

function App() {
  const hello="hey there!";

  const printStuff = (message) => {
    console.log(message);
  }

  return (
      <div className="App">
        <h1>hey it's me!</h1>
        <h1>7+8</h1>
        <h1>{7+8}</h1>
        <h2><marquee>{hello}</marquee></h2>
        {/* <img /> */}

        <button onClick={printStuff}>click me!!</button>

        <button onClick={()=>{printStuff("hey it's the second button!!")}}>click this for a different message!!</button>
      </div>
  );
}

export default App;
