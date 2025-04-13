import FileGrid from "@/components/ManageReports/FileGrid";
import FileUpload from "@/components/ManageReports/FileUpload";
import { Flex, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react"

const ManageReports: React.FC = () => {
  
  return (
    <Flex direction="column" gap={4}>
      <Heading>Upload reports</Heading>
      <FileUpload />
      <Heading>Current reports</Heading>
      <FileGrid />
    </Flex>
  );
};

export default ManageReports;

export const Route = createFileRoute("/_layout/manageReports")({
  component: ManageReports,
});
