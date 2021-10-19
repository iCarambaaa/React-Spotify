import Jumbotron from "react-bootstrap/Jumbotron";
import "../../CSS/album.css";

export default function AlbumJumbotron(params) {
  return (
    <>
      <Jumbotron className="jumbotron jumbotron-fluid bg-gradient d-flex align-items-end">
        <svg
          className="op"
          id="leftIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <svg
          className="op"
          id="rightIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>

        <img
          src="https://i1.sndcdn.com/artworks-000500823264-7n2dz6-t500x500.jpg"
          className="shadow ml-5 jumImg"
        />
        <div className="album-jumbotron-description d-inline-block text-light ml-3">
          <p className="mb-1">ALBUM</p>
          <h3 className="mb-0">Bohemian Rhapsody (The Original Soundtrack)</h3>
          <div className="artist-descr-area d-flex mt-2">
            <span className="artist-icon-sm mr-1"></span>
            <a href="#" className="text-white" id="exception">
              <p>Queen</p>
            </a>
            <p id="title-for-circles">2018</p>
            <p>22 songs, 1hr 19min</p>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}
