import React from 'react';
import { Stack, IconButton, Link, Heading, Center } from '@chakra-ui/react';
import siteConfig from '../../configs/site-config';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = props => {
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


      {siteConfig.author.accounts.map(sc => (
        <IconButton
          as={Link}
          isExternal
          key={sc.label}
          href={sc.url}
          aria-label={sc.label}
          size="lg"
          colorScheme={sc.type}
          icon={sc.icon}
          {...iconProps}
        />
      ))}
            
    </Stack>
    <Center>
      <Heading as="h6" size="xs" alignItems="center" pb={50}> {siteConfig.copyright}</Heading>
    </Center>
    </>
  );
};

export default Footer;
