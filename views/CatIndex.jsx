import React from 'react'

function CatIndex(props) {

    const cats = props.cats

  return (
    <div>
      <nav>
        <a href="/cats/new">Enter New Cat</a>
      </nav>

      {cats.map((cat,i)=>{
        return (
            <div key={i}>
            <a href={`/cats/${cat._id}`}>
                <h2>{cat.name}</h2>
            </a>

            {/* edit */}
            <a href={`/cats/${cat._id}/edit`}>Edit Cat Info</a>
            {/* edit */}

          {/* delete */}
          <form action={`/cats/${cat._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
          {/* delete */}

            </div>
        );
      })}
    </div>
  )
}

export default CatIndex
