import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Particles from './Animation/Particles'
import Work from './home/Work';
import Studys from './home/Studys';
import Tech from './home/Tech';
import Project from './home/Project';
import GitHub from './home/GitHub';
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function LandingPage() {
  const { colorMode } = useColorMode();

    return (
        <>
            <Particles>
              <Hero/>
              <AboutMe/>
            </Particles>
            {/* <Box p={25} sx={{ background: `mode.${colorMode}.path`}}> */}
              <Work/>
              <Studys/>
            {/* </Box> */}
            <Tech/>
            <Project/>
            <GitHub/>
            {/* <GitStats/> */}
        </>
    )

}