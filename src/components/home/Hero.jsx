import * as React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Heading } from "@chakra-ui/react"
import Wave from "react-wavify";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SplitText } from '../Animation/SplitText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    // padding: theme.spacing(2),
    // marginTop: 25,
    marginBottom: 100,
    textAlign: '45%',
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
  // item: {
  //   width: 250,
  //   height: 250,
  //   background: 'white',
  //   borderRadius: 25,
  //   backgroundImage: `url(assets/giphy.gif)`,
  // },
  // container: {
  //   position: 'absolute',
  //   width: 350,
  //   height: 350,
  //   display: 'flex',
  //   placeContent: 'center',
  //   placeItems: 'center',
  //   overflow: 'hidden',
  //   background: 'rgba(255, 255, 255, 0.2)',
  //   borderRadius: 30,
  //   top: 40,
  //   marginLeft: 50
  // }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
      <Wave
        className={classes.waveOne}
        fill="#90CDF4"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
        {/* <Grid item sx={12} sm={4}>
          <motion.div className={classes.container} ref={constraintsRef}>
            <motion.div className={classes.item}drag dragConstraints={constraintsRef} />
          </motion.div>
        </Grid> */}
        <Grid item sx={12} sm={8} >
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
                        delay: i * 0.3
                      }
                    })
                  }}
                  >
                  Hi, I'm Mrabet saad
                </SplitText>
              </Heading>
            </motion.div> 
          </AnimatePresence>
          <AnimatePresence>
            <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 3 }} >
              <Heading as="h3" size="lg" className={classes.secondary}>
                  A Software Developer
              </Heading>
            </motion.div>
          </AnimatePresence>
        </Grid>
        {/* <Grid item sx={12} sm={8}>
          <AnimatePresence>
            <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 3 }} >
              <Heading as="h3" size="lg" className={classes.secondary}>
                  A Software Developer and Computer Science <br />
                  student at the Faculty of Science <br />
                  and techenlogy of Tangier.
              </Heading>
            </motion.div>
          </AnimatePresence>
        </Grid> */}
      </Grid>
    </>
  );
}

