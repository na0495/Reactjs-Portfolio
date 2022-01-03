import * as React from "react";
import { Link, useLocation  } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'
// Material UI & chakra-ui
import { Heading, Button, ButtonGroup  } from '@chakra-ui/react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Animation
import { SplitText } from '../Animation/SplitText';
import Type from '../Animation/Type';
// static assets
import soundUrl from "../../assets/audios/rising-pops.mp3";
import CV from '../../assets/mrabetsaad.pdf'
import './icon.css'
// sound effects
import useSound from 'use-sound';

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight / 1.8,
    marginBottom: 250,
  },
  icons: {
    padding: theme.spacing(3),
    fontSize: '2rem',

  },
  image : {
    width: theme.spacing(25),
    height: theme.spacing(25),
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  avatar: {
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    margin: 'auto',
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(4),
  },
  box: {
    marginTop: theme.spacing(14),
  }
}));



export default function Home() {

  // eslint-disable-next-line
  // const { translate } = useLocales();
  const classes = useStyles();
  const location = useLocation();
  const isSingelPage = location.pathname === '/singelpage';

  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.5 }
  );

  const [isHovering, setIsHovering] = React.useState(
    false
  );

  return (
    <Box pb={25}>
    <Grid container className={classes.root} >
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Box className={classes.avatar}>
        <motion.div   
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>
            <Avatar alt="Mrabet Saad" src={process.env.PUBLIC_URL + 'images/me.png'} className={classes.image} />
        </motion.div>
          </Box>
      </Grid>
      <Grid item sx={12} sm={12} md={7} lg={7} xl={7}>
        <Box className={classes.box} >
          <Heading as="h2" size="3xl"  isTruncated p={4}>
            Hello there <span className="waving-hand">&#128075;</span>
          </Heading>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
              <Heading as="h1" size="4xl" isTruncated p={4}>
                <SplitText
                  initial={{ y: '100%' }}
                  animate="visible"
                  variants={{
                    visible: i => ({
                      y: 0,
                      transition: {
                        delay: i * 0.5
                      }
                    })
                  }}
                  >
                  I'm Mrabet Saad
                </SplitText>
              </Heading>
            </motion.div> 
          </AnimatePresence>
          <Heading as="h2" size="3xl" color="orange" p={4}>
            <Type/>
          </Heading>
        </Box>
        <ButtonGroup  size="lg"  variant="solid" ml={5} mt={5} spacing="6">
          <Button colorScheme="orange"> 
            <a href={CV} download>Download cv</a>
          </Button>
          {!isSingelPage &&
            <Button colorScheme="yellow"
              onMouseEnter={() => {
                setIsHovering(true);
                play();
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                stop();
              }}>
              <Link to="/singelpage" isHovering={isHovering}>Discover full portfolio</Link>
            </Button>}
        </ButtonGroup>
        </Grid>
      </Grid>
      </Box>
  );
}

