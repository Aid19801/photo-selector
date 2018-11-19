import { combineReducers } from 'redux';
import photosReducer from '../containers/photo-gallery/reducer';

const RootReducer = combineReducers({
    photosPage: photosReducer,
})

export default RootReducer;