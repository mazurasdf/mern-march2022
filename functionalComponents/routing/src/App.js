import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import Repeater from './views/Repeater';
import Second from './views/Second';

function App() {
  const [category, setCategory] = useState("pokemon");
  const [detail, setDetail] = useState("");

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${detail}`);
  }

  return (
    <div className="App">
      <div className="navBar">
        <Link to="/repeat/heyItsMe/64" className="btn btn-primary btn-lg">test route</Link>
        <form onSubmit={onSubmitHandler}>
          <select className="form-select w-25 d-inline-block" onChange={(event)=>setCategory(event.target.value)}>
            <option>pokemon</option>
            <option>repeat</option>
          </select>
          <input type="text" className='form-control w-25 d-inline-block' onChange={(event)=>setDetail(event.target.value)}/>
          <input type="submit" className='btn btn-success'/>
        </form>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/second">
          <Second/>
        </Route>

        <Route exact path="/repeat/:word">
          <Repeater/>
        </Route>

        <Route exact path="/pokemon/:name">
          <Pokemon/>
        </Route>
      </Switch>
      {/* <Home/>
      <Second/> */}
    </div>
  );
}

export default App;
