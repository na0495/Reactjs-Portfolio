import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SwitchMode from './SwitchMode';

const Links = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About me',
  path: '/aboutme'
},
{
  name: 'Skills',
  path: '/skills'
},
{
  name: 'Resume',
  path: '/resume'
},
{
  name: 'Project',
  path: '/project'
}
];

const NavLink = ({ name, path }) => (
  <Link
    px={3}
    py={2}
    as={RouterLink}
    to={path}
    sx={{ fontWeight: 'bold' }}
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
  const { colorMode } = useColorMode();

  return (
    <>
      <Box  px={4} backgroundColor={`mode.${colorMode}.nav`} boxShadow="dark-lg" shadow="md">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
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
            <NavLink  name='Singel page' path='/singelpage'>Singel page</NavLink>
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