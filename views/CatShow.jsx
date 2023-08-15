import React from 'react'

function CatShow(props) {

  const cat = props.cat

  return (
    <div>
      <h1>{cat.name}</h1>
      <h4>{cat.age}</h4>
      <h4>{cat.description}</h4>
      <h2 style={{color: "crimson"}}>{cat.hadFirstCheckUp ? "Purrfect" : "Almost Purrfect."}</h2>
    </div>
  )
}

export default CatShow
