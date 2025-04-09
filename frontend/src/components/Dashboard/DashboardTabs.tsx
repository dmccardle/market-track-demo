import { Center, SystemStyleObject, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react"
import { FaBox, FaStore, FaTruckMoving } from "react-icons/fa";
import DashboardContent from "./DashboardContent";

const openAnimation: SystemStyleObject = {
  animationName: "scale-in",
  animationDuration: "300ms",
};

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
      <Tabs.Content
        value="consumer"
        _open={openAnimation}
      >
        <DashboardContent />
      </Tabs.Content>
      <Tabs.Content
        value="bulk"
        _open={openAnimation}
      >
        <DashboardContent />
      </Tabs.Content>
      <Tabs.Content
        value="count"
        _open={openAnimation}
      >
        <DashboardContent />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DashboardTabs;
