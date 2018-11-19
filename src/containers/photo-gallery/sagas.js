import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './constants';

const URL = 'https://jsonplaceholder.typicode.com/photos';

export function* watcherGetPhotos() {
    yield takeLatest(actions.PHOTOS_PAGE_LOADING, workerGetPhotos)
}

function* workerGetPhotos() {

    let photos = [];
    let responseBack = false;

    yield put({ type: actions.FETCHING_PHOTOS })

    yield fetch(URL)
    .then(res => res.json())
    .then(json => {
        photos = json;
        if (photos.length >= 0) {
            responseBack = true;
        }
        if (!photos) {
            responseBack = false;
        }
    })
    .catch(err => console.log('api fetching error: ', err));

    responseBack ? yield put({ type: actions.FETCH_PHOTOS_SUCCESS, photos: photos }) : yield put({ type: actions.FETCH_PHOTOS_FAIL })
}



