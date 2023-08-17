import React from 'react'
import Default from '../views/layout/Default'

function DogNew() {
  return (
    <Default>
    <div id='editFormWrapper'>
        <form action="/dogs" method="POST" className='editForm'>
            <h4>Enter New Dog Information</h4>
            <br/>
            <div className="mainForm">
              <div className="info">
                 Name<br/>
                 <input type="text" name="name" className='input'/>
              </div>

              <div className="info">
                 Age<br/>
                 <input type="number" name="age" className='input'/>
              </div>

              <div className="info">
                 Breed<br/>
                 <input type="text" name="breed" className='input'/>
              </div>

              <div className="info">
                 Description<br/>
                 <input type="text" name="description" className='input'/>
              </div>
                 Good Dog:{" "}<input type="checkbox" name="goodDog" />
                 <br/>
                 <input type="submit" name="" value="New Dog" className='button submit new'/>
            </div>
        </form>
    </div>
    </Default>
  )
}

export default DogNew
