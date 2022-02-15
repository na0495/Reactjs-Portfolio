import AboutMe from '../components/home/AboutMe';
import Footer from '../layouts/Footer'
import { Box } from '@chakra-ui/react'

// import { useColorMode } from "@chakra-ui/react"

export default function LandingPage() {
  // const { colorMode } = useColorMode();

    return (
        <>
          <Box pt={100} mb={100}>
            <AboutMe/>
          </Box>
          <Footer />
        </>
    )

}