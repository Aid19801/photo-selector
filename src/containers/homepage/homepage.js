import React, { Component } from 'react'
import { PhotoGallery } from '..';

import styles from './style.module.css';

class HomePage extends Component {

  constructor() {
    super();
  }

  render() {
    
    return (
      <div className={styles.homePageContainer}>
        <h1 className={styles.heading}>Photo Selector</h1>
        <PhotoGallery />
      </div>
    )
  }
}

export default HomePage;