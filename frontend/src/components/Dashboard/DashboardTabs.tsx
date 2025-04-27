import { Center, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";
import { plainToClass } from "class-transformer";
import consumerJson from "../../data/dummy-consumer.json";
import countJson from "../../data/dummy-count.json";
import bulkJson from "../../data/dummy-bulk.json";
import MarketData from "@/data/MarketData";
import { useVariety } from "@/contextProviders/VarietyProvider";
import { useDesintation } from "@/contextProviders/DestinationProvider";

const DashboardTabs: React.FC = () => {
  const [value, setValue] = useState<string | null>("consumer");
  const varietyContext = useVariety();
  const destinationContext = useDesintation();

  const dummyConsumer: MarketData = plainToClass(MarketData, consumerJson);
  const dummyCount: MarketData = plainToClass(MarketData, countJson)
  const dummyBulk: MarketData = plainToClass(MarketData, bulkJson);

  const consumerData: MarketData[] = [dummyConsumer];
  const countData: MarketData[] = [dummyCount];
  const bulkData: MarketData[] = [dummyBulk];

  return (
    <Tabs.Root value={value} onValueChange={(e) => {
      setValue(e.value);
      varietyContext.setValue("");
      destinationContext.setValue("");
    }}
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
        <DashboardContent marketData={consumerData} />
      </Tabs.Content>
      <Tabs.Content value="bulk">
        <DashboardContent marketData={bulkData} />
      </Tabs.Content>
      <Tabs.Content value="count">
        <DashboardContent marketData={countData} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DashboardTabs;
