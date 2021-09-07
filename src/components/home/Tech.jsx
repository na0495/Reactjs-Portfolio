import { motion } from "framer-motion";
import { Box, Heading, Center, useColorMode, Wrap, WrapItem } from '@chakra-ui/react';

export default function Tech() {
    const colorMode = useColorMode();

    return (
        <>
        <Center>
            <Box backgroundColor={`mode.${colorMode}.background`} pt={100} pb={100} w="50%">
                <Center><Heading alignItems="center">Tech Stack</Heading></Center>
                <Wrap p={15}>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/python.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/js.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/sql.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/java.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/c++.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/html.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/css.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/php.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/django.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/react.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/redux.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/postgresql.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/git.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/github.jpg" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/npm.png" /></WrapItem>
                  <WrapItem><motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 1px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/laravel.png" /></WrapItem>
                </Wrap>
            </Box>
        </Center>
        </>
    )
}