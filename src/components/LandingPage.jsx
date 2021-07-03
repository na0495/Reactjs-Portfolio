// import * as React from "react";
import { Box } from '@chakra-ui/layout';
import Hero from './home/Hero';
// import AboutMe from './home/AboutMe';
import HomeContent from './home/HomeContent';
import Particles from './Animation/Particles'

export default function LandingPage() {
    return (
        <>
        <Particles>
            <Box>
                <Hero/>
                {/* <AboutMe/> */}
                <HomeContent/>
            </Box>
        </Particles>
        </>
    )

}