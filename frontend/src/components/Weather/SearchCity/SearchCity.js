import { fetchWeatherByCity } from '../../../services/weatherService';
import './SearchCity.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchiCity = (props) => {
  const [city, setCity] = useState('');

  const onCityInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  const onSearchButtonClick = async (e) => {
    e.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWeatherByCity(city);
      props.search(weatherData);
    } catch (error) {
      console.error('Fail to fetch city weather due to error:', error);
    } finally {
      props.setLoading(false);
    }
  };
  return (
    <Form onSubmit={onSearchButtonClick}>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Search city...'
          value={city}
          onChange={onCityInputChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Check
          type='checkbox'
          label='Show air quality'
          className='air-quality'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Search
      </Button>
    </Form>
  );
};
export default SearchiCity;
