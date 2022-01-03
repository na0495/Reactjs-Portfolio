import { motion } from "framer-motion";
import { Box, Heading, Center, useColorMode, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { Grid } from '@material-ui/core';

import Fade from 'react-reveal/Fade';
import tech from '../../_mock/tech.json';

export default function Tech() {
    const { colorMode } = useColorMode();

    return (
        <>
        <Center>
          <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w={["100%", "100%", "80%"]} mt={100} mb={100}>            
          <Heading as="h2" size="3xl" pt={5} pl={5} color="orange">Tech Skills</Heading>
          {tech.map(index => (
            <Fade cascade>
                <Heading pt={5} pl={5} alignItems="center">{index.title}</Heading>
                <Grid container>
                    <Grid item sm={12} md={6} >
                        <Box p={25} >
                            <Text color="gray.500" fontSize="2xl" >{index.description}</Text>
                        </Box>
                    </Grid>
                <Grid item sm={12} md={6}>
                    <Wrap p={25} >
                    {index.data.map(sc => (
                        <WrapItem>
                            <motion.img
                                key={sc}
                                style={{ width: 85, height: 85, borderRadius: 15}} 
                                whileHover={{ scale: 1.2 }} 
                                whileTap={{ scale: 0.8 }} 
                                src={'/language/'+sc+'.png'} alt={sc}
                            />
                        </WrapItem>
                    ))}
                    </Wrap>
                </Grid>
                </Grid>
            </Fade>
            ))}
          </Box>
        </Center>
      </>
    )
}