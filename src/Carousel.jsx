import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  handleClick = (e) => {
    this.setState({
        active:+e.target.dataset.index
    });
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
           
            return (
                 //eslint-disable-next-line
             <img
                src={photo}
                key={photo}
                alt="animal2"
                onClick={this.handleClick}
                data-index={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Carousel;
