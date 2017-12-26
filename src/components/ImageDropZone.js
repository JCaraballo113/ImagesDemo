import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { bindActionCreators} from 'redux';

import { setImages } from '../actions/actions';

import Images from './Images';

class ImageDropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    let storagePromises = [];
    this.setState({ files }, () => {
      files.map(file => {
        const storagePromise = firebase.storage().ref(`/images/${file.name}`).put(file)
        .then((snapshot) => {
          const imageFile = {
            url: snapshot.metadata.downloadURLs[0],
            fullPath: snapshot.metadata.fullPath,
            fileName: snapshot.metadata.name
          };

          return imageFile;
        })
        .catch(err => console.log);

        storagePromises.push(storagePromise);
      });

      Promise.all(storagePromises).then(images => {
        images.map(image => {
          const imagePath = image.fileName.substr(0, image.fileName.lastIndexOf('.')) || image.fileName;
          const newImage = {
            fullPath: image.fullPath,
            url: image.url,
            imagePath
          }
          firebase.database().ref('images/' + imagePath).set(newImage).then(() => {
            this.props.setImages(newImage);
          });
        })
      })
    })
  }

  render() {
    return (
      <div className="dropzone">
        <DropZone onDrop={this.onDrop.bind(this)}>
          <span>Drag files here to add</span>
        </DropZone>
        <Images />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImages: bindActionCreators(setImages, dispatch)
  };
}

export default connect(null,mapDispatchToProps)(ImageDropZone);