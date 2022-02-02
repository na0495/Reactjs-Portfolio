import * as React from "react";
import { AnimatePresence, motion } from 'framer-motion'
// Material UI & chakra-ui
import { Heading } from '@chakra-ui/react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Animation
import { SplitText } from '../Animation/SplitText';
import Type from '../Animation/Type';
// static assets
import './icon.css'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 125,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 250,
    }
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

  const classes = useStyles();

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
        </Grid>
      </Grid>
      </Box>
  );
}

