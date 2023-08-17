import React from 'react'
import Default from './layout/Default'

function DogEdit(props) {

  const dog = props.dog

  return (
    <Default>
    <div id='editFormWrapper'>
      <form action={`/dogs/${dog._id}?_method=PUT`} method="POST" className='editForm'>
          <h4>Edit Dog Information</h4>
          <br />
          <div className="mainForm">
            <div className="info">
              Name<br/>
              <input type="text" name="name" defaultValue={dog.name} className='input'/>
            </div>

          <div className="info">
            Age<br/>
            <input type='number' name="age"  defaultValue={dog.age} className='input'/>
          </div>

          <div className="info">
            Breed<br/>
            <input type='text' name='breed' defaultValue={dog.breed} className='input'/>
          </div>
          
          <div className="info">
            Description<br />
            <input type='text' name='description' defaultValue={dog.description} className='input'/>
          </div>
          <br/>
          Good Dog {" "}
              { dog.isGood? <input type="checkbox" name="isGood" defaultChecked />: <input type="checkbox" name="isGood"/> }
          <br/>
          </div>
          <input type="submit" value="Submit Changes" className='button submit'/>
      </form>
    </div>
    </Default>
  )
}

export default DogEdit
