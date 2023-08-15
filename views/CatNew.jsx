import React from 'react'

function CatNew() {
  return (
    <div>
        <form action="/cats" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Age: <input type="text" name="age" /><br/>
                 Had First Checkup: <input type="checkbox" name="checkUp" /><br/>
                 Description: <input type="text" name="description" /><br/>
                 <input type="submit" name="" value="New Cat"/>
        </form>
    </div>
  )
}

export default CatNew
