import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { SimpleGrid, Box, useColorMode, Center, Heading, Text } from "@chakra-ui/react";
import RepositoryCard from "./live-data-card";
import CardSkeleton from "./card-skeleton";
import Grid from "@material-ui/core/Grid";

function Project() {
    const { colorMode } = useColorMode();
    const { get, loading } = useFetch("https://api.github.com");
    const [repos, setRepos] = useState([]);
  
    useEffect(() => {
      get("/users/na0495/repos").then(res => {
        setRepos(
          res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 16)
        );
      });
      // eslint-disable-next-line
    }, []);
  
  return (
    <Center>
      <Box p={15} mb={100} mt={100} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w={["100%", "100%", "80%"]}>
        {loading ? (
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
            <CardSkeleton />
            </SimpleGrid>
        ) : (
            <Box mt={2} pb={5} p>
              <Heading as="h3" size="lg" pt={5} pl={7} ml={4}>
                Open Source Projects
              </Heading>
              <Text  fontSize="xl" p={3} ml={4}>
                This is some of my open source projects. I have contributed to in my github :
              </Text>
              <Box p={5}>
                <Grid container>
                  {repos?.map((repo, index) => (
                    <Grid item sm={12} md={6} lg={4} p={2}>
                      <RepositoryCard
                        key={index}
                        title={repo.name}
                        description={repo.description}
                        language={repo.language}
                        url={repo.svn_url}
                        created_at={repo.created_at}
                        stargazers_count={repo.stargazers_count}
                        forks_count={repo.forks_count}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
        )}
      </Box>
    </Center>
  );
}

export default Project;