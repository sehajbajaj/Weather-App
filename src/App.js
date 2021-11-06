
import axios from 'axios';
import React from 'react';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';
import { ChakraProvider, Box, Heading, extendTheme, Grid, Button } from '@chakra-ui/react';

import {  useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const API_KEY = 'a0aa252406836b8d60ee043b85fae6c1';

function App() {
  const theme = {
    styles: {
      global: {
        'html, body': {
          m: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          h: '100vh',
          w: '100%',
          // color:'black'
        },
      },
    },
  };
  const customTheme = extendTheme(theme);

  const [city, changeCity] = useState();
  const [weather, changeWeather] = useState();

  const fetchWeather = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    changeWeather(response.data);
  };
  return (
    <ChakraProvider theme={customTheme}>
      <Grid p={3} mr = "0">
          <ColorModeSwitcher justifySelf="flex-end" />
          
        </Grid>
      <Box
        d="flex"
        flexDirection="column"
        m="auto"
        textAlign="center"
        shadow="dark-lg"
        p="20px 10px"
        borderRadius="4px"
        w="450px"
        bg="gray.200"
      >
        <Heading fontSize="22px" fontFamily="Zen Kurenaido" color="black">
          React Weather App
        </Heading>
        {weather ? (
          <WeatherComponent weather = {weather}/>
        ) : (
          <CityComponent changeCity={changeCity} fetchWeather={fetchWeather} />
        )}
      
      </Box>
      
      
    </ChakraProvider>
  );
}

export default App;
