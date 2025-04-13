import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react"
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegFilePdf, FaRegFile } from "react-icons/fa6";
import { MdOutlineFileOpen } from "react-icons/md";

interface FileCardProps {
  icon: string;
  buttonIcon: string;
};

const getIconFromString = (iconName: string) => {
  switch (iconName) {
    case "fa-reg-file":
      return <FaRegFile />;
    case "fa-reg-file-pdf":
      return <FaRegFilePdf />;
    case "fa-reg-times-circle":
      return <FaRegTimesCircle />;
    case "md-outline-file-open":
      return <MdOutlineFileOpen />;
    default:
      return undefined;
  }
}

const FileCard: React.FC<FileCardProps> = ({ icon, buttonIcon }) => {
  
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
        {icon &&
          <Icon size="xl">
            {getIconFromString(icon)}
          </Icon>
        }
        <Flex direction="column">
          <Heading>Apr2-Apr9-2025</Heading>
          <Text>Uploaded: April 9th, 2025 @ 4:55pm </Text>
        </Flex>
      </Flex>
      {buttonIcon &&
        <Button variant="subtle">{getIconFromString(buttonIcon)}</Button>
      }
    </Flex>
  );
};

export default FileCard;
