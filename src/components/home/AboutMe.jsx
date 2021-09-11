import Fade from 'react-reveal/Fade';
import { Center, Stack, Box, useColorMode, Heading} from "@chakra-ui/react"
import './icon.css'
  
export default function AboutMe() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade delay={300} >
        <Stack spacing={12}>
        <Center>
          <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w={["100%", "75%"]}>
              <Fade cascade delay={1000}>
                  <Heading as="h3" size="lg" color="orange" mb={30}>
                    Let me introduce myself
                  </Heading>
              </Fade>
              <Fade cascade delay={1500}>
                <div>
                  <h2 className="text"><span className='icons'>&#129333;</span>  I'm is Mrabet saad, a 23 years old, from Tangier morocco.</h2>
                  <h2 className="text"><span className='icons'>&#127891;</span>  I just completed my bachelor's degree in Computer Engineering this year.</h2>
                  <h2 className="text"><span className='icons'>&#127919;</span>  I enjoy being challenged and engaging with projects that require me to work outside my comfort
                  zone and knowledge set, as continuing to learn new languages and development techniques.</h2>
                  <h2 className="text"><span className='icons'>&#128200;</span>  I'm fluent in many programming languages, especially in JavaScript & Python.</h2>
                  <h2 className="text"><span className='icons'>&#128196;</span>  My field of Interest are building new  Web Technologies and Products and also in areas relatedMobile application and Natural Language Processing.</h2>
                  <h2 className="text"><span className='icons'>&#127756;</span>  whenever possible, i also apply my passion for developing products with multiple different frameworks
                  and technologies, like Django, React, Angular, Node.js ...</h2>
                </div>
              </Fade>
          </Box>
        </Center>
        </Stack>
      </Fade>
    );
  }