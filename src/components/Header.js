import React from 'react'

const Header = ({title, counts}) => {
  
  return (
    
    <header className='header'>
        <div className = 'buttonone'>
          <h1>{title}</h1>
          <span>Total Likes: {counts} </span>
        </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Just Blogs',
}

export default Header