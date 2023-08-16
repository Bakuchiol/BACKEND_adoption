import React from 'react'
// import './styles.css'
import DefaultLayout from '../views/layout/Default'



function Welcome(props) {

    const adoptAll = props.adoptAll

  return (
      <DefaultLayout>
    <div id='welcomePage'>
      <h1 className='welcomeTitle'>ADOPT A PET TODAY</h1>
      <div style={{display:"flex", justifyContent: "center", flexWrap:'wrap'}}>
        {adoptAll.map((pet, i) => {
          return(
            <div key={i} style={{margin: "30px"}}>
              <img src={pet.img} alt="petImg" style={{height: "200px"}}/>
              <p>{pet.name}</p>
              <p>{pet.age}</p>
              <p>{pet.description}</p>
            </div>
          )
        })}
      </div>
    </div>
      </DefaultLayout>
  )
}

export default Welcome
