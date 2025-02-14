import React from 'react'

export default function app() {
  return (
    <div className='bg'>
      <div className='container'>
      <div className='navbar'>
     <ul className='first'>
        <li>News</li>
        <li>Portal</li>
     </ul>
     <ul className='second'>
        <li>News</li>
        <li>Blog</li>
        <li><img src="../images/avatar.svg" alt=""/></li>
     </ul>
      </div>
      <div className='line'></div>
      <div className='list'>
        <ul> 
          <li>Home</li>
          <li>Breaking news</li>
          <li>Regular news</li>
          <li>International news</li>
          <li>Sports</li>
          <li>Entertainment</li>
          <li>Culture</li>
          <li>Arts</li>
          <li>All news</li>
        </ul>
      </div>
      <div className='items'>
        <p>4 items found for category Entertainment</p>
      </div>
     <div className='main'>
     <div className='article'>
          <p>Sort By View:</p>
          <select>
              <option value="">USA</option>
              <option value="">FRANCE</option>
              <option value="">CHINA</option>
              <option value="">RUSSIA</option>
            </select>
      </div>
      <div className='article2'>
        <p>Today’s Pick</p>
        <p>Trending</p>
      </div>
     </div>
    </div>
    </div>
  )
}