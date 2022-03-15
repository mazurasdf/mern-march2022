import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [form, setForm] = useState("");

  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling API");
    fetch("https://api.openbrewerydb.org/breweries?per_page=50&by_city="+form)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        setBreweries(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <form onSubmit={fetchInfo}>
        <input type="text" onChange={(event)=>setForm(event.target.value)}/>
        <button type="submit" onClick={fetchInfo} className="btn btn-primary btn-lg">fetch info</button>
      </form>
      <ul>
        {
          breweries.map((item,i)=>{
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
