import FileGrid from "@/components/ManageReports/FileGrid";
import { Box, FileUpload, Flex, Heading, Icon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react"
import { LuUpload } from "react-icons/lu";

const ManageReports: React.FC = () => {
  
  return (
    <Flex direction="column" gap={4}>
      <Heading>Upload reports</Heading>
      <FileUpload.Root>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone>
          <Icon size="md" color="fg.muted">
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Drag and drop files here</Box>
            <Box color="fg.muted">.xls</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
      </FileUpload.Root>
      <Heading>Current reports</Heading>
      <FileGrid />
    </Flex>
  );
};

export default ManageReports;

export const Route = createFileRoute("/_layout/manageReports")({
  component: ManageReports,
});
