import * as React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Heading, Box } from "@chakra-ui/react"
import { Grid } from '@material-ui/core';
import { SplitText } from '../Animation/SplitText';
import Type from '../Animation/Type';

export default function Home() {

  return (
    <Box sx={{ height: window.innerHeight - 140}}>


    <Grid container  >
      <Grid item sx={12} sm={12}>
        <Box sx={{ py: 10, px: 3, textAlign: 'center', mt:100}} >
          <Heading as="h2" size="3xl" isTruncated p={2}>
            Hello There
          </Heading>
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
        </Box>
        </Grid>
      </Grid>
      </Box>
  );
}

