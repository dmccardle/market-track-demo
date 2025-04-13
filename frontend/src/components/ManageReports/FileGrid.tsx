import { Grid, GridItem } from "@chakra-ui/react";
import React from "react"
import FileCard from "./FileCard";

const FileGrid: React.FC = () => {
  
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
      <GridItem>
        <FileCard />
      </GridItem>
    </Grid>
  );
};

export default FileGrid;
