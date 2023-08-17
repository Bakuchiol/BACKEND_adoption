import React from 'react'
import Default from './layout/Default'

function CatEdit(props) {

  const cat = props.cat

  return (
    <Default>
    <div id='editFormWrapper'>
      <form action={`/cats/${cat._id}?_method=PUT`} method="POST" className='editForm'>
          <h4>Edit Cat Information</h4>
          <br />
          <div className="mainForm">
          <div className="info">
          Name<br/>
          <input type="text" name="name" defaultValue={cat.name} className='input'/>
          </div>

          <div className="info">
            Age<br/>
            <input type='number' name="age"  defaultValue={cat.age} className='input'/>
          </div>

          <div className="info">
            Description<br/>
            <input type='text' name='description' defaultValue={cat.description} className='input'/>
          </div>

          <br />
          Had First Checkup {" "}
              { cat.hadFirstCheckUp? <input type="checkbox" name="checkUp" defaultChecked/>: <input type="checkbox" name="checkUp"/> }
          <br/>
          </div>     
          <input type="submit" value="Submit Changes" className='button submit'/>
      </form>
    </div>
    </Default>
  )
}

export default CatEdit
