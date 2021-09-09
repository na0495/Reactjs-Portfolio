import * as React from "react";
import {
  Box,
  useColorModeValue,
  useColorMode,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getTagColor } from "../../theme/tag";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const RepositoryCard = (props) => {
  const {
    title,
    description,
    language,
    url,
    stargazers_count,
    forks_count,
  } = props;
  const { colorMode } = useColorMode();

  const handleLinkClick = (e,link) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Box
        size="2xl"
        py={2}
        px={[2, 4]}
        mt={2}
        m={2}
        minHeight="124px"
        rounded="xl"
        borderWidth="1px"
        bg={`mode.${colorMode}.repo`}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          shadow: "lg",
          textDecoration: "none"
        }}
      >
        <VStack overflow="hidden" align="start" spacing={1}>
          <VStack spacing={1} align="start" w="100%">
            <Flex
              justifyContent={"space-between"}
              width="100%"
              onClick={e => handleLinkClick(e, url)}
            >
              <Tooltip hasArrow label="Github link" placement="top">
                <HStack cursor={"pointer"}>
                  <Icon as={FiGithub} boxSize="0.9em" mt={"1px"} />
                  <Text
                    fontSize="xl"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    color={"orange"}
                  >
                    {title}
                  </Text>
                </HStack>
              </Tooltip>
              <HStack cursor={"pointer"} onClick={e => handleLinkClick(e, url)}>
                {forks_count && (
                  <Box _hover={{ color: "blue.500" }}>
                    <Icon as={BiGitRepoForked} boxSize="1.2em" mt={"1px"} />
                    <Box as="span" ml="1" fontSize="md">
                      {forks_count}
                    </Box>
                  </Box>
                )}
                <Box _hover={{ color: "blue.500" }}>
                  <Icon as={BiStar} boxSize="1.2em" mt={"1px"} />
                  <Box as="span" ml="1" fontSize="sm">
                    {stargazers_count}
                  </Box>
                </Box>
              </HStack>
            </Flex>
            {language && (
              <Flex justifyContent={"space-between"} width="100%">
                <Box>
                  <HStack spacing="1">
                    <Tag size="sm" colorScheme={getTagColor(language)}>
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {language}
                      </Text>
                    </Tag>
                  </HStack>
                </Box>
              </Flex>
            )}
          </VStack>
          <Box>
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              {description}
            </Text>
          </Box>{" "}
        </VStack>
      </Box>
    </motion.div>
  );
};

export default RepositoryCard;
