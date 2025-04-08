import { Container, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";


const Reports: React.FC = () => {
  
  return (
     <Container>
      <Text>Reports page</Text>
     </Container>
  );
};

export default Reports;

export const Route = createFileRoute("/_layout/reports")({
  component: Reports,
});