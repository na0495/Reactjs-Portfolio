import Fade from 'react-reveal/Fade';
import { Center, Stack, Box, useColorMode, Heading, Text} from "@chakra-ui/react"
import './icon.css'
import aboutme from '../../_mock/aboutme.json'
  
export default function About() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade delay={300} >
        <Stack spacing={12} backgroundColor={`mode.${colorMode}.background`} pt={250} pb={250}>
        <Center>
          <Box p={25} borderRadius="16" w={["100%", "75%"]}>
              <Fade cascade delay={1000}>
                  <Heading s='h2' size='2xl' color="orange" mb={30}>
                    {aboutme.title}
                  </Heading>
              </Fade>
              <Fade cascade delay={1500}>
                {aboutme.details.map((item) => ( 
                  <Text key={item.id} className="text"> <span className='icons'>{item.icon}</span>{item.text}</Text>
                ))}
              </Fade>
          </Box>
        </Center>
        </Stack>
      </Fade>
    );
  }