import { Center, Tabs, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";
import { plainToClass } from "class-transformer";
import consumerJson from "../../data/dummy-consumer.json";
import countJson from "../../data/dummy-count.json";
import bulkJson from "../../data/dummy-bulk.json";
import MarketData from "@/data/MarketData";
import { useVariety } from "@/contextProviders/VarietyProvider";
import { useDesintation } from "@/contextProviders/DestinationProvider";
import { DataProvider } from "@/contextProviders/data/DataProvider";

interface ListData {
  varietyNames: string[];
  destinationNames: string[];
}

const getVarietyAndDestinationLists = (marketData: MarketData[]): ListData => {
  let varietyNames: Set<string> = new Set();
  let destinationNames: Set<string> = new Set();
  marketData.forEach((marketDataPoint) => {
    marketDataPoint.varieties.forEach((variety) => {
      varietyNames.add(variety.name);
      variety.exportDestinations.forEach((destination) => {
        destinationNames.add(destination.id);
      });
    });
  });
  return { varietyNames: Array.from(varietyNames), destinationNames: Array.from(destinationNames) };
}

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

  const consumerLists: ListData = useMemo(() => getVarietyAndDestinationLists(consumerData), consumerData);
  const countLists: ListData = useMemo(() => getVarietyAndDestinationLists(countData), countData);
  const bulkLists: ListData = useMemo(() => getVarietyAndDestinationLists(bulkData), bulkData);

  return (
    <DataProvider>
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
          <DashboardContent
            marketData={consumerData}
            varietyNames={consumerLists.varietyNames}
            destinationNames={consumerLists.destinationNames}
          />
        </Tabs.Content>
        <Tabs.Content value="bulk">
          <DashboardContent
            marketData={bulkData}
            varietyNames={bulkLists.varietyNames}
            destinationNames={bulkLists.destinationNames}
          />
        </Tabs.Content>
        <Tabs.Content value="count">
          <DashboardContent
            marketData={countData}
            varietyNames={countLists.varietyNames}
            destinationNames={countLists.destinationNames}
          />
        </Tabs.Content>
      </Tabs.Root>
    </DataProvider>
  );
};

export default DashboardTabs;
