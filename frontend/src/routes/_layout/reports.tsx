import FileGrid, { FileGridFile } from "@/components/ManageReports/FileGrid";
import { createFileRoute } from "@tanstack/react-router";
import ReportPDF from "@/data/Weekly Recap April 3- 9 ,2025.pdf";
import React from "react";


const Reports: React.FC = () => {
  const files: FileGridFile[] = [
  {
    heading: "Apr3-Apr9-2025",
    text: "",
  },
  {
    heading: "Mar27-Apr2-2025",
    text: "",
  },
  {
    heading: "Mar20-Mar26-2025",
    text: "",
  },
  {
    heading: "Mar13-Mar19-2025",
    text: "",
  },
  {
    heading: "Mar6-Mar12-2025",
    text: "",
  },
  {
    heading: "Feb27-Mar5-2025",
    text: "",
  },
];

  return (
    <>
      <FileGrid files={files} cardsIcon="fa-reg-file-pdf" buttonsIcon="md-outline-file-open" />
      <a href={ReportPDF} target="_blank">
        Open pdf
      </a>
    </>
  );
};

export default Reports;

export const Route = createFileRoute("/_layout/reports")({
  component: Reports,
});