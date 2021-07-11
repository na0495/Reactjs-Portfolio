// import * as React from "react";
import { Box } from '@chakra-ui/layout';
import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Particles from './Animation/Particles'
import Experience from './home/Education';

export default function LandingPage() {
    return (
        <>
        <Particles>
            <Box>
                <Hero/>
                <AboutMe/>
                <Experience/>
            </Box>
        </Particles>
        </>
    )

}