import { Flex } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import ConsumerData from "@/data/ConsumerData";

interface DashboardContentProps {
  data: ConsumerData;
};

const DashboardContent: React.FC<DashboardContentProps> = ({ data }) => {
  let varietyNames: Set<string> = new Set();
  let destinationNames: Set<string> = new Set();
  data.varieties.forEach((variety) => {
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
