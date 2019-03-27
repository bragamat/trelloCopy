import React from 'react'
import { mount } from 'enzyme'

import Modal from '../../components/Modal'

it('should render a Modal', () => {
  const wrapper = mount(<Modal children={<h1></h1>} />)
  expect(wrapper.find('div').exists()).toBe(true)
})


it('should render a Modal with an h1 tag as childre', () => {
  const wrapper = mount(<Modal children={<h1></h1>} />)
  expect(wrapper.contains(<h1></h1>)).toBe(true)
})
