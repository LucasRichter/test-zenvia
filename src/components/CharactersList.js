import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCharacters, cleanCharacters } from '../__store__/characters'
import CardView from './CardView'
import { Flex, Box } from '@rebass/grid'
import { Block } from 'styled-loaders-react'
import debounce from 'lodash.debounce'
import Input from './Input'
import Icon from './Icon'
import colors from '../utils/colors'

export const CharactersList = ({
  loadCharacters,
  characters,
  cleanCharacters,
  loading
}) => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const delayedQuery = useRef(debounce(value => setName(value), 300)).current
  const handleChange = value => {
    cleanCharacters()
    delayedQuery(value)
  }

  React.useEffect(() => {
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight && !loading && !name
      ) {
        setPage(v => v + 1)
      }
    }, 100)
  }, [loading, name])

  React.useEffect(() => {
    const perPage = 9
    const limit = perPage * page
    loadCharacters({
      limit: perPage,
      name,
      offset: name ? undefined : (limit - perPage)
    })
  }, [loadCharacters, page, name])

  return (
    <>
      <Box
        my='40px'
        mx='auto'
        width='500px'
      >
        <Input
          id='search'
          prefix={<Icon size='25px' icon='search' color={colors.grey} />}
          placeholder='Search character'
          type='search'
          value={name}
          onChange={e => handleChange(e.target.value)}
        />
      </Box>
      <Flex
        flexWrap='wrap'
        alignItems='center'
        justifyContent='center'
        mx='-10px'
      >
        {characters.map(character => (
          <Box
            key={character.char_id + character.name}
            m='10px'
          >
            <CardView
              name={character.name}
              urlImage={character.img}
              nickname={character.nickname}
              occupation={character.occupation}
              appearance={character.appearance}
              status={character.status.toLowerCase()}
              portrayed={character.portrayed}
            />
          </Box>
        ))}
      </Flex>
      {loading && <Block />}
    </>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  cleanCharacters: PropTypes.func.isRequired,
  loadCharacters: PropTypes.func.isRequired
}

CharactersList.defaultProps = {
  characters: [],
  loading: false,
  cleanCharacters: () => { },
  loadCharacters: () => {}
}

const mapStateToProps = (state) => ({
  characters: state.characters,
  loading: state.api.characters
})

const mapDispatchToProps = {
  loadCharacters,
  cleanCharacters
}
export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
