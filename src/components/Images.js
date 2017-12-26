import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { bindActionCreators} from 'redux';
import { removeImageAsync, setMultiImages } from '../actions/actions';
import Image from './Image';

export class Images extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    firebase.database().ref('/images').once('value', snapshot => {
      let imagesArray =[];
      for(let key in snapshot.val())
      {
        let imageFile = snapshot.val()[key];
        imagesArray.push(imageFile);
      }

      this.props.setMultiImages(imagesArray);
    })
  }

  handleImageDelete(image, index) {
    this.props.removeImageAsync(image, index)
  }

  renderImages() {
    return this.props.images.map((image, index) => {
      return <Image key={image.url} image={image} index={index} handleDelete={this.handleImageDelete.bind(this)} />
    });
  }

  render() {
    return (
      <div className="images_list">
        {this.props.images === undefined ? null: this.renderImages()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeImageAsync: bindActionCreators(removeImageAsync, dispatch),
    setMultiImages: bindActionCreators(setMultiImages, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Images);