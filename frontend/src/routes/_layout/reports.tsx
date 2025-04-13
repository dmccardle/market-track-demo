import FileGrid from "@/components/ManageReports/FileGrid";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";


const Reports: React.FC = () => {

  return (
     <FileGrid cardsIcon="fa-reg-file-pdf" buttonsIcon="md-outline-file-open"/>
  );
};

export default Reports;

export const Route = createFileRoute("/_layout/reports")({
  component: Reports,
});