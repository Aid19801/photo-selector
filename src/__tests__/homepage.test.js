import React from 'react';
import { shallow } from 'enzyme';

import { HomePage, PhotoGallery } from '../containers';

describe('Homepage', () => {
  it('should render the HomePage container without exploding...', () => {
      const wrapper = shallow(<HomePage />);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find('div').length).toBe(1);
      expect(wrapper.find('h1').length).toBe(1);
  });
  it('should render the expected text', () => {
      const wrapper = shallow(<HomePage />);
      const expectedText = "Photo Selector";
      expect(wrapper.find('h1').text()).toEqual(expectedText);
  });
  it('should render the expected children', () => {
    const wrapper = shallow((
      <HomePage>
        <PhotoGallery />
      </HomePage>
    ))
      expect(wrapper.contains(<PhotoGallery />)).toBe(true);
  });
});
