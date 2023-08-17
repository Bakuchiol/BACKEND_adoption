import React from 'react'
import Default from './layout/Default';

function CatIndex(props) {

    const cats = props.cats

  return (
    <Default>
    <div id='catDiv'>
      <nav id='petNav'>
        <img src="https://clipart-library.com/images/rTnrpap6c.png" alt="" className='pawPrint'/>
        <a href="/cats/new">Enter New Cat</a>
        <img src="https://clipart-library.com/images/rTnrpap6c.png" alt="" className='pawPrint'/>
      </nav>

      <div className="petBox">

      {cats.map((cat,i)=>{
        return (
            <div key={i} className='catCard'>
            <a href={`/cats/${cat._id}`}>
                <h1>{cat.name}</h1>
            </a>

            <div className="editDelete">
            {/* edit */}
            <a href={`/cats/${cat._id}/edit`}>
            <button className='button'>
              Edit
            </button>
              </a>
            {/* edit */}

          {/* delete */}
          <form action={`/cats/${cat._id}?_method=DELETE`} method="POST">
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

export default CatIndex
