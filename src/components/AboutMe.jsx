import { Box, Stack } from "@chakra-ui/react";
import Particles from './Animation/Particles';
import Intro from './content/Intro';
import AboutMe from './home/AboutMe';


export default function LandingPage() {
    return (
        <>
        <Particles>
            <Box>
                <Stack direction="row">
                    <Intro/>
                </Stack>
                <AboutMe/>
            </Box>
        </Particles>
        </>
    )

}