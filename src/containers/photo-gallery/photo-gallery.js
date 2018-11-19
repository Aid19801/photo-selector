import React, { Component } from 'react'
import Infinite from 'react-infinite';

import { connect } from 'react-redux';

import { Modal } from '../../components';

import * as actions from './constants';
import styles from './style.module.css';

class PhotoGallery extends Component {

  constructor() {
    super();
    this.state = {
      isShowing: false,
      url: null,
    }
    this.selectPhoto = this.selectPhoto.bind(this);
    this.unSelectPhoto = this.unSelectPhoto.bind(this);
  }

  selectPhoto(url) {
    this.props.photoSelected();
    this.setState({
      isShowing: true,
      url,
    })
  }

  unSelectPhoto() {
    this.props.photoUnSelected();
    this.setState({
      isShowing: false,
      url: '',
    })
  }

  componentWillMount() {
    this.props.pageLoading();
  }
  
  componentDidMount() {
    this.props.pageLoaded();
  }

  render() {
    
    const { isLoadingPage, isLoadingPhotos, isError, photos } = this.props;
    const { isShowing, url } = this.state;

    if (isError) {
      return <h3 className={styles.error}>An Error Has Occurred</h3>
    }

    if (isLoadingPage) {
      return <h3 className={styles.loading}>Loading...</h3>
    }

    return (
      <div className={styles.galleryContainer}>

        { isShowing && <Modal onClick={this.unSelectPhoto} url={url} /> }

          <Infinite containerHeight={200} elementHeight={50} useWindowAsScrollContainer>
            { photos.map((each, i) => {
              return (
                <div onClick={() => this.selectPhoto(each.url)} key={i}>
                    <img className={styles.img} src={each.thumbnailUrl} ref="img-tn" />
                    <p className={styles.title}>{each.title}</p>
                </div>
              )
            }) }
          </Infinite>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoadingPage: state.photosPage.isLoadingPage,
  isLoadingPhotos: state.photosPage.isLoadingPhotos,
  isError: state.photosPage.isError,
  photos: state.photosPage.photos,  
});

const mapDispatchToProps = (dispatch) => ({
  pageLoading: () => dispatch({ type: actions.PHOTOS_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.PHOTOS_PAGE_LOADED }),
  photoSelected: () => dispatch({ type: actions.PHOTO_SELECTED }),
  photoUnSelected: () => dispatch({ type: actions.PHOTO_UNSELECTED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)

