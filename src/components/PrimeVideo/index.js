// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <>
      <div className="main-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="banner"
          />
        </div>
        <div className="movies-section">
          <h1>Action Movies</h1>
          <MoviesSlider
            moviesList={moviesList.filter(each => each.categoryId === 'ACTION')}
          />
          <h1>Comedy Movies</h1>
          <MoviesSlider
            moviesList={moviesList.filter(each => each.categoryId === 'COMEDY')}
          />
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
