import React from 'react';
import {
  Box,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import useSound from "use-sound";
import lightswitch from "../assets/audios/lightswitch.mp3";


const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const SwitchMode = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

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
    <>
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

    </>
  );
};

export default SwitchMode;