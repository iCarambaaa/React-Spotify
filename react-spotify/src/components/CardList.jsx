import { Component } from "react";
import SingleCard from "./SingleCard";
import Spinner from "react-bootstrap/Spinner";

class CardList extends Component {
  state = {
    songs: [],
    loading: true,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          this.props.query
      );
      if (response.ok) {
        const data = await response.json();
        const sliced = data.data.slice(0, 10);
        this.setState({ songs: sliced, loading: false });
      } else {
        console.log("something not right here");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("look here we got our error: " + error);
    }
  };
  render() {
    return (
      <>
        <h5 className="m-4">{this.props.query}</h5>
        <p className="mx-4 cardtext text-white">
          Songs we think you´ll get hooked on.
        </p>
        <div style={{ position: "relative" }}>
          <p
            className="cardtext"
            style={{
              position: "absolute",
              right: "1.5vw",
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

        <div className="container-fluid"></div>
        <div className="container-fluid d-flex justify-content-start flex-wrap ">
          {this.state.loading && (
            <Spinner animation="border" variant="success" />
          )}

          {this.state.songs.length > 0 &&
            //  console.log(this.state.songs)

            this.state.songs.map((song) => (
              <SingleCard
                img={song.album.cover_medium}
                id={song.id}
                title={song.title}
                name={song.artist.name}
                // album={song.album.title}
              />
            ))}
        </div>
      </>
    );
  }
}

export default CardList;
