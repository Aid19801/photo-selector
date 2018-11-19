import * as actions from './constants';

const initialState = {
    isLoadingPage: false,
    isLoadingPhotos: false,
    isError: false,
    photoSelected: false,
    photos: [],
    foo: 'foooooo'
}

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.PHOTOS_PAGE_LOADING:
            console.log('PHOTOS_PAGE_LOADING');
            return {
                ...state,
                isLoadingPage: true,
            }
        break;

        case actions.PHOTOS_PAGE_LOADED:
            console.log('PHOTOS_PAGE_LOADED');
            return {
                ...state,
                isLoadingPage: false,
            }
        break;

        case actions.PHOTOS_PAGE_FAILED_TO_LOAD:
            console.log('PHOTOS_PAGE FAILED_TO_LOAD');
            return {
                ...state,
                isLoadingPage: false,
                isError: true,
            }
        break;

        case actions.FETCHING_PHOTOS:
            console.log('FETCHING_PHOTOS');
            return {
                ...state,
                isLoadingPhotos: true,
            }
        break;

        case actions.FETCH_PHOTOS_SUCCESS:
            console.log('FETCH_PHOTOS_SUCCESS');
            return {
                ...state,
                isLoadingPhotos: false,
                photos: action.photos,
            }
        break;

        case actions.FETCH_PHOTOS_FAIL:
            console.log('FETCH_PHOTOS_FAIL');
            return {
                ...state,
                isLoadingPhotos: false,
                isError: true,
            }
        break;

        case actions.PHOTO_SELECTED:
            console.log('PHOTO_SELECTED');
            return {
                ...state,
                photoSelected: true,
            }
        break;

        case actions.PHOTO_UNSELECTED:
            console.log('PHOTO_UNSELECTED');
            return {
                ...state,
                photoSelected: false,
            }
        break;

        default:
        return state;
    }
};

export default photosReducer;