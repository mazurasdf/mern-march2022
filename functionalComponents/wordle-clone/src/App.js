import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Guess from './components/Guess';
import WordContext from "./contexts/WordContext";

function App() {
  const [form, setForm] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState("APPLE");

  return (
    <div className="App">
      <WordContext.Provider value={{form,setForm, answer, guesses, setGuesses}}>
        <h1>hey it's me!</h1>
        <Form/>

        {/* <Guess guess="homie"/> */}
        {
          guesses.map((item,i)=>{
            return <Guess guess={item} key={i}/>
          })
        }
      </WordContext.Provider>
    </div>
  );
}

export default App;
