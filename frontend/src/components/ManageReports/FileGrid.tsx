import { Grid, GridItem } from "@chakra-ui/react";
import React from "react"
import FileCard from "./FileCard";

interface FileGridProps {
  cardsIcon?: string;
  buttonsIcon?: string;
}

const FileGrid: React.FC<FileGridProps> = ({ cardsIcon = "", buttonsIcon = "" }) => {
  
  // TODO: make this load iteratively
  // TODO: add button functionality, add toast on delete
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
      <GridItem>
        <FileCard icon={cardsIcon} buttonIcon={buttonsIcon} />
      </GridItem>
    </Grid>
  );
};

export default FileGrid;
