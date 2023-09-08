import React from 'react'

const Aside = () => {
  return (
    <>
    <aside>
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
      </aside>
      <aside>
        <ul>
          <li>Communities</li>
          <li>For Artist</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
      </aside>
      <aside>
        <ul>
          <li>Useful links</li>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
      </aside>

      <div className="socials">
        <a href=""><img src="" alt="intsa" /></a>
        <a href=""><img src="" alt="twitter" /></a>
        <a href=""><img src="" alt="facebook" /></a>
      </div>
    </>
  )
}

export default Aside