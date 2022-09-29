import { useState } from 'react'
import './chucks.css'

const Chuck = () => {
    const[fact, setFact] = useState({
        description: 'Dar Es Salaam ',
     });

    const url = "https://api.chucknorris.io/jokes/random";


const fetchData = async () => {

    try {
        const res = await fetch(url);
        const jsonObj = await res.json();
        //update data
        setFact({
          description: jsonObj.value,
        })


      } catch (err) {}

}

  return (
    <div>
        <p>{fact.description}</p>
        <button onClick={fetchData}>Load Chuck Facts</button>
    </div>
  )
}

export default Chuck