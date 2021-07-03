// import * as React from "react";
import { Box } from '@chakra-ui/layout';
import Hero from './home/Hero';
import AboutMe from './home/AboutMe';

export default function LandingPage() {
    return (
        <>
        <Box>
           <Hero/>
           <AboutMe/>
        </Box>
        </>
    )

}