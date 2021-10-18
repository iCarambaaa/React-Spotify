import { Component } from "react";
import SingleSmallCard from "./SingleSmallCard";
import Spinner from "react-bootstrap/Spinner";

class CardListSmall extends Component {
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
        console.log(data);
        const sliced = data.data.slice(0, 8);
        this.setState({ songs: sliced, loading: false });
      } else {
        console.log("something not right here");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log("here is our error:");
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h3 className="m-4">Good Morning With {this.props.query}</h3>
        <div class="container-fluid d-flex justify-content-start flex-wrap ">
          {this.state.loading && (
            <Spinner animation="border" variant="success" />
          )}

          {this.state.songs.length > 0 &&
            //  console.log(this.state.songs)

            this.state.songs.map((song) => (
              <SingleSmallCard
                img={song.album.cover_medium}
                id={song.id}
                title={song.title_short}
              />
            ))}
        </div>
      </>
    );
  }
}

export default CardListSmall;
