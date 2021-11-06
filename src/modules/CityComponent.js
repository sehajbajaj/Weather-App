import {
    
    Image,
    Container,
    Box,
    FormControl,
    Button,
    InputGroup,
    Input,
    InputLeftAddon
  } from '@chakra-ui/react';
  import { FaSearch } from 'react-icons/fa';

const CityComponent = (props) => {

  const {changeCity, fetchWeather} = props

    return (
        <>
         <Image 
            src="/icon/finalicons/weather.svg"
            alt="normal" 
            boxSize = "140px"
            m = "40px auto" />

         <Container
         color = "black"
         fontSize = "18px"
         fontWeight = "extrabold"
         fontFamily = "Zen Kurenaido"
         
         >Find Weather Of Your City</Container>

         <Box 
        d = "flex"
        flexDirection ="row"
        m = "10px auto"
        mt = "25px"

         >
             <form onSubmit = {fetchWeather}>
             <FormControl isRequired color = "black" >
             
              <InputGroup size="md"
              
              >
                <InputLeftAddon children="City" bg = "gray.300" isRound = "no" color = "black" />
                <Input
                
                  type="text"
                  required
                  autoFocus
                  // placeholder = "City"
                  isInvalid
                  errorBorderColor="gray.300"
                  onChange = {(e) => changeCity(e.target.value)}
                />
              </InputGroup>
              
            </FormControl> 
            <Button
            mt = "10px"  
            fontSize ="14px"
            colorScheme = "teal"
            border = "none"
            variant ="solid"
            leftIcon = {<FaSearch />}
            type = "submit"
            cursor ="pointer"
            >
                Search
            </Button>
            
             </form>
             
         </Box>
        </>
    );
}

export default CityComponent;