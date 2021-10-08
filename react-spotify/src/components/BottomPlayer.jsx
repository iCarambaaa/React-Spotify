import { withRouter } from "react-router";
import "../CSS/song-nav.css";

const BottomPlayer = () => {
  return (
    <>
      <div className="song-navbar">
        <div className="left-song-nav">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27358aa659299939bc52a2dbc22"
            alt="Group 'Queen' album cover"
            className="song-nav-img-resize"
          />
          <div className="text-and-icons">
            <div className="text-description">
              <a href="#">
                {" "}
                <h5 id="navTitle">
                  Another One Bites The Dust - Remastered 2011
                </h5>{" "}
              </a>
              <a href="#">
                {" "}
                <p>Queen</p>{" "}
              </a>
            </div>
            <div className="song-nav-icons">
              <img
                src="spotify-icons/heart.svg"
                className="song-nav-icons-resize pointer"
              />
            </div>
          </div>
        </div>

        <div className="middle-song-nav">
          <div className="top-part-song-nav">
            <img src="spotify-icons/shuffle.png" className="pointer" />
            <img src="spotify-icons/previous-2.png" className="pointer" />
            <img
              src="spotify-icons/play-button.png"
              onclick="pausePlay ()"
              id="middle-icon"
              className="pointer"
            />
            <img src="spotify-icons/previous-3.png" className="pointer" />
            <img src="spotify-icons/loop.png" className="pointer" />
          </div>
          <div className="btm-part-song-nav">
            <p id="currentDuration">0:00</p>
            <input
              type="range"
              onchange=" progress()"
              value="0"
              name="progress-song"
              className="song-bar-line pointer"
              id="pb"
            />

            <p id="totalduration">3:34</p>
          </div>
        </div>

        <div className="right-song-nav">
          <div className="icons-combo">
            <img
              src="spotify-icons/list.png"
              id="first-icon"
              className="pointer"
            />
            <img src="spotify-icons/responsive.png" className="pointer" />
            <img
              src="spotify-icons/audio.png"
              onclick="mute()"
              className="pointer"
              id="mute"
            />
            <input
              className="volume-line pointer"
              type="range"
              value="50"
              onchange="volume(event)"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(BottomPlayer);
