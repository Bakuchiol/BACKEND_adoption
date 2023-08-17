import React from 'react'
import Default from '../views/layout/Default'

function CatShow(props) {

  const cat = props.cat

  return (
    <Default>
      <div id='showWrapper'>
        <div className="showBox">
          <h1>{cat.name}</h1>
          <div className="showBoxInfo">
            <h4>Age:{" "}{cat.age}</h4>
            <h4>{cat.description}</h4>
          </div>
          <h2 style={{color: "crimson"}}>{cat.hadFirstCheckUp ? "Almost Purrfect" : "Purrfect."}</h2>
        </div>
      </div>
    </Default>
  )
}

export default CatShow
