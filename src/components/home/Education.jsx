import Fade from 'react-reveal/Fade';
import { Heading, Box, Text, Stack, useColorMode, Center } from "@chakra-ui/react"
  
function Feature({ title, desc, ...rest }) {
  return (
    <Center>
      <Box p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" w="60%"{...rest} borderRadius="16" >
        <Stack direction={["column", "row"]} spacing="24px">
          <Box >
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  )
}

export default function Experience() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade>
        <Stack spacing={12} p={6}>
          <Feature
            backgroundColor={`mode.${colorMode}.background`}
            title="Full-Stack web dev"
            desc="Development of Web application for shipping."
          />
        </Stack>
      </Fade>
    );
  }