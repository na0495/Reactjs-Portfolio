import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Heading, Box, Text, Stack, useColorMode, Image } from "@chakra-ui/react"
// import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: 40,
      zIndex: 'auto',
      borderRadius: 16,

      // boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
      // transition: 'box-shadow 0.5s',
      // willChange: 'transform',
    },
    devider: {
      fontWeight: 40,

    }
  }));
  
function Feature({ title, desc, imageUrl, imageAlt, ...rest }) {
  return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Stack direction={["column", "row"]} spacing="24px">
          <Box >
            <Image objectFit="cover" borderRadius="full" boxSize="150px" src={imageUrl} alt={imageAlt}/>
          </Box>
          <Box >
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
        </Stack>
      </Box>
  )
}

export default function Experience() {
    const classes = useStyles();
    const { colorMode } = useColorMode();
    return (
      //
      <Container maxWidth="md" className={classes.root}> 
        <FadeInWhenVisible>
            {/* <Stack direction="row" h="100px" p={4}  className={classes.root} backgroundColor={`mode.${colorMode}.card`}>
                <Divider className={classes.devider} orientation="vertical" />
                <Text fontSize="2xl">Chakra UI</Text>
            </Stack> */}
            <Stack spacing={12}>
            <Divider className={classes.devider} orientation="vertical" />
              <Feature
                backgroundColor={`mode.${colorMode}.cardText`}
                title="Full-Stack web dev"
                desc="Development of Web application for shipping."
                imageUrl="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif"
                imageAlt="Rear view of modern home with pool"
              />
              <Feature
                backgroundColor={`mode.${colorMode}.cardText`}
                title="Save Money"
                desc="You deserve good things. With a whooping 10-15% interest rate per annum"
                imageUrl="https://bit.ly/2Z4KKcF"
                imageAlt="Rear view of modern home with pool"
              />
            </Stack>
        </FadeInWhenVisible>
      </Container>
    );
  }