import React from "react";
import { Link } from "react-router-dom";

class SingleCard extends React.Component {
  state = {
    clicked: false,
  };

  handleToggle = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <>
        <div
          key={this.props.id}
          onClick={this.handleToggle}
          className="card p-2 cb mx-2 mb-4"
          style={{ minWidth: "150px", maxWidth: "200px", height: "328.5px" }}
        >
          <Link to="" style={{ textDecoration: "none", color: "white" }}>
            <div>
              <div>
                <img
                  src={this.props.img}
                  className="card-img-top"
                  alt={this.props.title}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{this.props.title}</h6>
                <p className="cardtext">{this.props.album}</p>
                <p className="cardtext">{this.props.name}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default SingleCard;
