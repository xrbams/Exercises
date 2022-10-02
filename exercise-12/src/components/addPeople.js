import React from 'react'
import { useRef } from 'react'


const AddPeople = (props) => {
    const firstN = useRef("");
    const lastN = useRef("");
    const dateRef = useRef("");


    const submitHandler = (event) => {
        event.preventDefault();

        const people = {
          first_name: firstN.current.value,
          last_name: lastN.current.value,
          date: dateRef.current.value,
        };

       props.addingPeople(people);

        firstN.current.value = "";
        lastN.current.value = "";
        dateRef.current.value = "";
      };
  return (
    <form onSubmit={submitHandler}>
    <div>
      <label htmlFor="text">Enter First Name: </label>
      <textarea rows="2" id="text" ref={firstN}></textarea>
    </div>
    <div>
      <label htmlFor="text">Enter Last Name: </label>
      <textarea rows="2" id="text" ref={lastN}></textarea>
    </div>
    <div>
      <label htmlFor="date">Enter Date of Birth:</label>
      <input type="date" id="date" ref={dateRef} />
    </div>

    <button>Add Celebrity</button>
  </form>
  )
}

export default AddPeople