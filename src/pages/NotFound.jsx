import React from 'react';
import Particles from '../components/Animation/Particles'
import { Link } from 'react-router-dom';
import { Heading, Text} from '@chakra-ui/layout';
import { makeStyles } from '@material-ui/core';
import Footer from '../layouts/Footer';

const useStyles = makeStyles((theme) => ({
    title: {
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
    },
    root: {
        height: window.innerHeight / 1.3,
        // center the content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
        paddingBottom: 175

    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
    <Particles>
        <div className={classes.root}>
            <Heading as="h1" size="2xl" className={classes.title} isTruncated p={4} mt={250} >
                404 - Page Not Found
            </Heading>
            <Link to="/" className={classes.title} mb={100} mt={25}>
                <Text fontSize="3xl" color="orange"> Go Home </Text>
            </Link>
        </div>
        <Footer/>
    </Particles>
    );
};

export default NotFound;