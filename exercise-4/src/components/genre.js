import React from 'react'
import Movies from "./movies"
import "./GenreList.css"


const Genre = (res) => {
  return (
    <div className='genrelist'>
        <h1>{res.title}</h1>

      <Movies info={res.Movies[0]}/>
      <Movies info={res.Movies[1]}/>
      <Movies info={res.Movies[2]}/>


    </div>
  )
}

export default Genre