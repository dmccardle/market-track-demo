import { For, Grid, GridItem } from "@chakra-ui/react";
import React from "react"
import FileCard from "./FileCard";

interface FileGridProps {
  cardsIcon?: string;
  buttonsIcon?: string;
}

interface File {
  heading: string;
  text: string;
}

const FileGrid: React.FC<FileGridProps> = ({ cardsIcon = "", buttonsIcon = "" }) => {
  const files: File[] = [
    {
      heading: "Apr2-Apr9-2025",
      text: "Uploaded at 4:55pm on April 9th, 2025",
    },
  ];

  // TODO: add button functionality, add toast on delete
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
      <For each={files}>
        {(item, index) => {
          return (
            <GridItem>
              <FileCard heading={item.heading} text={item.text} icon={cardsIcon} buttonIcon={buttonsIcon} key={index} />
            </GridItem>
          );
        }}
      </For>
    </Grid>
  );
};

export default FileGrid;
