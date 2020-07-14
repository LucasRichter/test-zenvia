import React from 'react'
import CardView, { Content } from '../CardView'
import Icon from '../Icon'

describe('CardView', () => {
  it('content has to be visible when props add', () => {
    const wrapper = mount(<Content isVisible />)
    expect(wrapper.find(Content)).toHaveStyleRule('opacity', '1')
    expect(wrapper.find(Content)).toHaveStyleRule('transform', 'translate(0px,0px)')
  })

  test('should render correctly', () => {
    const props = {
      name: 'Walter White',
      birthday: '09-07-1958',
      occupation: [
        'High School Chemistry Teacher',
        'Meth King Pin'
      ],
      urlImage: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      status: 'alive',
      appearance: [1, 2, 3, 4, 5],
      nickname: 'Heisenberg',
      portrayed: 'Bryan Cranston'
    }
    const wrapper = mount(<CardView {...props} />)
    expect(wrapper.find(CardView)).toHaveLength(1)
    expect(wrapper.find(Icon)).toHaveLength(0)
  })

  test('should render death icon', () => {
    const props = {
      name: 'Walter White',
      birthday: '09-07-1958',
      occupation: [
        'High School Chemistry Teacher',
        'Meth King Pin'
      ],
      urlImage: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      status: 'Deceased',
      appearance: [1, 2, 3, 4, 5],
      nickname: 'Heisenberg',
      portrayed: 'Bryan Cranston'
    }
    const wrapper = mount(<CardView {...props} />)
    expect(wrapper.find(Icon)).toHaveLength(1)
  })
})
