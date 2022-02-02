import Fade from 'react-reveal/Fade';
import { Center, Stack, Box, useColorMode, Heading} from "@chakra-ui/react"
import './icon.css'
import aboutme from '../../_mock/aboutme.json'
  
export default function About() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade delay={300} >
        <Stack spacing={12}>
        <Center>
          <Box p={25}  borderRadius="16" w={["100%", "75%"]}>
              <Fade cascade delay={1000}>
                  <Heading as="h3" size="lg" color="orange" mb={30}>
                    {aboutme.title}
                  </Heading>
              </Fade>
              <Fade cascade delay={1500}>
                <div>
                  {aboutme.details.map((item) => ( 
                    <h2 key={item.id} className="text">{item.text}</h2>
                  ))}
                </div>
              </Fade>
          </Box>
        </Center>
        </Stack>
      </Fade>
    );
  }