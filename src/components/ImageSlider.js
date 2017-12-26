import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  arrows: true,
  centerMode: false
};

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
  }

  renderImages() {
    return this.props.images.map(image => {
      return (
        <div key={image.url}>
          <img className="slider_image" src={image.url} />
        </div>
      )
    })
  }

  render() {

    return ( 
      <div>
        {this.props.images.length > 0 ? <Slider {...settings} className="slider_custom">
        {this.renderImages()}
      </Slider> : null}
      </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  };
}
 
export default connect(mapStateToProps)(ImageSlider);