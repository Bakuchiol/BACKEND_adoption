import React from 'react'

function DogNew() {
  return (
    <div>
        <form action="/dogs" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Age: <input type="text" name="age" /><br/>
                 Breed: <input type="text" name="breed" /><br/>
                 Good Dog: <input type="checkbox" name="goodDog" /><br/>
                 Description: <input type="text" name="description" /><br/>
                 <input type="submit" name="" value="New Dog"/>
        </form>
    </div>
  )
}

export default DogNew
