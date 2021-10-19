import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

export default function HomeTopDropdown() {
  return (
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
          <Dropdown>
            <Dropdown.Toggle className="btn btn-secondary">
              Danzo26...
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="album">Album</Link>
              </Dropdown.Item>
              <Link to="artist">artist</Link>
              <Dropdown.Item>Login</Dropdown.Item>
              <Dropdown.Item>Deezer API</Dropdown.Item>
              <Dropdown.Item>Support</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
