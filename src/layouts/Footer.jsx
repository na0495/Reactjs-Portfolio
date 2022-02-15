import React from 'react';
import { Stack, IconButton, Link, Heading, Center, Box, useColorMode } from '@chakra-ui/react';
import siteConfig from '../configs/site-config';
import { makeStyles } from '@material-ui/core/styles';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const useStyles = makeStyles((theme) => ({
  iconBox: {
    marginTop: theme.spacing(2),
  },
  icons: {
    padding: theme.spacing(3),
    fontSize: '2rem',

  }
}));

const Footer = props => {
  const classes = useStyles();
  const colorMode = useColorMode();
  return (
    <>
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
        <Box backgroundColor={`mode.${colorMode}.nav`} className={classes.iconBox}>
          {siteConfig.author.accounts.map(sc => (
            <IconButton
            className = {classes.icons}
              as={Link}
              isExternal
              key={sc.label}
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
    </Stack>
    <Center>
      <Heading as="h6" size="xs" alignItems="center" pb={50}> {siteConfig.copyright}</Heading>
    </Center>
    </>
  );
};

export default Footer;
