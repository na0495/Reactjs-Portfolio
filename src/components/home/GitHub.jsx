import GitHubCalendar from "react-github-calendar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Box, useColorMode, Heading, Center } from "@chakra-ui/react";

const useStyle = makeStyles(theme => ({
    calander : {
      display: "flex",
      justifyContent: "center",
      paddingBottom: theme.spacing(5),
      padding: theme.spacing(3),
    },
    details: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(2),
    },
    heading: {
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: theme.spacing(5),
    },
    card: {
        borderRadius: 25
    },

}));

function GitHub() {
    const classes = useStyle();
    const { colorMode } = useColorMode();
  return (
    <Center>
      <Box p={25} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w={["100%", "100%", "80%"]}>
        <Heading variant="h4" className={classes.heading}>
          GitHub contributation Calander
        </Heading>
        <Box className={classes.calander}>
            <GitHubCalendar
              username="na0495"
              blockSize={18}
              // theme={{
              //   background: `mode.${colorMode}.background`,
              //   text: `mode.${colorMode}.text`,
              //   grade4: '#216e39',
              //   grade3: '#30a14e',
              //   grade2: '#40c463',
              //   grade1: '#9be9a8',
              //   grade0: '#ebedf0'
              // }}
              blockMargin={5}
              fontSize={16}
            />
        </Box>
        <Box className={classes.details}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box className={classes.details}>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=na0495&" alt="na0495" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.details}>
                <img src="https://github-readme-stats.vercel.app/api?username=na0495&count_private=true&theme=react" alt="na0495" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Center>
  );
}

export default GitHub;