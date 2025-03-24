import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import GraphPanel from "@/components/Dashboard/GraphPanel"
import InsightPanel from "@/components/Insights/InsightPanel"

const Dashboard: React.FC = () => {
  return (
    <Flex h="100vh" bg="gray.100" p={6} gap={4} wrap="wrap" direction={{ base: "row", sm: "column" }}>
      <Flex bg="white" p={6} borderRadius="lg" boxShadow="sm" flex={1}>
        <GraphPanel />
      </Flex>
      <InsightPanel />
    </Flex>
  );
};

export default Dashboard;

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});
