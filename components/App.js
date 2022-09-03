import React, { useState } from 'react';
import data from '../data';
import Form from './Form';
import List from './List';

function App() {
  const [persons, setPersons] = useState(data);

  const create = (name, age, image) => {
    const new_person = {
      id: Date.now(),
      name,
      age,
      image
    };
    const new_state = [...persons, new_person];
    setPersons(new_state);
  }
    

  const del = id => setPersons(persons.filter(elem => elem.id !== id));


  return (

    <main>
      <section className="container">
        <Form create={create}/>
        <List persons={persons} del={del}/>
        <h3>{persons.length} birthdays today</h3>
        <button onClick={() => setPersons([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
