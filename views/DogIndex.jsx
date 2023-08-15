import React from 'react'

function DogIndex(props) {

    const dogs = props.dogs

  return (
    <div>
        <nav>
        <a href="/dogs/new">Enter New Dog</a>
      </nav>

      {dogs.map((dog,i)=>{
        return (
            <div key={i}>
            <a href={`/dogs/${dog._id}`}>
                <h2>{dog.name}</h2>
            </a>

            {/* edit */}
            <a href={`/dogs/${dog._id}/edit`}>Edit Dog Info</a>
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
  )
}

export default DogIndex
