import React, { Component } from 'react'
import styles from './style.module.css';

const Modal = (props) => (
      <div className={styles.modalContainer} onClick={() => props.onClick()}>
        <img className={styles.modal} src={props.url} />
      </div>
);

export default Modal;