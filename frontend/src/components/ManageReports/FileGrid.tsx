import { For, Grid, GridItem } from "@chakra-ui/react";
import React from "react"
import FileCard from "./FileCard";

interface FileGridProps {
  files: FileGridFile[];
  cardsIcon?: string;
  buttonsIcon?: string;
  buttonsPress?: Function;
}

export interface FileGridFile {
  heading: string;
  text: string;
}

const FileGrid: React.FC<FileGridProps> = ({ files, cardsIcon = "", buttonsIcon = "", buttonsPress = () => {} }) => {

  // TODO: add button functionality, add toast on delete
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
      <For each={files}>
        {(item, index) => {
          return (
            <GridItem key={index}>
              <FileCard heading={item.heading} text={item.text} icon={cardsIcon} buttonIcon={buttonsIcon} index={index} buttonPress={buttonsPress} />
            </GridItem>
          );
        }}
      </For>
    </Grid>
  );
};

export default FileGrid;
