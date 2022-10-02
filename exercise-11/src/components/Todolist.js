import React from 'react'
import { useState, useEffect } from "react";

const Todolist = () => {
    const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch(
      "https://kanjatips-3cd9b-default-rtdb.firebaseio.com/todos.json"
    );
    const data = await response.json();

    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }

    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let content;
if(Object.keys(todos).length === 0){
content = <h1> You have no todos yet! </h1>;
console.log("You have no todos yet!");
}else{
    content = todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.text}</h2>
          <h3>{todo.date}</h3>
          <br></br>
        </div>
      ));
}


  return (

    <>
    <section>{content}</section>
    </>

  )
}

export default Todolist