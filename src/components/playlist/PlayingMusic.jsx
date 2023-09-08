import React from 'react'
import albumcover from '../../pictures/albumcover/aavocc.webp'

const PlayingMusic = () => {
  return (
    <>
    <div className='music-playing'>

      <div className='top-details'>
        <div className="arrow-down">
            <div className="left"></div>
            <div className="right"></div>
        </div>
        <div className="music-details">
          <span>playing from playlist</span>
          <strong>hot hits philippines</strong>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className='music-cover'>
        <img src={albumcover} alt="music-image" />
      </div>
      
      <div className='bottom-details'>

        <div className='artist-music'>
          <div className='title-artist'>
            <strong>get him back!</strong>
            <span>aavocc</span>
          </div>
          <img src="" alt="<3" />
        </div>
        
        <div className='playing'>
          <div className="slider">

          </div>
          <div className='playing-buttons'>
            <img src="" alt="shuffle" />
            <div className="prevbtn">prev</div>
            <div className="playBtn">
              <div className="triangle"></div>
            </div>
            <div className="nextBtn">next</div>
            <div className="dislike">minus</div>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}

export default PlayingMusic