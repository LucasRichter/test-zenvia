import Input from '../Input'
import React from 'react'

describe('Text', () => {
  const props = {
    onChange: jest.fn(),
    id: 'test',
    prefix: <div>oi</div>
  }
  test('should render correctly', () => {
    const wrapper = shallow(<Input {...props} />)
    const input = wrapper.find('#test')
    expect(input).toHaveLength(1)
    input.simulate('change', {})
    expect(props.onChange).toHaveBeenCalled()
    expect(wrapper.find('#test-start-prefix')).toHaveLength(1)
  })
})
