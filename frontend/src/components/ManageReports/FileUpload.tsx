import { Flex, FileUploadFileAcceptDetails, Button } from "@chakra-ui/react";
import FileUploadDropzone from "./FileUploadDropzone";
import { useState } from "react";

const FileUpload: React.FC = () => {
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [, setPdfFile] = useState({})
  const [excelUploaded, setExcelUploaded] = useState(false);
  const [, setExcelFile] = useState({})

  const acceptFileUpload = (details: FileUploadFileAcceptDetails) => {
    if(details.files[0].type === "application/pdf") {
      setPdfUploaded(true)
      setPdfFile(details.files[0])
    } else if (details.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setExcelUploaded(true)
      setExcelFile(details.files[0])
    }
  }
   
  return (
    <Flex direction="column" gap={4} width="fit-content" alignItems="center">
      <Flex direction="row" justifyContent="flex-start" gap={2}>
        <FileUploadDropzone filetype=".xls" fileMime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" updateFunction={acceptFileUpload}/>
        <FileUploadDropzone filetype=".pdf" fileMime="application/pdf" updateFunction={acceptFileUpload}/>
      </Flex>
      {/* TODO: add functionality to call server & save files on press */}
      <Button width="fit-content" disabled={!pdfUploaded || !excelUploaded}>Save</Button>
    </Flex>
  );
};

export default FileUpload;
