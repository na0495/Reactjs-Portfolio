import { Box } from '@chakra-ui/layout';
import Particles from './Animation/Particles';
import Intro from './content/Intro';
import AboutMe from './home/AboutMe';

export default function LandingPage() {
    return (
        <>
        <Particles>
            <Box>
                <Intro/>
                <AboutMe/>
            </Box>
        </Particles>
        </>
    )

}