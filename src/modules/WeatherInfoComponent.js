import {
    Box,
    Image,
    chakra,
    Flex,
    Button,
    Link
   
  } from '@chakra-ui/react';
  import { FaSearch } from 'react-icons/fa';



  export const PatternIcon = {
    "01d": "/icon/finalicons/day.svg",
    "01n": "/icon/finalicons/night.svg",
    "02d": "/icon/finalicons/cloudy-day-1.svg",
    "02n": "/icon/finalicons/cloudy-night-1.svg",
    "03d": "/icon/finalicons/cloudy.svg",
    "03n": "/icon/finalicons/cloudy.svg",
    "04d": "/icon/finalicons/cloudy.svg",
    "04n": "/icon/finalicons/cloudy.svg",
    "09d": "/icoc/finalicons/rainy-6.svg",
    "09n": "/icon/finalicons/rainy-7.svg",
    "10d": "/icon/finalicons/rainy-3.svg",
    "10n": "/icon/finalicons/rainy-7.svg",
    "11d": "/icon/finalicons/thunder.svg",
    "11n": "/icon/finalicons/thunder.svg",
    "13d": "/icon/finalicons/snowy-5.svg",
    "13n": "/icon/finalicons/snowy-5.svg",
    "50d": "/icon/finalicons/wind.svg"
  };

export const WeatherInfoIcons = {
    sunset : "/icon/finalicons/wi-sunset.svg",
    sunrise: "/icon/finalicons/temp.svg",
    humidity: "/icon/finalicons/humidity.svg",
    wind: "/icon/finalicons/wind.svg",
    pressure: "/icon/finalicons/pressure.svg"
};




const InfoComponent = (props) => {

const {name, value} =props;

    return(
        <Flex
        d = "flex"
        ml = "28px"
        mt = "35px"
        flexDirection = "row"
        justifyContent ="space-evenly"
        alignItems = "center"
        >
            <Image
            boxSize = "36px"
            src = {WeatherInfoIcons[name]}
            ></Image>
         <chakra.span
         d = "flex"
         flexDirection = "column"
         fontSize ="16px"
         m = "15px"
         fontFamily = "Zen Kurenaido"
         fontWeight  ="semibold"
         >{value}<chakra.span
         fontSize ="14px"
         textTransform ="capitalize"
         fontFamily = "Montserrat"
         >{name}</chakra.span></chakra.span>   
        </Flex>
    );
}
    
  

const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
   
   

    return (
        <>
        <Box
        d ="flex"
        flexDirection ="row"
        alignItems = "center"
        w ="100%"
        justifyContent ="space-between"
        m = "13px auto"
        fontFamily = "Montserrat"
        color = "black"
        >
            <Box id = "condition"
            m = "20px auto"
            fontSize ="14px"
            
            ><chakra.span
            fontSize="28px" fontWeight = "semibold">{`${Math.floor(weather?.main?.temp - 273)}°C`}</chakra.span> {`  |  ${weather?.weather[0].description}`}</Box>
            <Image 
            src={PatternIcon[weather?.weather[0].icon]}
            boxSize = "120px"
            m = "5px auto" />
        </Box>
        <Box
        fontFamily = "Montserrat"
        color = "black"
        ><chakra.span
        fontSize = "26px"
        fontWeight = "bold"
        
        >{`${weather?.name}, ${weather?.sys?.country}`}</chakra.span></Box>


        <Flex
        d = "flex"
        w = "90%"
        direction = "row"
        justifyContent = "space-evenly"
        alignItems = "center"
        wrap = "wrap"
        color = "black"
        >
            
        <InfoComponent name ={isDay?"sunset":"sunrise"} value = {`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
        <InfoComponent name ="humidity" value = {weather?.main?.humidity} />
        <InfoComponent  name ="wind" value = {weather?.wind?.speed} />
        <InfoComponent  name ="pressure" value = {weather?.main?.pressure}/>
        </Flex>

        <Button
      m = "auto"
      mt = "5px"
      w = "100%"
      colorScheme ="teal"
      leftIcon = {<FaSearch />}
      cursor ="pointer"
      fontSize ="14px"
      ><a href="App.js">Search Another City</a>
        </Button>
        </>
         
    );
    
}

export default WeatherComponent;