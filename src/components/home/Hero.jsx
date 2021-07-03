import * as React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Heading, Box } from "@chakra-ui/react"
import { Grid } from '@material-ui/core';
import { SplitText } from '../Animation/SplitText';
import Fade from '../Animation/Fade';
import Type from '../Animation/Type';

export default function Home() {

  return (
    <>
      <Grid container>
        <Grid item sx={8} sm={8} >
          <Box p={3}>
            <Fade/>
          </Box>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Heading as="h2" size="2xl" isTruncated p={2}>
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
          <Heading as="h3" size="lg" color="orange" p={2}>
            <Type/>
          </Heading>
        </Grid>
      </Grid>
    </>
  );
}

