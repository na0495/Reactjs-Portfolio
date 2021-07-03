import {
  Box,
  Flex,
//   Avatar,
  HStack,
  Link,
//   Heading,
  IconButton,
  // Button,
  // useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
// import { FiSun } from 'react-icons/fi';
// import { FaMoon } from 'react-icons/fa';
import SwitchMode from './SwitchMode';

const Links = [
{
  name: 'About me',
  path: '/'
},
{
  name: 'Skills',
  path: '/skills'
},
{
  name: 'Resumer',
  path: '/resumer'
}];
// const iconProps = {
//     variant: 'ghost',
//     size: 'lg',
//     isRound: true
//   };

const NavLink = ({ name, path }) => (
  <Link
    px={3}
    py={2}
    as={RouterLink}
    to={path}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.700'),
    }}
    href={'#'}>
    {name}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
              {/* <Box>NA</Box> */}
            {/* <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                <Avatar
                name="Mrabet Saad"
                // size="sm"
                src={'url(../../assets/giphy.gif'}
                />
            </Heading> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <SwitchMode/>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              More Details
            </Button> */}
            {/* <Box
              variant={'solid'}
              size={'sm'}
              mr={4}
              // mt={{ sm: 3, md: 0 }}
              // mr={4}
              // variant={'solid'}
              // position={{ sm: 'absolute', md: 'unset' }}
              // // top="1.5rem"
              // // right="5.5rem"
            >
                {/* <IconButton
                aria-label="Color Mode"
                icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
                onClick={toggleColorMode}
                size="lg"
                isRound={true}
                {...iconProps}
                /> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name}  path={link.path}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}