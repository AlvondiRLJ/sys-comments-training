import React from 'react'
import Comment from './Comment'

import { shallow, mount, render } from 'enzyme'

describe('<Comment />', () => {
  it('renders without crashing', () => {
    const comment = {
      comment: 'test'
    }
    const wrapper = shallow(<Comment comment={comment}/>)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.card')).toBe(true)
    expect(wrapper.text()).toBe(comment.comment)
  })
})