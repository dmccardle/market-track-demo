import { Box, SimpleGrid } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import GraphPanel from "@/components/Dashboard/GraphPanel"
import InsightPanel from "@/components/Insights/InsightPanel"

const Dashboard: React.FC = () => {
  return (
    <Box p={6} h="100vh" bg="gray.100">
      <SimpleGrid minChildWidth="400px" gap={6} h="full">
        <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
          <GraphPanel />
        </Box>
        <Box>
          <InsightPanel />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});
