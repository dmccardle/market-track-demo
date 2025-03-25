import { Flex, Heading } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import InsightPanel from "@/components/Insights/InsightPanel"
import GraphPanel from "@/components/Dashboard/GraphPanel";
import ControlsPanel from "@/components/Dashboard/ControlsPanel";

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" gap={3}>
      <Heading size="3xl">March 19<sup>th</sup> - 26<sup>th</sup>, 2025</Heading>
      <ControlsPanel />
      <Flex gap={2} direction={{ base: "column", lg: "row" }}>
        <Flex flex={1}>
          <GraphPanel />
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
