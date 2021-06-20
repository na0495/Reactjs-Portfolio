import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Avatar,
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
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color="#2D3748"
        marginLeft="auto"
        marginRight="auto"
        maxWidth="55rem"
        {...props}
      >
        <Flex
          align="center"
          mr={{ md: '5' }}
          width={{ sm: '100%', md: 'auto' }}
          justifyContent={{ sm: 'space-between', md: 'flex-start' }}
        >
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            <Avatar
              name="Mrabet Saad"
              // size="sm"
              src={'url(../../assets/giphy.gif'}
            />
          </Heading>
        </Flex>
        <Box
          mt={{ sm: 3, md: 0 }}
          position={{ sm: 'absolute', md: 'unset' }}
          // top="1.5rem"
          right="5.5rem"
        >
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box>
      </Flex>
    </>
  );
};

export default SwitchMode;