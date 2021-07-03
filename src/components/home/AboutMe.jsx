// import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import Fade from 'react-reveal/Fade';
// eslint-disable-next-line
import { Center, Stack, Text, Box, useColorMode, Heading } from "@chakra-ui/react"
// import main from '../../assets/main.jpeg'
  
export default function AboutMe() {
  // eslint-disable-next-line
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade>
        <Stack spacing={12} p={6}>
          <Center>
            <Heading>
              Comming Soon ...
            </Heading>
            {/* <Box backgroundColor={`mode.${colorMode}.background`} p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" w="90%" borderRadius="16">
              <Text>
                As you can see, my name is Mrabet saâd, a 23 yo software developer, with a bachelor's
                Computer Science, i enjoy being challenged and engaging with projects that require me to work
                outside my comfort zone and knowledge set, as continuing to learn new languages and developmenet techeniques."
              </Text>
            </Box> */}
          </Center>
        </Stack>
      </Fade>
    );
  }