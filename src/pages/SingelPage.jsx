import { useRef } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Particles from '../components/Animation/Particles'
import Work from '../components/home/Work';
import Studys from '../components/home/Studys';
import Tech from '../components/home/Tech';
import Project from '../components/home/Project';
import GitHub from '../components/home/GitHub';

export default function SingelPage() {
  const parallax = useRef(null)
  const inactiveColor = useColorModeValue('orange.300', 'yellow.700')
    return (
      <div style={{ width: '100%', height: '100%'}}>
        <Parallax pages={7} ref={parallax}>
          <ParallaxLayer offset={0} speed={2} factor={0.3} onClick={() => parallax.current.scrollTo(1)}>
            <Particles>
              <Hero/>
            </Particles>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} factor={0.5} onClick={() => parallax.current.scrollTo(2)}>
            <About/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} factor={2} onClick={() => parallax.current.scrollTo(3)}>
            <Particles>
              <Work/>
            </Particles>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1} factor={2} onClick={() => parallax.current.scrollTo(4)}>
            <Particles>
              <Studys/>
            </Particles>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={1} factor={1} onClick={() => parallax.current.scrollTo(5)}>
            <Tech/>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={1} factor={1.5} onClick={() => parallax.current.scrollTo(6)}>
            <Project/>
          </ParallaxLayer>
          <ParallaxLayer offset={6} speed={1} factor={4} onClick={() => parallax.current.scrollTo(0)}>
            <GitHub/>
          </ParallaxLayer>
        </Parallax>
      </div>
    )

}