import { watcherGetPhotos } from '../containers/photo-gallery/sagas';
import { all } from 'redux-saga/effects';

function* RootSaga() {
    yield all([
        watcherGetPhotos(),
    ])
}

export default RootSaga;