import React from 'react'
import Default from '../views/layout/Default'

function CatNew() {
  return (
    <Default>
      <div id='editFormWrapper'>
          <form action="/cats" method="POST" className='editForm'>
            <h4>Enter New Cat Information</h4>
            <br />
            <div className="mainForm">
              <div className="info">
                 Name<br/>
                <input type="text" name="name"  className='input'/>
              </div>

              <div className="info">
                Age<br/>
                <input type='number' name="age"  className='input'/>
              </div>

              <div className="info">
                  Description<br/>
                  <input type="text" name="description" className='input'/><br/>
              </div>
                  Had First Checkup:{" "}<input type="checkbox" name="checkUp" /><br/>
                  <br />
                  <input type="submit" name="" value="New Cat" className='button submit new'/>
            </div>
          </form>
      </div>
    </Default>
  )
}

export default CatNew
