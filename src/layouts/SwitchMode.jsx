import React from 'react';
import {
  Box,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const SwitchMode = props => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          {...iconProps}
        />
      </Box>

    </>
  );
};

export default SwitchMode;