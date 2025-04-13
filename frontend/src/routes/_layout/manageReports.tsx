import FileGrid from "@/components/ManageReports/FileGrid";
import FileUpload from "@/components/ManageReports/FileUpload";
import { Flex, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react"

const ManageReports: React.FC = () => {
  
  // TODO: button press -> toast "report removed!"
  return (
    <Flex direction="column" gap={4}>
      <Heading>Upload reports</Heading>
      <FileUpload />
      <Heading>Current reports</Heading>
      <FileGrid cardsIcon="fa-reg-file" buttonsIcon="fa-reg-times-circle"/>
    </Flex>
  );
};

export default ManageReports;

export const Route = createFileRoute("/_layout/manageReports")({
  component: ManageReports,
});
