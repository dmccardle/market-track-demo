import { Center, Flex, Heading, Tabs, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import InsightPanel from "@/components/Dashboard/Insights/InsightPanel"
import GraphPanel from "@/components/Dashboard/GraphPanel";
import ControlsPanel from "@/components/Dashboard/ControlsPanel";
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" gap={3} id="topLevelFlex">
      <Heading size={{ base: "2xl", lg: "3xl"}}>March 19<sup>th</sup> - 26<sup>th</sup>, 2025</Heading>
      <Center>
        <Tabs.Root width="fit-content" variant="enclosed">
          <Tabs.List>
            <Tabs.Trigger value="consumer">
              <FaStore />
              <Text>Consumer</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="bulk">
              <FaTruckMoving />
              <Text>Bulk</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="count">
              <FaBox />
              <Text>Count</Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="consumer">
            consumer
          </Tabs.Content>
          <Tabs.Content value="bulk">
            bulk
          </Tabs.Content>
          <Tabs.Content value="count">
            count
          </Tabs.Content>
        </Tabs.Root>
      </Center>
      <ControlsPanel />
      <Flex gap={2} direction={{ base: "column-reverse", lg: "row" }}>
        <Flex flex={1}  >
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
