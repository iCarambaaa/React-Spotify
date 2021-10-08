import { Component } from "react";
import "../CSS/home.css";
import Button from "react-bootstrap/Button";
import CardListSmall from "./CardListSmall";
import CardList from "./CardList";

class Home extends Component {
  render() {
    return (
      <div className="mr-0 mainPage">
        {/* <!-- dropdown and arrows --> */}

        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col">
              <Button type="button" className="btn btn-arrows">
                <img
                  className="rounded-circle"
                  src="./assets-home/arrow-left.png"
                  alt="arrow left"
                ></img>
              </Button>
              <Button type="button" className="btn btn-arrows">
                <img
                  className="rounded-circle"
                  src="./assets-home/arrow-right.png"
                  alt="arrow right"
                ></img>
              </Button>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="dropdown">
                <Button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenubutton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  GitMaster26...
                </Button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenubutton"
                >
                  <a className="dropdown-item" href="./album.html">
                    Album
                  </a>
                  <a className="dropdown-item" href="./artist-page.html">
                    Artist
                  </a>
                  <a className="dropdown-item" href="./loginPage.html">
                    Login
                  </a>
                  <a className="dropdown-item" href="./fetch.html">
                    Deezer API
                  </a>
                  <a className="dropdown-item" href="./support.html">
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- GOOD MORNING FIRST SECTION --> */}

        <CardListSmall query="Eminem" />

        {/* <!-- Artists --> */}

        <h5 className="m-4">Undefined</h5>

        <CardList />

        <div style={{ position: "relative" }}>
          <p
            className="cardtext"
            style={{
              position: "absolute",
              right: "20px",
              top: "-40px",
              fontWeight: "600",
            }}
          >
            <a style={{ textDecoration: "none", color: "#f8fafa" }} href="#">
              {" "}
              SEE ALL
            </a>
          </p>
        </div>

        <div className="container-fluid d-flex justify-content-start flex-wrap"></div>

        {/* <!--  SHOWS TO TRY THIRD SECTION --> */}

        <h5 className="mx-4 mt-4">Jazz</h5>

        <p className="mx-4 cardtext text-white">
          Songs we think you´ll get hooked on.
        </p>

        <CardList query="Jazz" />

        <div style={{ position: "relative" }}>
          <p
            className="cardtext"
            style={{
              position: "absolute",
              right: "20px",
              top: "-35px",
              fontWeight: "600",
            }}
          >
            <a style={{ textDecoration: "none", color: "#f8fafa" }} href="#">
              {" "}
              SEE ALL
            </a>
          </p>
        </div>

        <div className="container-fluid d-flex justify-content-start mb-5 pb-5"></div>
      </div>
    );
  }
}

export default Home;
