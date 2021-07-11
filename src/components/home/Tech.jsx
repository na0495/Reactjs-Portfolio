import * as React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Center, useColorMode, HStack } from '@chakra-ui/react';
import './tech.css'

export default function Tech() {
    const colorMode = useColorMode();

    return (
        <Box backgroundColor={`mode.${colorMode}.background`} pt={100} pb={100}>
            <Center>
                <Heading>My Tech Stack :</Heading>
            </Center>
                <Center>
                <HStack p={15}>
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/python.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/js.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/sql.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/java.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/c++.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/html.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/css.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/php.png" />

                </HStack>
                </Center>
                <Center>
                <HStack p={15}>
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/django.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/react.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/redux.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/postgresql.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/git.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/github.jpg" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/npm.png" />
                    <motion.img style={{ width: 85, height: 85, borderRadius: 15, border: 'solid black 2px'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="/language/laravel.png" />
                </HStack>
                </Center>
        </Box>
    )
}