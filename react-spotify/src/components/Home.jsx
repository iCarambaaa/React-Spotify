import { Component } from "react";
import "../CSS/home.css";
// import Button from "react-bootstrap/Button";
import CardListSmall from "./CardListSmall";
import CardList from "./CardList";
import HomeTopDropdown from "./HomeTopDropdown";

class Home extends Component {
  render() {
    return (
      <div className="mr-0 mainPage">
        {/* <!-- dropdown and arrows --> */}

        <HomeTopDropdown />

        {/* <!-- GOOD MORNING FIRST SECTION --> */}

        <CardListSmall query="Eminem" />

        {/* <!-- Artists --> */}

        <CardList query="Jazz" />

        <div className="container-fluid d-flex justify-content-start flex-wrap"></div>

        {/* <!--  SHOWS TO TRY THIRD SECTION --> */}

        <CardList query="Louna" />

        <div className="container-fluid d-flex justify-content-start mb-5 pb-5"></div>
      </div>
    );
  }
}

export default Home;
