import React from 'react'
import { useState, useEffect } from "react";

const FormList = () => {
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);



    const callPeople = async () => {
      const response = await fetch(
        "https://kanjatips-3cd9b-default-rtdb.firebaseio.com/people.json"
      );
      const data = await response.json();

      const people = [];

      for (const key in data) {
        people.push({
          id: key,
          first_name: data[key].first_name,
          last_name: data[key].last_name,
          date: data[key].date,
        });
      }

      setTodos(people);
    };

    useEffect(() => {
      callPeople();
    }, [callPeople]);

    const showList = () => {
      setShow(true);
    }
    const cancelList = () => {
      setShow(false);
    }

    let content;
    let buttons;

    if(show === false){
      buttons = <button onClick={showList}>Show The People</button>

      content = <>
      <h1>Nothing Showing</h1>
      </>

    }else{
      buttons = <button onClick={cancelList}>Cancel</button>
      content = todos.map((ppl) => (
      <>
        <div key={ppl.id}>
          <h2>{ppl.first_name}</h2>
          <h2>{ppl.last_name}</h2>
          <h2>{ppl.date}</h2>
          <br></br>
        </div>
      </> ));

    }


  return (
    <>
    <section>{buttons}</section>
    <section>{content}</section>

    </>
  )
}

export default FormList