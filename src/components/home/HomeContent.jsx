import * as React from 'react'
import { Center, Box, Heading, Text } from '@chakra-ui/react'
import './icon.css'

export default function HomeContent(){
    return (
        <>
        <Center>
            <Box p={25}>
                <Heading as="h3" size="lg">
                    Let me introduce introduce myself
                </Heading>
                {/* <Box > */}
                <Text fontSize="lg" p={5}>
                    <span className='icons'>&#129409;</span> As you can see, my name is Mrabet saâd, a 23 years old, from Tangier morocco.
                    <br/>
                    <br/>
                    <span className='icons'>&#128196;</span> I have a bachelor of science degree in Computer Engineering.
                    <br/>
                    <br/>
                    I enjoy being challenged and engaging with projects that require me to work outside my comfort
                    <br/>
                    zone and knowledge set, as continuing to learn new languages and developmenet techeniques.
                    <br/>
                    <br/>
                    &#x1F4BB; I'am fluent in many programming language, especialy in JavaScript & Python, as in C++ and Java.
                    <br/>
                    <br/>
                    My field of Interest's are building new  Web Technologies and Products and also in areas related
                    <br/>
                    Mobile application and Natural Launguage Processing.
                    <br/>
                    <br/>
                    whenever possible, i also apply my passion for developing products with multiple diffrent framework
                    <br/>
                    and techenologie, like Django, React, Node.js ... 
                </Text>
            </Box>
        </Center>
        </>
    )
}