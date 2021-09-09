import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Particles from '../components/Animation/Particles'
import Work from '../components/home/Work';
import Studys from '../components/home/Studys';
import Tech from '../components/home/Tech';
import Project from '../components/home/Project';
import GitHub from '../components/home/GitHub';
import { Box } from '@chakra-ui/react';

export default function SingelPage() {

    return (
        <>
            <Particles>
              <Box pb={100} mb={250}>
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
        </>
    )

}