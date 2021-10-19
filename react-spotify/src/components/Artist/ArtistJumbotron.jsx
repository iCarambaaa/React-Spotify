import Jumbotron from "react-bootstrap/Jumbotron";
import HomeTopDropdown from "../HomeTopDropdown";
import "../../CSS/artistjumbotron.css";
import "../../CSS/album.css";

const ArtistJumbotron = (params) => {
  return (
    <>
      <div className="container-fluid" style={{ marginLeft: "278px" }}>
        <Jumbotron className="jumbotron">
          <HomeTopDropdown />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#367CDB"
            className="bi bi-patch-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
          <p className="verify">Verified Artist</p>
          <h1 className="display-4">Queen</h1>
          <p className="lead">37,120,773 monthly listeners</p>
        </Jumbotron>
      </div>
    </>
  );
};

export default ArtistJumbotron;
