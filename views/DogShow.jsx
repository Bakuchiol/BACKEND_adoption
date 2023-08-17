import React from 'react'
import Default from '../views/layout/Default'

function DogShow(props) {

  const dog = props.dog

  return (
    <Default>
      <div id='showWrapper'>
        <div className="showBox">
          <h1>{dog.name}</h1>
          <div className="showBoxInfo">
            <h4>Age:{" "}{dog.age}</h4>
            <h4>{dog.breed}</h4>
            <h4>{dog.description}</h4>
          </div>
          <h2 style={{color: "crimson"}}>{dog.isGoodBoy ? "Very Good Doggie!" : "Good Doggie"}</h2>
        </div>
      </div>
    </Default>
  )
}

export default DogShow
