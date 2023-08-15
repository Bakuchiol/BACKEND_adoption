import React from 'react'

function CatEdit(props) {

  const cat = props.cat

  return (
    <div>
      <form action={`/cats/${cat._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={cat.name}/><br/>
          Age: <input type='number' name="age"  defaultValue={cat.age}/><br/>
          Had First Checkup:
              { cat.hadFirstCheckUp? <input type="checkbox" name="checkUp" defaultChecked />: <input type="checkbox" name="checkUp"/> }
          <br/>
          Description:
          <input type='text' name='description' defaultValue={cat.description}/><br />          
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default CatEdit
