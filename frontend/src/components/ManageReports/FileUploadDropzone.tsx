import { Box, FileUpload, FileUploadFileAcceptDetails, Icon } from "@chakra-ui/react";
import React from "react"
import { LuUpload } from "react-icons/lu";

interface FileUploadDropzoneProps {
  filetype: string;
  fileMime: string;
  updateFunction: Function;
}

const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({ filetype, fileMime, updateFunction }) => {

  return (
    <FileUpload.Root
      width="fit-content"
      onFileAccept={(details: FileUploadFileAcceptDetails) => updateFunction(details)}
      maxFiles={1}
      accept={fileMime}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon size="md" color="fg.muted">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">{filetype}</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
    </FileUpload.Root>
  );
};

export default FileUploadDropzone;
