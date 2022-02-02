import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
// chakra-ui
import {
  Box,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
// icons
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
// sound effects
import useSound from "use-sound";
import lightswitch from "../assets/audios/lightswitch.mp3";


const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const SwitchMode = props => {
  // define color mode & toggle to light / dark mode
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  // sound effects on click
  const [play] = useSound(lightswitch, {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = () => {
    text === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorMode();
  };


  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Box
          p={4}
          sx={{ position: '-webkit-sticky', 
          // eslint-disable-next-line
          position: 'sticky', 
          top: '0',
          textAlign: 'right',
          zIndex: 3,
        }}
        >
          <IconButton
            boxShadow="dark-lg"
            aria-label="Color Mode"
            onClick={handleClick}
            icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
            // onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default SwitchMode;