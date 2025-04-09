import { Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react"

const ManageReports: React.FC = () => {
  
  return (
     <Text>Manage Reports Page</Text>
  );
};

export default ManageReports;

export const Route = createFileRoute("/_layout/manageReports")({
  component: ManageReports,
});
