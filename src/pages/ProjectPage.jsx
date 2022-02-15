import React, { useRef } from 'react'
import { Box, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import { Posts } from '../components/projects/Posts'

const Page = ({ offset, gradient, onClick, bg, mode }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <Box bg={bg} className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.3} onClick={onClick}>
        <Posts />
      </ParallaxLayer>
    </>
  )
}

export default function App() {
  const parallax = useRef(null)
  // get the current color mode light or dark
  const { colorMode } = useColorMode()



  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient={colorMode === 'light' ? "lightGreen" : "darkGreen" } bg={useColorModeValue('#C1DEAE', '#519259')} onClick={() => scroll(1)} />
        <Page offset={1} gradient={colorMode === 'light' ? "lightCreme" : "darkCreme" } bg={useColorModeValue('#DBD0C0', '#B68973')}  onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  )
}