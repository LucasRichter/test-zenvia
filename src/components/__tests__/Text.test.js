import Text from '../Text'
import React from 'react'

describe('Text', () => {
  test('should render correctly', () => {
    const wrapper = mount(<Text />)
    expect(wrapper.find(Text)).toHaveLength(1)
    expect(wrapper.find(Text)).toHaveStyleRule('font-size', '15px')
    expect(wrapper.find(Text)).toHaveStyleRule('color', '#333')
    expect(wrapper.find(Text)).toHaveStyleRule('font-family', '\'Roboto\',sans-serif')
  })

  test('should have big prop', () => {
    const wrapper = mount(<Text big />)
    expect(wrapper.find(Text)).toHaveStyleRule('font-size', '18px')
  })

  test('should have small prop', () => {
    const wrapper = mount(<Text small />)
    expect(wrapper.find(Text)).toHaveStyleRule('font-size', '12px')
  })

  test('should have center prop', () => {
    const wrapper = mount(<Text center />)
    expect(wrapper.find(Text)).toHaveStyleRule('text-align', 'center')
  })

  test('should have bold prop', () => {
    const wrapper = mount(<Text bold />)
    expect(wrapper.find(Text)).toHaveStyleRule('font-weight', 'bold')
  })

  test('should have configurable font size', () => {
    const wrapper = mount(<Text size='10px' />)
    expect(wrapper.find(Text)).toHaveStyleRule('font-size', '10px')
  })

  test('should have configurable color', () => {
    const wrapper = mount(<Text color='white' />)
    expect(wrapper.find(Text)).toHaveStyleRule('color', 'white')
  })
})
