import React from 'react'

function Default(props) {
  return (
    <div>
      <html>
        <head>
            <link rel="stylesheet" href="/css/app.css" />  
            <title>{props.title}</title>
            </head>
        <body>
            <div className="nav">
                <div className="logo">
                    <a href="/">
                        <img src="https://www.dfwhumane.com/wp-content/uploads/2020/09/logo-300x138-sept2020.png" alt="logo" className='logo'/>
                    </a>
                </div>
                <div className="links">
                    <a href="/cats"><p>Adoptable Cats</p></a>
                    <a href="/dogs"><p>Adoptable Dogs</p></a>
                </div>

            </div>
            {props.children}
            <div className="sloganDiv">
                <h1 className='slogan'>Rescue, Love, Repeat!</h1>
            </div>
        </body>
      </html>
    </div>
  )
}

export default Default
