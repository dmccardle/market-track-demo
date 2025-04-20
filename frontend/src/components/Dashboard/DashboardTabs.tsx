import { Center, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";
import DummyConsumer from "../../data/dummy-consumer.json";
import DummyCount from "../../data/dummy-count.json";
import DummyBulk from "../../data/dummy-bulk.json";
import MarketData from "@/data/MarketData";

const DashboardTabs: React.FC = () => {
  const [value, setValue] = useState<string | null>("consumer")

  const dummyConsumer: MarketData = DummyConsumer as MarketData;
  const dummyCount: MarketData = DummyCount as MarketData;
  const dummyBulk: MarketData = DummyBulk as MarketData;

  const consumerData: MarketData[] = [dummyConsumer];
  const countData: MarketData[] = [dummyCount];
  const bulkData: MarketData[] = [dummyBulk];

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}
      width="100%"
      variant="enclosed"
    >
      <Center>
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
      </Center>
      <Tabs.Content value="consumer">
        <DashboardContent data={consumerData} />
      </Tabs.Content>
      <Tabs.Content value="bulk">
        <DashboardContent data={bulkData} />
      </Tabs.Content>
      <Tabs.Content value="count">
        <DashboardContent data={countData} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DashboardTabs;
