import Fade from 'react-reveal/Fade';
import { Center, Stack, Box, useColorMode, Heading } from "@chakra-ui/react"
import './icon.css'
  
export default function AboutMe() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade delay={300}>
        <Stack spacing={12} p={6}>
        <Center pt={100}>
            <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
                <Fade bottom cascade delay={1000}>
                    <Heading as="h3" size="lg" mb={30}>
                      Let me introduce introduce myself
                    </Heading>
                </Fade>
                <Fade bottom cascade delay={1500}>
                  <div>
                    <h2><span className='icons'>&#129333;</span>  My name is Mrabet saâd, a 23 years old, from Tangier morocco.</h2>
                    <h2><span className='icons'>&#127891;</span>  I just completed my bachelor's degree in Computer Engineering this year.</h2>
                    <h2><span className='icons'>&#127919;</span>  I enjoy being challenged and engaging with projects that require me to work outside my comfort</h2>
                    <h2>zone and knowledge set, as continuing to learn new languages and development techniques.</h2>
                    <h2><span className='icons'>&#128200;</span>  I'm fluent in many programming languages, especially in JavaScript & Python.</h2>
                    <h2><span className='icons'>&#128196;</span>  My field of Interest are building new  Web Technologies and Products and also in areas related</h2>
                    <h2>Mobile application and Natural Language Processing.</h2>
                    <h2><span className='icons'>&#127756;</span>  whenever possible, i also apply my passion for developing products with multiple different frameworks</h2>
                    <h2>and technologies, like Django, React, Node.js ...</h2>
                  </div>
                </Fade>
            </Box>
        </Center>
        </Stack>
      </Fade>
    );
  }