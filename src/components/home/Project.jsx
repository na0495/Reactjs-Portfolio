import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { SimpleGrid, Box, useMediaQuery, useColorMode, Center, Heading, Text } from "@chakra-ui/react";
import RepositoryCard from "./live-data-card";
import StackGrid from "react-stack-grid";
import CardSkeleton from "./card-skeleton";

function Project() {
    const { colorMode } = useColorMode();
    const { get, loading } = useFetch("https://api.github.com");
    const [repos, setRepos] = useState([]);
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
    const [isLargerThan982] = useMediaQuery("(min-width: 982px)");
  
    let columnWidth = 500;
    if (isLargerThan982) {
      columnWidth = 500;
    } else {
      if (isLargerThan720) {
        columnWidth = 400;
      } else {
        columnWidth = "100%";
      }
    }
  
    useEffect(() => {
      get("/users/na0495/repos").then(res => {
        setRepos(
          res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)
        );
      });
      // eslint-disable-next-line
    }, []);
  
  return (
    <Center>
      <Box p={15} mb={100} backgroundColor={`mode.${colorMode}.background`} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16" w="75%">
        {loading ? (
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
            <CardSkeleton />
            </SimpleGrid>
        ) : (
            <Box mt={4} pb={5}>
            <Heading as="h3" size="lg" pt={5} pl={7}>
              Open Source Projects
            </Heading>
            <Text  fontSize="xl" p={3} ml={4}>
              This is some of my open source projects. I have contributed to in mt github
            </Text>
            <StackGrid columnWidth={columnWidth}>
                {repos?.map((repo, index) => (
                <RepositoryCard
                    title={repo.name}
                    description={repo.description}
                    language={repo.language}
                    url={repo.svn_url}
                    created_at={repo.created_at}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                />
                ))}
            </StackGrid>
            </Box>
        )}
      </Box>
    </Center>
  );
}

export default Project;