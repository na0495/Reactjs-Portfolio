import {
  Stack,
  IconButton,
  Link,
  Heading,
  Center,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import siteConfig from "../configs/site-config";

// ------------------------------------------------------------

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Footer = (props: any) => {
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
        <Box backgroundColor={`mode.${colorMode}.nav`} mt={25}>
          {siteConfig.author.accounts.map((sc: any) => (
            <IconButton
              sx={{
                padding: 5,
                fontSize: "2rem",
              }}
              as={Link}
              isExternal
              key={sc.label}
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              // icon={sc.icon}
              {...iconProps}
            >
              {sc.icon}
            </IconButton>
          ))}
        </Box>
      </Stack>
      <Center>
        <Heading as="h6" size="xs" alignItems="center" pb={50}>
          {" "}
          {siteConfig.copyright}
        </Heading>
      </Center>
    </>
  );
};

export default Footer;
