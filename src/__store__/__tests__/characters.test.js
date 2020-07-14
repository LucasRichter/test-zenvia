import { testSaga } from 'redux-saga-test-plan'
import { _loadCharacters } from '../characters/saga'
import getCharacters from '../../services/getCharacters'
import { loadCharacters, setCharacters } from '../characters'
import { setApi } from '../api'

it('fetches the characters', () => {
  const fakeCharacters = [
    {
      char_id: 1,
      name: 'Walter White',
      birthday: '09-07-1958',
      occupation: [
        'High School Chemistry Teacher',
        'Meth King Pin'
      ],
      img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      status: 'Deceased',
      appearance: [1, 2, 3, 4, 5],
      nickname: 'Heisenberg',
      portrayed: 'Bryan Cranston'
    }
  ]
  testSaga(_loadCharacters, { action: loadCharacters.type, payload: { name: 'Walter' } })
    .next()
    .put(setApi({ key: 'characters', value: true }))
    .next()
    .call(getCharacters, { name: 'Walter' })
    .next(fakeCharacters)
    .put(setCharacters(fakeCharacters))
    .next()
    .put(setApi({ key: 'characters', value: false }))
    .next()
    .isDone()
})
