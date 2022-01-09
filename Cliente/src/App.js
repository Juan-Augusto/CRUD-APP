import './App.css';
import {useState} from "react";
import Axios from 'axios'

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
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', 
    {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage,
    }).then(() => {
      console.log('Success');
    });
  };
  const getEmployee = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
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
        <button onClick={addEmployee}>Add employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployee}>Show employees</button>
        {
          employeeList.map((person, key) =>{
          return( 
            <div className="employeeListDisplay">
              <h3>{person.name}</h3>
              <ul>
                <li>{person.age}</li>
                <li>{person.country}</li>
                <li>{person.position}</li>
                <li>{person.wage}</li>
              </ul>
            </div>
            )
        }
        )}
      </div>
    </div>
  );
}

export default App;
