import Hero from '../components/home/Hero';
import Particles from '../components/Animation/Particles'
import Footer from '../layouts/Footer';

// import { useColorMode } from "@chakra-ui/react"

export default function LandingPage() {
  // const { colorMode } = useColorMode();

    return (
        <>
          <Particles>
            <Hero/>
            <Footer/>
          </Particles>
        </>
    )

}