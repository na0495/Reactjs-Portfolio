import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Particles from '../components/Animation/Particles'
import Work from '../components/home/Work';
import Studys from '../components/home/Studys';
import Tech from '../components/home/Tech';
import Project from '../components/home/Project';
import GitHub from '../components/home/GitHub';
import { Box, Button, Center } from '@chakra-ui/react';

export default function SingelPage() {
  const scrollTop = () => window.scrollTo({ top: 0 })

    return (
        <>
            <Particles>
              <Box pb={100} mb={100}>
                <Hero/>
              </Box>
            </Particles>
            <AboutMe/>
            <Particles>
              <Work/>
              <Studys/>
            </Particles>
            <Tech/>
            <Project/>
            <GitHub/>
            <Center>
              <Button size="lg" ml={5} mt={10} colorScheme="yellow" onClick={scrollTop}>
                Go Back Top
              </Button>
            </Center>
        </>
    )

}