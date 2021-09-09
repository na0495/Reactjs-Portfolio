import { motion } from "framer-motion";
import { Box, Heading, Center, useColorMode, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { Grid } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

export default function Tech() {
    const { colorMode } = useColorMode();
    const frontFramework = ['react', 'angular', 'redux', 'bootstrap', 'tailwind']
    const backFramework = ['django', 'django-rest-framework', 'laravel']
    const dataBase = ['postgresql', 'mysql', 'sqlite']
    const devops = ['git', 'github','netlify', 'google_cloud' ,'docker'] //, 'kubernetes', 'aws', 'heroku'
    const programming = ['python', 'js', 'typescript', 'html', 'css', 'java', 'c', 'c++', 'php', 'golang', 'bash']

    const skillsData = [
        {
            title: 'Programming languages',
            description: "Those are the programming langauges that i'm familiar with, i'm very fluent in programming with Python or JavaScript/TypeScript, in other hand you can realy do much in web dev with out knowing HTML/CSS, and finaly i have a small knowlege working with Java, C++ & C",
            data: programming,
        },
        {
            title: 'Front-end Framework',
            description: "I had the chance to work with many framework and librarys in front-end development, i did work with React Javascript library alongside Redux, and i also hade the chance to work with Angular Framework, and styling framework as Boostrap 4/5 & recently tailwind.",
            data: frontFramework,
        },
        {
            title: 'Back-end Framework',
            description: "For the Back-end development, i did work with Laravel framework back in the past when i was studying mybachelor degree, but now i'm mainly working with Django framework alongside many librarys and framework, as Django rest framework, django filter, All Auth, Jwt and many others ...",
            data: backFramework,
        },
        {
            title: 'DataBase',
            description: "I will rate my skill as intermediaire on databases, since i don't use them that munch when working with framework like django / laravel since the have already an ORM system for the project, but time to time i have to do tasks on databases as PostgreSQL & SQLite for testing",
            data: dataBase,
        },
        {
            title: 'DevOps',
            description: "I'm very familiar with working with remote repository on Github using git version control with speed and efficiency, as for for devOps i'm still a beginner i don't have to much knowlege and experience yet, i do use a lot netlify to deploy current app for demo purpose, but i'm still learning devOps technologies as docker & kubernetes, and finaly i will say that i'm use to work with contabo & google cloud servers, and trying to learn Aws ...",
            data: devops,
        },

    ]

    return (
        <>
        <Center>
          <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w={["100%", "100%", "80%"]} mt={100} mb={100}>            
          <Heading as="h2" size="3xl" pt={5} pl={5} color="orange">Tech Skills</Heading>
          {skillsData.map(index => (
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