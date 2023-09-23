import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import picsample from '../../pictures/albumcover/shirt.webp';
import './cssPlaylist/playlist.css'
import albumcover from '../../pictures/albumcover/aavocc.webp'
const Playlist = () => {
  const [clicked, setClicked] = useState(0);
  const musicOption =()=>{
    setClicked (clicked => !clicked);
  }
  return (
    <>
      <Header />
      <div className="playlist-container">
       <img src={picsample} alt="image-cover" />

       <div className='playlist-details'>
        <h1>Today's Top Hits</h1>
        <span>Aavocc is on top of the Hottest 50!</span>

        <div className='spotify'>
          <img src="" alt="spotify logo" />
          <strong> Spotify</strong>
        </div>

        <div className='likes-hours'>
          <span>34,280,738 likes</span> . 
          <span>1hr35 min</span>
        </div>

        <div className='buttons'>
          <div className='like-share'>
            <img src="" alt="<3" />
            <img src="" alt="share" />
            <img src="" alt=" . . ." />
          </div>
          <button>
            <div className='play-button'>
              <div className='triangle'></div>
            </div>
          </button>
        </div>
       </div>
      </div>

      <div className="music-container">
        <div className='music'>

          <div className='details'>
            <img src={albumcover} alt="music-cover" />
            <div className='song-name'>
              <strong>get him back!</strong>
              <span>aavocc</span>
            </div>
          </div>
          
          <div className='dots' onClick={musicOption}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <Footer />

      <div className={clicked ? 'music-option clicked' : 'music-option'}>
        <div className='details'>
            <img src={albumcover} alt="music-cover" />
            <div className='song-name'>
              <strong>get him back!</strong>
              <span>aavocc</span>
            </div>
          </div>

          <ul>
            <li>like</li>
            <li>share</li>
            <li>view track</li>
            <li>view artist</li>
            <li>view album</li>
          </ul>

          <center><button onClick={musicOption}>Close</button></center>
      </div>
    </>
  )
}

export default Playlist