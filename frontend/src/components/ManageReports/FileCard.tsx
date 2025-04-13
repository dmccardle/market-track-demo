import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react"
import { FaRegFilePdf, FaRegTimesCircle } from "react-icons/fa";

const FileCard: React.FC = () => {
  
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      paddingX={4}
      paddingY={2}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
    >
      <Flex gap={2} alignItems="center">
        <FaRegFilePdf size="30" />
        <Flex direction="column">
          <Heading>Apr2-Apr9-2025</Heading>
          <Text>Uploaded: April 9th, 2025 @ 4:55pm </Text>
        </Flex>
      </Flex>
      <Button variant="subtle"><FaRegTimesCircle/></Button>
    </Flex>
  );
};

export default FileCard;
