import { Link as RouterLink, useLocation } from 'react-router-dom';
// chakra-ui
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// mui
import { makeStyles } from '@material-ui/core/styles';
// settings
import SwitchMode from './SwitchMode';
import MusicSwitch from './MusicSwitch';
// import LanguagePopover from './LanguagePopover';
import navConfig from '../configs/nav-config';
import soundUrl from "../assets/audios/rising-pops.mp3";
// sound effects
import useSound from 'use-sound';

const useStyles = makeStyles(theme => ({
  nav: {
    backdropFilter: 'blur(50px)',
    position: '-webkit-sticky', 
    // eslint-disable-next-line
    position: 'sticky', 
    top: '0',
    zIndex: 3,
  }
}));

const NavLink = ({ name, path }) => {
  const location = useLocation();
  const active = path === location.pathname
  const inactiveColor = useColorModeValue('orange.300', 'yellow.700')
  const [play] = useSound(
    soundUrl,
    { volume: 0.2 }
  );
  
  return (
    <Link
      px={3}
      bg={active ? inactiveColor : undefined}
      size={active ? 'lg' : 'md'}
      py={2}
      as={RouterLink}
      to={path}
      sx={{ fontWeight: 'bold' }}
      rounded={'md'}
      onClick={() => {
        play();
      }}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('orange.100', 'yellow.500'),
      }}
      href={'#'}>
      {name}
    </Link>
  )
};

export default function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const classes = useStyles();  
  // eslint-disable-next-line
  // const { t, i18n } = useTranslation();

  return (
    <>
      <Box  px={4} className={classes.nav}  boxShadow="dark-lg" shadow="md">
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
              {navConfig.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <LanguagePopover/> */}
            <MusicSwitch/>
            <SwitchMode/>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} >
              {navConfig.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}