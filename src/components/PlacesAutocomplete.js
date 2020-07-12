import React, { useRef } from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import Input from './Input';
import Icon from './Icon';
import colors from '../utils/colors';
import { Box } from '@rebass/grid';
import List from './List';
import Text from './Text';

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: { 
      types: ['(cities)'],
      componentRestrictions: { country: 'br' }
    },
    debounce: 300
  });
  const ref = useRef();

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('📍 Coordinates: ', { lat, lng });
      }).catch(error => {
        console.log('😱 Error: ', error)
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <Box
          key={id}
          p='10px'
          onClick={handleSelect(suggestion)}
        >
          <Text><strong>{main_text}</strong> <small>{secondary_text}</small></Text>
        </Box>
      );
    });

  return (
    <Box
      ref={ref}
      style={{ position: 'relative' }}
    >
      <Input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        label='Onde'
        prefix={<Icon icon='location' size={20} color={colors.red} />}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <List>{renderSuggestions()}</List>}
    </Box>
  );
};

export default PlacesAutocomplete
