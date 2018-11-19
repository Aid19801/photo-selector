import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'

import { PhotoGallery } from '../containers';

describe('Photo Gallery', () => {

    // photoPage's portion of the Store.
    let initialState = { photosPage: {
        isLoadingPage: false,
        isLoadingPhotos: false,
        isError: false,
        photos: [{ title: 'mock-title', url: 'http://mock.net', thumbnailUrl: 'http://thumbnail.net' }]
    }};
    
    const mockStore = configureStore()
    let store;
    let container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<PhotoGallery store={store} /> )  
    });

    it('should render the connected(PhotoGallery) component without exploding', () => {
        expect(container.length).toEqual(1)
        expect(container).toBeTruthy();
    });

    it('should render the expected props', () => {
        const expectedProp = [{ title: 'mock-title', url: 'http://mock.net', thumbnailUrl: 'http://thumbnail.net' }]
        
        expect(container.props().isLoadingPage).toBe(false);
        expect(container.props().isLoadingPhotos).toBe(false);
        expect(container.props().isError).toBe(false);
        expect(container.props().photos).toEqual(expectedProp);
    });

    it('should render the expected child elements', () => {
        let mountedContainer = mount(<PhotoGallery store={store} /> )  
        expect(mountedContainer.find('div').length).toBe(6);
        expect(mountedContainer.find('img').length).toEqual(1);
        expect(mountedContainer.find('p').length).toEqual(1);
    });

    it('should match the quick n dirty snapshot...', () => {
        let snapShot = renderer.create(container).toJSON();
        expect(snapShot).toMatchSnapshot();
    });
});
