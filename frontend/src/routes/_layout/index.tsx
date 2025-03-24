import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import GraphPanel from "@/components/Dashboard/GraphPanel"
import InsightPanel from "@/components/Insights/InsightPanel"

const Dashboard: React.FC = () => {
  return (
    <Flex gap={2} direction={{ base: "column", md: "row" }}>
      <Flex bg="green" flex={1}>
        GraphPanel
      </Flex>
      <InsightPanel />
    </Flex>
  );
};

export default Dashboard;

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});
