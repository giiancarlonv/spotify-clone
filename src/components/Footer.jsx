import React from 'react'

const Footer = () => {
  const year = new Date;
  let copyright = year.getFullYear()
  return (    
    <footer>
      <ul>
        <li>legal</li>
        <li>privacy</li>
        <li>privacy policy</li>
        <li>cookies</li>
        <li>about ads</li>
        <li>accessibility</li>
      </ul>
      <span>c {copyright} Spotify AB</span>
    </footer>
  )
}

export default Footer