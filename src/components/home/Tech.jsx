import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';
import { Box, Heading, Center, useColorMode, Wrap, WrapItem, Text, Grid } from '@chakra-ui/react';

export default function Tech() {
    const { colorMode } = useColorMode();
    const frontFramework = ['react', 'angular', 'redux', 'bootstrap', 'tailwind']
    const backFramework = ['django', 'django-rest-framework', 'laravel']
    const dataBase = ['postgresql', 'mysql', 'sqlite']
    const devops = ['git', 'github','netlify', 'google_cloud' ,'docker', 'kubernetes', 'aws', 'heroku']
    const programming = ['python', 'js', 'typescript', 'html', 'css', 'java', 'c', 'c++', 'php', 'golang', 'bash']

    const skillsData = [
        {
            title: 'Programming languages',
            description: "I'm very familiar working with bunch of programming languages, especialy Python & Javascript, HTMl/CSS since i more into web devlopment those days",
            data: programming,
        },
        {
            title: 'Front-end Framework',
            description: "In my past experience i had the chance to work with many framework and librarys in front-end development, i did work with React Javascript library alongside Redux, and i also hade the chance to work with Angular Framework, and styling framework as Boostrap 4/5 & recently tailwind.",
            data: frontFramework,
        },
        {
            title: 'Back-end Framework',
            description: "For the Back-end development, i did work with Laravel framework back when i was studying mybachelor degree, but now i'm mainly working with Django framework alongside many librarys and framework, as Django rest framework, django filter, AllAuth, Jwt and many others ...",
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
      <Fade Fade bottom cascade delay={1000}>
        <Center>
          <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w="75%" mt={100} mb={100}>            
          {skillsData.map(index => (
            <Box>
                <Fade Fade bottom cascade delay={1000}>
                  <Heading alignItems="center">{index.title}</Heading>
                </Fade>
                <Fade Fade bottom cascade delay={1250}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        <Box p={25}>
                            <Text color="gray.500" fontSize="2xl" >{index.description}</Text>
                        </Box>
                        <Box p={25}>
                            <Wrap >
                            {index.data.map(sc => (
                                <WrapItem>
                                  <Fade Fade bottom cascade delay={1500}>
                                    <motion.img 
                                        style={{ width: 85, height: 85, borderRadius: 15}} 
                                        whileHover={{ scale: 1.2 }} 
                                        whileTap={{ scale: 0.8 }} 
                                        src={'/language/'+sc+'.png'} alt={sc}
                                        />
                                  </Fade>
                                </WrapItem>
                            ))}
                            </Wrap>
                        </Box>
                    </Grid>
                </Fade>

            </Box>
            ))}
          </Box>
        </Center>
      </Fade>
    )
}