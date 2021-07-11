import { Box } from '@chakra-ui/layout';
import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Particles from './Animation/Particles'
import Path from './home/Path';

export default function LandingPage() {
    return (
        <>
          <Particles>
            <Box>
              <Hero/>
              <AboutMe/>
              <Path/>
            </Box>
          </Particles>
        </>
    )

}