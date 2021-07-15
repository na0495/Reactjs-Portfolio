import Fade from 'react-reveal/Fade';
// eslint-disable-next-line 
import { Heading, Box, Text, Stack, useColorMode, Center, Tag, HStack } from "@chakra-ui/react"
// import GitHub from './GitHub'

export default function GitStats() {
  // eslint-disable-next-line
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade>
        <Stack spacing={12} p={6}>
        <Center>
          <Box  p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" borderRadius="16" >
            <Stack direction={["column", "row"]} spacing="24px">
              <Box p={5}>
                <Heading fontSize="xl">title</Heading>
                <Text mt={4}>desc</Text>
              </Box>
            </Stack>
            {/* <Box backgroundColor="white" >
              <GitHub/>
            </Box> */}
          </Box>
        </Center>
        </Stack>
      </Fade>
    );
  }