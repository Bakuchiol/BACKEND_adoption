import React from 'react'

function DogShow(props) {

  const dog = props.dog

  return (
    <div>
      <h1>{dog.name}</h1>
      <h4>{dog.age}</h4>
      <h4>{dog.breed}</h4>
      <h4>{dog.description}</h4>
      <h2 style={{color: "crimson"}}>{dog.isGoodBoy ? "Very Good Doggie!" : "Good Doggie"}</h2>
    </div>
  )
}

export default DogShow
