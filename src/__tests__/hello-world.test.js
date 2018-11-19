import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { mount } from 'enzyme';

import HomePage from '../hello-world';

test('1 Hello World', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HomePage />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('h1')
  expect(result.props.children).toEqual('yoyoyoyo')
});

test('2 Hello World', () => {
  const wrapper = mount(<HomePage />);
  expect(wrapper).toBeTruthy();
});