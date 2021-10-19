import { withRouter, Link } from "react-router-dom";
import "../CSS/sidebar.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <>
      <nav className=" sidebar flex-column fixed-left navbar-dark mb-5 pb-5">
        <div className="container m-3 ">
          <Link to="" className="pb-3">
            <img
              src="/assets/Spotify_Logo_RGB_White.png"
              className="firstlogo"
              alt=""
              style={{ width: "200px" }}
            />
          </Link>

          <div className=" main-menu mt-4 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="">
                  <i className="bi bi-house-door-fill"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-search"></i>
                  Search
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-music-note-list"></i>
                  Your library
                </a>
              </li>
            </ul>
          </div>

          {/* <!---PLay lists--> */}

          <div className=" main-menu mt-5 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onclick="openModal()"
                  id="open"
                >
                  <i className="bi bi-plus-square"></i>
                  Create playlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-caret-right-square"></i>
                  Liked songs
                </a>
              </li>
            </ul>
          </div>

          <hr className="ml-0 mt-5 mb-0" />

          {/* <!---Song lists--> */}

          <div className=" playlist-menu mt-4 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="playlist_list">
              <li className="nav-item the-list-item">
                <a className="nav-link active" aria-current="page" href="#">
                  The Bachelor Ends
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fun At Snacks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Girls' Snacks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Summer Whoop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Modern Hall
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Room For Ends
                </a>
              </li>
            </ul>
          </div>

          {/* <!---install app--> */}

          <div className="main-menu ml-0 mb-5 mt-3">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a href="" className="text-secondary">
                  <i className="bi bi-arrow-down-circle"></i>
                  Install App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Sidebar);
