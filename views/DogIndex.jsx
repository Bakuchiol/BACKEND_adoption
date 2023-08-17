import React from 'react'
import Default from './layout/Default';

function DogIndex(props) {

    const dogs = props.dogs

  return (
    <Default>
      <div id='dogWrapper'>
        <nav id="petNav">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" className='pawPrint'/>
          <a href="/dogs/new">Enter New Dog</a>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" className='pawPrint'/>
        </nav>

          <div className="petBox">
        {dogs.map((dog,i)=>{
          return (
              <div key={i} className='dogCard'>
              <a href={`/dogs/${dog._id}`}>
                {/* <img src={dog.img} alt="" /> */}
                <h1>{dog.name}</h1>
              </a>


              <div className="editDelete">
              {/* edit */}
              <a href={`/dogs/${dog._id}/edit`}>
                <button className='button'>
                  Edit
                </button>
                </a>
              {/* edit */}

            {/* delete */}
            <form action={`/dogs/${dog._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" className='button'/>
            </form>
            {/* delete */}
            </div>
          </div>
          );
        })}
        </div>
      </div>
    </Default>
  )
}

export default DogIndex
