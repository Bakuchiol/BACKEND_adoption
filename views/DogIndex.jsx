import React from 'react'
import Default from './layout/Default';

function DogIndex(props) {

    const dogs = props.dogs

  return (
    <Default>
      <div id='dogWrapper'>
        <div className="newPet">
          <a href="/dogs/new" className='newPaw'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" className='pawPrint'/>
            <p>Enter New Dog</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" className='pawPrint'/>
            </a>
        </div>

          <div className="dogBox">
        {dogs.map((dog,i)=>{
          return (
              <div key={i} className='eachPet'>
              <a href={`/dogs/${dog._id}`}>
                {/* <img src={dog.img} alt="" /> */}
                <h2>{dog.name}</h2>
              </a>

              {/* edit */}
              <a href={`/dogs/${dog._id}/edit`}>Edit</a>
              {/* edit */}

            {/* delete */}
            <form action={`/dogs/${dog._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE"/>
            </form>
            {/* delete */}

          </div>
          );
        })}
        </div>
      </div>
    </Default>
  )
}

export default DogIndex
