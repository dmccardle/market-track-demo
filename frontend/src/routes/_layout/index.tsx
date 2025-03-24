import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import GraphPanel from "@/components/Dashboard/GraphPanel"
import InsightPanel from "@/components/Insights/InsightPanel"

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" gap={1}>
      <Heading size="3xl">March 19<sup>th</sup> - 26<sup>th</sup>, 2025</Heading>
      <Flex gap={2} direction={{ base: "column", md: "row" }}>
        <Flex bg="green" flex={1}>
          GraphPanel
        </Flex>
        <InsightPanel />
      </Flex>
    </Flex>
  );
};

export default Dashboard;

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});
