import Fade from 'react-reveal/Fade';
// eslint-disable-next-line 
import { Heading, Box, Text, Stack, useColorMode, Center, Tag, HStack } from "@chakra-ui/react"
import GitHub from './GitHub'

function Feature({ title, desc, ...rest }) {
  return (
    <Center>
      <Box p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" w="60%"{...rest} borderRadius="16" >
        <Stack direction={["column", "row"]} spacing="24px">
          <Box p={5}>
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
        </Stack>
        <Box p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" {...rest} borderRadius="16" >
           <GitHub/>
        </Box>
        {/* <HStack spacing={4}>
        // {/* {language.map((key) => (
        //     <Tag size= key={key} variant="solid" colorScheme={language.color}>
        //         {language.name}
        //     </Tag>
        // ))} 
        </HStack> */}
      </Box>
    </Center>
  )
}

export default function GitStats() {
    const { colorMode } = useColorMode();
    return (
      <Fade bottom cascade>
        <Stack spacing={12} p={6}>
          <Feature
            backgroundColor={`mode.${colorMode}.background`}
            title="My Github contribution"
            desc="This is my current contribution at my Githubaccount na0495."
          />
        </Stack>
      </Fade>
    );
  }