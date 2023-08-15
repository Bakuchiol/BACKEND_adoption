import React from 'react'
// import './styles.css'



function Welcome(props) {

    const adoptAll = props.adoptAll

  return (
    <div id='welcomePage' style={{backgroundColor:'#f5f5f5'}}>
      <h1>Adopt a Pet</h1>
      <a href="/cats"><p>ADOPT A CAT</p></a>
      <a href="/dogs"><p>ADOPT A DOG</p></a>

      <div style={{display:"flex", justifyContent: "center", flexWrap:'wrap'}}>
        {adoptAll.map((pet, i) => {
          return(
            <div key={i} style={{margin: "30px"}}>
              <img src={pet.img} alt="petImg" style={{width: "200px"}}/>
              <p>{pet.name}</p>
              <p>{pet.age}</p>
              <p>{pet.description}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Welcome
