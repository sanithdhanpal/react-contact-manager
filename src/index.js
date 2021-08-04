import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function AddPersonForm() {
  const [ person, setPerson ] = useState("");
  const [ arr, setArr ] = useState(contacts);
    
   function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    console.log('here: ',person);
    e.preventDefault();
    setArr([...arr, person]);
    console.log('here: ',contacts);
  }
  return (
    <div style={{marginTop: "20rem",marginLeft: "21rem" }}>
      <h1>Contact Manager</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={(e) => handleChange(e)} 
        value={person.name} />
      <button type="submit">Add</button>
    </form>
    <PeopleList data={arr} />
    </div>
  );
}

function PeopleList(props) {
  
  // const arr = props.data;
  const listItems = props.data.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}


const el = (
    <AddPersonForm />
);
ReactDOM.render(
  el, 
  document.getElementById('root')
);