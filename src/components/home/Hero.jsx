import * as React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Heading } from "@chakra-ui/react"
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SplitText } from '../Animation/SplitText';
import Fade from '../Animation/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: theme.spacing(5),

  },
  hero: {
    padding: theme.spacing(1),
    // marginTop: theme.spacing(10),
    // textAlign: 'center',
    // color: 'white',
    fontWeight: 'bold',
    // top: 40,
    // position: 'absolute',
  },
  secondary: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    // padding: theme.spacing(2),
    // marginTop: 25,
    // textAlign: '45%',
  },

  waveOne: {
    transform: 'rotate(180deg)',
    // left: 0,
    // height: 400,
    zIndex: 5
    // margin: -15,
  },
  waveTwo: {
    // transform: 'rotate(180deg)',
    // left: 0,
    // height: 400,
    zIndex: 5
    // margin: -15,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item sx={8} sm={8} >
          <Fade/>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Heading as="h2" size="2xl" isTruncated className={classes.hero}>
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
                  I'm Mrabet saad
                </SplitText>
              </Heading>
            </motion.div> 
          </AnimatePresence>
          <AnimatePresence>
            <motion.div animate={{ y: -50 }} transition={{ ease: "easeOut", duration: 3 }} >
              <Heading as="h3" size="lg" className={classes.secondary}>
                  A Software Developer, starting his <br/>
                  journey in the vast universe <br/>
                  of programming.
              </Heading>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </>
  );
}

