import { Component } from "react";
import SingleCard from "./SingleCard";
import Spinner from "react-bootstrap/Spinner";

class CardList extends Component {
  state = {
    songs: [],
    loading: true,
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        this.props.query
    );
    const data = await response.json();
    this.setState({ songs: data.data, loading: false });
  };

  render() {
    return (
      <>
        <div class="container-fluid d-flex justify-content-start flex-wrap ">
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
