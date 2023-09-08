import {React, useState} from 'react'

const Header = () => {
  const [burgerClick, setBurgerClick] = useState(0)
  const burgerBtn =()=>{
    setBurgerClick(clicked => !clicked);
  }
  return (
    <header>
        <div><img src="" alt="spotify-logo" /></div>

        <div className='header-text'>
          <div className='search-container'>
            <img src="" alt="search icon" />
            <input type="text" className='search-input'/>
          </div>

          <div className={burgerClick ? "hamburger-btn close" : "hamburger-btn"} onClick={burgerBtn}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className={burgerClick ? 'burger-nav clicked': 'burger-nav'}>
          <div className='login'>
            <h1>Log in</h1>
            <h1>Sign up</h1>
          </div>
            <span>.</span>
          <ul>
            <li>premium</li>
            <li>help</li>
            <li>download</li>
            <li>privacy</li>
            <li>terms</li>
          </ul>
        </div>
      </header>
  )
}

export default Header