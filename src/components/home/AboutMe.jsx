// import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import Fade from 'react-reveal/Fade';
import { Heading, Box, Text, Stack, useColorMode, Center, Flex, Avatar } from "@chakra-ui/react"
import main from '../../assets/main.jpeg'
  
function Feature({ title, desc, imageUrl, imageAlt, ...rest }) {
  return (
    <Center>
      <Box p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" w="60%"{...rest} borderRadius="16" >
        <Stack direction={["column", "row"]} spacing="24px">
          <Flex>
            <Box w="25%" >
              <Avatar /* sx={{ verticalAlign: 'middle' }} */ size="2xl" src={main} name={imageAlt}/>
            </Box>
            <Box w="75%">
              <Heading fontSize="xl">{title}</Heading>
              <Text mt={4}>{desc}</Text>
            </Box>
          </Flex>  
        </Stack>
      </Box>
    </Center>
  )
}

export default function AboutMe() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade>
        <Stack spacing={12} p={6}>
          <Feature
            backgroundColor={`mode.${colorMode}.background`}
            title="About me"
            desc="As you can see, my name is Mrabet saâd, a 23 yo software developer, with a bachelor's
            Computer Science, i enjoy being challenged and engaging with projects that require me to work
            outside my comfort zone and knowledge set, as continuing to learn new languages and developmenet techeniques."
            imageUrl="url(assets/main.jpeg)"
            imageAlt="Mrabet Saad"
          />
        </Stack>
      </Fade>
    );
  }