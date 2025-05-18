import { Center, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";

const DashboardTabs: React.FC = () => {
  const [value, setValue] = useState<string | null>("consumer")
  
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
        <DashboardContent />
      </Tabs.Content>
      <Tabs.Content value="bulk">
        <DashboardContent />
      </Tabs.Content>
      <Tabs.Content value="count">
        <DashboardContent />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DashboardTabs;
