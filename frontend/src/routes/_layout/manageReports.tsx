import FileGrid, { FileGridFile } from "@/components/ManageReports/FileGrid";
import FileUpload from "@/components/ManageReports/FileUpload";
import { toaster } from "@/components/ui/toaster";
import { createToaster, Flex, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react"

const ManageReports: React.FC = () => {
  const initialFiles: FileGridFile[] = [
    {
      heading: "Apr3-Apr9-2025",
      text: "Uploaded 4:55pm April 9th, 2025",
    },
    {
      heading: "Mar27-Apr2-2025",
      text: "Uploaded 4:55pm April 2nd, 2025",
    },
    {
      heading: "Mar20-Mar26-2025",
      text: "Uploaded 4:55pm March 26th, 2025",
    },
    {
      heading: "Mar13-Mar19-2025",
      text: "Uploaded 4:55pm March 19th, 2025",
    },
    {
      heading: "Mar6-Mar12-2025",
      text: "Uploaded 4:55pm March 12th, 2025",
    },
    {
      heading: "Feb27-Mar5-2025",
      text: "Uploaded 4:55pm March 5th, 2025",
    },
  ];

  const [files, setFiles] = useState(initialFiles)

  const removeReport = () => {
    // TODO: update list - get index of report clicked (from event), remove from list & setList()
    toaster.create({
      description: "Report removed!",
      type: "success",
    });
  }
  
  // TODO: button press -> toast "report removed!"
  return (
    <Flex direction="column" gap={4}>
      <Heading>Upload reports</Heading>
      <FileUpload />
      <Heading>Current reports</Heading>
      <FileGrid files={files} cardsIcon="fa-reg-file" buttonsIcon="fa-reg-times-circle" buttonsPress={removeReport} />
    </Flex>
  );
};

export default ManageReports;

export const Route = createFileRoute("/_layout/manageReports")({
  component: ManageReports,
});
