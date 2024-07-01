// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <div className="card-container">
      <Popup
        modal
        trigger={
          <div className="card-item">
            <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
          </div>
        }
      >
        {close => (
          <>
            <div className="popup-container">
              <div className="close-container">
                <button
                  data-testid="closeButton"
                  type="button"
                  className="trigger-button"
                  aria-label="Close"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div>
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
