import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import { Divider, Heading, Box, Text, Stack, useColorMode, Center } from "@chakra-ui/react"
// import Typography from '@material-ui/core/Typography';
// import { Container } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: 40,
//       zIndex: 'auto',
//       borderRadius: 16,

//       // boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
//       // transition: 'box-shadow 0.5s',
//       // willChange: 'transform',
//     },
//     devider: {
//       fontWeight: 40,

//     }
//   }));
  
function Feature({ title, desc, ...rest }) {
  return (
    <Center>
      <Box p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" w="60%"{...rest} borderRadius="16" >
        <Stack direction={["column", "row"]} spacing="24px">
          {/* <Box >
            <Image objectFit="cover" borderRadius="full" boxSize="150px" src={imageUrl} alt={imageAlt}/>
          </Box> */}
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
      <FadeInWhenVisible>
        <Stack spacing={12}>
        <Divider orientation="vertical" />
          <Feature
            backgroundColor={`mode.${colorMode}.cardText`}
            title="Full-Stack web dev"
            desc="Development of Web application for shipping."
          />
          <Feature
            backgroundColor={`mode.${colorMode}.cardText`}
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum"
          />
        </Stack>
      </FadeInWhenVisible>
    );
  }