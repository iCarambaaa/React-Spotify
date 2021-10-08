import React from "react";
import { Link } from "react-router-dom";

class SingleSmallCard extends React.Component {
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
          className="card mb-3 op mx-3 "
          style={{ minWidth: "270px", maxWidth: "270px", maxHeight: "80px" }}
        >
          <Link to="" style={{ textDecoration: "none", color: "white" }}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={this.props.img}
                  style={{ maxWidth: "80px" }}
                  alt={this.props.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default SingleSmallCard;
