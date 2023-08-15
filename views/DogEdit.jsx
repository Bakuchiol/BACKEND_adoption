import React from 'react'

function DogEdit(props) {

  const dog = props.dog

  return (
    <div>
      <form action={`/dogs/${dog._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={dog.name}/><br/>
          Age: <input type="text" name="age"  defaultValue={dog.age}/><br/>
          Breed: <input type='text' name='breed' defaultValue={dog.breed}/><br/>
          Had First Checkup:
              { dog.isGood? <input type="checkbox" name="isGood" defaultChecked />: <input type="checkbox" name="isGood"/> }
          <br/>
          Description:
          <input type='text' name='description' defaultValue={dog.description}/><br />
          
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default DogEdit
