import { Flex } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import MarketData from "@/data/MarketData";
import { useVariety } from "@/contextProviders/VarietyProvider";
import { useDesintation } from "@/contextProviders/DestinationProvider";
import ExportData from "@/data/ExportData";
import { useFob } from "@/contextProviders/FobProvider";

interface DashboardContentProps {
  marketData: MarketData[];
};

const DashboardContent: React.FC<DashboardContentProps> = ({ marketData }) => {
  const varietyContext = useVariety();
  const destinationContext = useDesintation();
  const fobContext = useFob();

  let varietyNames: Set<string> = new Set();
  let destinationNames: Set<string> = new Set();
  marketData.forEach((marketDataPoint) => {
    marketDataPoint.varieties.forEach((variety) => {
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
  // 1) IF NO FILTERS SELECTED: idk, double bar graph sorted decending by either cwt or price? (for this week)
  // 2) IF ONLY 'VARIETY' SELECTED: show bar graph - cwt & price for that variety, based on destination (for this week)
  // 3) IF ONLY 'DESTINATION' SELECTED: show bar graph - cwt & price to that destination, based on variety (for this week)
  // 4) IF BOTH 'VARIETY' & 'DESTINATION' SELECTED: show line graph for that variety & destination combo

  // tbh for the demo I could just make both filters required
  // ...but maybe a better sell if it gets more fancy
  let cwtData: (number | undefined)[] = [];
  let priceData: (number | undefined)[] = [];

  if (varietyContext?.variety && destinationContext?.destination) {
    // ASSUMING these are sorted by most recent to oldest
    marketData.forEach((marketDataPoint) => {
      const exportData: ExportData | undefined = marketDataPoint.getFilteredDataPoints(varietyContext.variety, destinationContext.destination);
      // this has to generate the lists of cwt and avg prices, which will be passed in to the GraphPanel after.
      let cwt = undefined;
      let price = undefined;
      if (exportData) {
        // TODO: find a way to do this better :clown:
        cwt = fobContext.fob ? exportData.fob?.cwt : exportData.delivered?.cwt;
        price = fobContext.fob ? exportData.fob?.avgPrice : exportData.delivered?.avgPrice;
      }
      cwtData.unshift(cwt);
      priceData.unshift(price);
    });
  };

  return (
    <Flex direction="column" gap={4}>
      {/* can still do it using extracted components... I will just need a context for Variety & Destination filters */}
      <ControlsPanel
        varietySelectOptions={Array.from(varietyNames)}
        destinationSelectOptions={Array.from(destinationNames)}
      />
      <Flex gap={2} direction={{ base: "column-reverse", lg: "row" }}>
        <Flex flex={1}  >
          <GraphPanel cwtData={cwtData} priceData={priceData} />
        </Flex>
        <InsightPanel />
      </Flex>
    </Flex>
  );
};

export default DashboardContent;
