import { motion, AnimatePresence } from "framer-motion";
// Material UI & chakra-ui
import {
  Heading,
  Box,
  Avatar,
  Grid,
  Container,
  GridItem,
} from "@chakra-ui/react";
// Animation
import { SplitText } from "../Animation/SplitText";
import Type from "../Animation/Type";
// static assets
import "./icon.css";

// ------------------------------------------------------------

const classes = {
  root: {
    marginTop: 125,
  },
  icons: {
    padding: 20,
    fontSize: "2rem",
  },
  image: {
    width: 2,
    height: 2,
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
  },
  avatar: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    margin: "auto",
    marginTop: 2,
    marginBottom: 4,
  },
  box: {
    marginTop: 14,
  },
};

export default function Hero() {
  return (
    <Container pb={25}>
      <Grid sx={classes.root}>
        <GridItem>
          <Box sx={classes.avatar}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Avatar
                size={"2xl"}
                name="Mrabet Saad"
                src={"public/images/me.png"}
              />
            </motion.div>
          </Box>
        </GridItem>
        <GridItem>
          <Box sx={classes.box}>
            <Heading as="h2" size="3xl" isTruncated p={4}>
              Hello there <span className="waving-hand">&#128075;</span>
            </Heading>
            {/* <AnimatePresence>
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
          </AnimatePresence> */}
            <Heading as="h2" size="3xl" color="orange" p={4}>
              <Type />
            </Heading>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
