import React from 'react'
import { CharactersList } from '../CharactersList'
import Block from 'styled-loaders-react/lib/components/Block'
jest.mock('lodash.debounce', () => jest.fn(fn => fn))

describe('Character  List', () => {
  it('should render not block', () => {
    const wrapper = mount(<CharactersList />)
    expect(wrapper.find(Block)).toHaveLength(0)
    expect(wrapper.find(CharactersList)).toHaveLength(1)
  })

  it('should render block', () => {
    const wrapper = mount(<CharactersList loading />)
    expect(wrapper.find(Block)).toHaveLength(1)
    expect(wrapper.find(CharactersList)).toHaveLength(1)
  })

  let wrapper

  const props = {
    loadCharacters: jest.fn()
  }
  beforeEach(() => {
    /* mocking useEffect */
    jest.spyOn(React, 'useEffect').mockImplementation(f => f())

    wrapper = shallow(<CharactersList {...props} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('loadCharacters called when mout', () => {
    expect(props.loadCharacters).toHaveBeenCalled()
  })

  it('search field', () => {
    wrapper.find('#search').props().onChange({ target: { value: 'Walter' } })
    expect(wrapper.find('#search').props().value).toBe('Walter')
    expect(props.loadCharacters).toHaveBeenLastCalledWith({ name: 'Walter', limit: 9, offset: undefined })
  })

  it('render correctly CardViews', () => {
    const wrapper = mount(
      <CharactersList
        characters={[
          {
            char_id: 1,
            name: 'Walter White',
            birthday: '09-07-1958',
            occupation: [
              'High School Chemistry Teacher',
              'Meth King Pin'
            ],
            img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
            status: 'alive',
            appearance: [1, 2, 3, 4, 5],
            nickname: 'Heisenberg',
            portrayed: 'Bryan Cranston'
          },
          {
            char_id: 2,
            name: 'Walter White',
            birthday: '09-07-1958',
            occupation: [
              'High School Chemistry Teacher',
              'Meth King Pin'
            ],
            img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
            status: 'alive',
            appearance: [1, 2, 3, 4, 5],
            nickname: 'Heisenberg',
            portrayed: 'Bryan Cranston'
          }
        ]}
      />
    )
    expect(wrapper.find('CardView')).toHaveLength(2)
  })
})
