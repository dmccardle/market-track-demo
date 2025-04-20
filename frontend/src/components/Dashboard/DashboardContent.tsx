import { Flex } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import MarketData from "@/data/MarketData";

interface DashboardContentProps {
  data: MarketData[];
};

const DashboardContent: React.FC<DashboardContentProps> = ({ data }) => {
  let varietyNames: Set<string> = new Set();
  let destinationNames: Set<string> = new Set();
  data.forEach((dataPoint) => {
    dataPoint.varieties.forEach((variety) => {
      varietyNames.add(variety.name);
      variety.exportDestinations.forEach((destination) => {
        destinationNames.add(destination.commonName);
      });
    });
  });
  
  // ALGORITHM:
  // using selected value from filters:
  // 1. filter down to data points in the current destination
  // 2. filter down to data points of the current variety

  // scenarios for data display
  // 1) IF NO FILTERS SELECTED: idk
  // 2) IF ONLY 'VARIETY' SELECTED: show bar graph - cwt & price for that variety, based on destination (for this week)
  // 3) IF ONLY 'DESTINATION' SELECTED: show bar graph - cwt & price to that destination, based on variety (for this week)
  // 4) IF BOTH 'VARIETY' & 'DESTINATION' SELECTED: show line graph for that variety & destination combo

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
