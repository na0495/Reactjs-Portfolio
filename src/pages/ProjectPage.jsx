import React from 'react';
import Particles from '../components/Animation/Particles'
import { Link } from 'react-router-dom';
import { Heading, Text} from '@chakra-ui/layout';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
    },
    root: {
        paddingTop: 10,
        paddingBottom: 150,
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
    <Particles>
    <div className={classes.root}>
        <Heading as="h1" size="2xl" className={classes.title} isTruncated p={4} mt={250} >
            Comming Soon ! 
        </Heading>
        <Link to="/" className={classes.title} mb={100} mt={25}>
            <Text fontSize="3xl" color="orange"> Go Home </Text>
        </Link>
    </div>
    </Particles>
    );
};

export default NotFound;