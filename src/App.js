import './App.css';
import {useState} from "react";

function App() {
  const [name, setName]= useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const [age, setAge]= useState(0);
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const [country, setCountry]= useState("");
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const [position, setPosition]= useState("");
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const [wage, setWage]= useState(0);
  const handleWage = (event) => {
    setWage(event.target.value);
  };

  return (
    <div className="App">
      <div className="main-inputs">
        <label>Name: </label>
        <input 
          value={name} 
          onChange={handleName} 
          type="text"
        />
        <label>Age: </label>
        <input 
          value={age} 
          onChange={handleAge} 
          type="number"
        />
        <label>Country: </label>
        <input 
          value={country} 
          onChange={handleCountry} 
          type="text"
        />
        <label>Position: </label>
        <input 
          value={position} 
          onChange={handlePosition} 
          type="text"
        />
        <label>Wage (year): </label>
        <input 
          value={wage} 
          onChange={handleWage} 
          type="number"
        />
        <button>Add employee</button>
      </div>
    </div>
  );
}

export default App;
