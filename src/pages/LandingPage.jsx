import Hero from '../components/home/Hero';
import Particles from '../components/Animation/Particles'

// import { useColorMode } from "@chakra-ui/react"

export default function LandingPage() {
  // const { colorMode } = useColorMode();

    return (
        <>
          <Particles>
            <Hero/>
          </Particles>
        </>
    )

}