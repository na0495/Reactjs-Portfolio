import FadeInWhenVisible from '../Animation/FadeInWhenVisible';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Text, Stack, Container, useColorMode } from "@chakra-ui/react"


const useStyles = makeStyles((theme) => ({
    root: {
      padding: 40,
      textAlign: 'center',
    },
    devider: {
        fontWeight: 40

    }
  }));

export default function Experience() {
    const classes = useStyles();
    const { colorMode } = useColorMode();
    return (
      <Container className={classes.root} backgroundColor={`mode.${colorMode}.card`}>
        <FadeInWhenVisible>
            <Stack direction="row" h="100px" p={4}>
                <Divider className={classes.devider} orientation="vertical" />
                <Text fontSize="2xl">Chakra UI</Text>
            </Stack>
        </FadeInWhenVisible>
      </Container>
    );
  }