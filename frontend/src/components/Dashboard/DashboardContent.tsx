import { Flex } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import DummyConsumer from "../../data/dummy-consumer.json";
import ConsumerData from "@/data/ConsumerData";

const DashboardContent: React.FC = () => {
  const dummyConsumer: ConsumerData = DummyConsumer as ConsumerData;

  let varietyNames: Set<string> = new Set();
  let destinationNames: Set<string> = new Set();
  dummyConsumer.varieties.forEach((variety) => {
    varietyNames.add(variety.name);
    variety.exportDestinations.forEach((destination) => {
      destinationNames.add(destination.commonName);
    });
  });
  
  return (
    <Flex direction="column" gap={4}>
      <ControlsPanel
        varietySelectOptions={Array.from(varietyNames)}
        destinationSelectOptions={Array.from(destinationNames)}
      />
      <Flex gap={2} direction={{ base: "column-reverse", lg: "row" }}>
        <Flex flex={1}  >
          <GraphPanel />
        </Flex>
        <InsightPanel />
      </Flex>
    </Flex>
  );
};

export default DashboardContent;
