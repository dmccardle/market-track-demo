import { Center, Tabs, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";
import { plainToClass } from "class-transformer";
import consumerJson1 from "../../data/dummy-consumer-1.json";
import consumerJson2 from "../../data/dummy-consumer-2.json";
import consumerJson3 from "../../data/dummy-consumer-3.json";
import countJson1 from "../../data/dummy-count-1.json";
import countJson2 from "../../data/dummy-count-2.json";
import countJson3 from "../../data/dummy-count-3.json";
import bulkJson1 from "../../data/dummy-bulk-1.json";
import bulkJson2 from "../../data/dummy-bulk-2.json";
import bulkJson3 from "../../data/dummy-bulk-3.json";
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

  const dummyConsumer1: MarketData = plainToClass(MarketData, consumerJson1);
  const dummyConsumer2: MarketData = plainToClass(MarketData, consumerJson2);
  const dummyConsumer3: MarketData = plainToClass(MarketData, consumerJson3);
  const dummyCount1: MarketData = plainToClass(MarketData, countJson1)
  const dummyCount2: MarketData = plainToClass(MarketData, countJson2)
  const dummyCount3: MarketData = plainToClass(MarketData, countJson3)
  const dummyBulk1: MarketData = plainToClass(MarketData, bulkJson1);
  const dummyBulk2: MarketData = plainToClass(MarketData, bulkJson2);
  const dummyBulk3: MarketData = plainToClass(MarketData, bulkJson3);

  const consumerData: MarketData[] = [dummyConsumer1, dummyConsumer2, dummyConsumer3];
  const countData: MarketData[] = [dummyCount1, dummyCount2, dummyCount3];
  const bulkData: MarketData[] = [dummyBulk1, dummyBulk2, dummyBulk3];

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
