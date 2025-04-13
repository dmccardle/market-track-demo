import { Grid, GridItem } from "@chakra-ui/react";
import React from "react"
import FileCard from "./FileCard";

interface FileGridProps {
  buttonsIcon?: string;
}

const FileGrid: React.FC<FileGridProps> = ({ buttonsIcon = "" }) => {
  
  // TODO: make this load iteratively
  // TODO: add button functionality, add toast on delete
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard buttonIcon={buttonsIcon} />
      </GridItem>
    </Grid>
  );
};

export default FileGrid;
