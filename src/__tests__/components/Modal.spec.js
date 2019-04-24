import React from 'react'
import { mount } from 'enzyme'

import Modal from '../../components/Modal'

describe('Modal Stuff', () => {
  let spy = spyConsole();
  it('should render a Modal', () => {
    const wrapper = mount(<Modal children={<h1></h1>} />)
    expect(wrapper.find('div').exists()).toBe(true)
  })
  it('should render a Modal with the content passed within props as children', () => {
    const wrapper = mount(<Modal children={<h1></h1>} />)
    expect(wrapper.contains(<h1></h1>)).toBe(true)
  })

  it('Should warning about the propTypes', () => {
    mount(<Modal />)
    expect(console.error).toHaveBeenCalled();
  })

})





function spyConsole() {
  // https://github.com/facebook/react/issues/7047
  let spy = {};
  beforeAll(() => {
      spy.console = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterAll(() => {
      spy.console.mockRestore();
  });
  return spy;
}