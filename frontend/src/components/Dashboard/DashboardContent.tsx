import { Flex } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import MarketData from "@/data/MarketData";
import { useVariety } from "@/contextProviders/VarietyProvider";
import { useDesintation } from "@/contextProviders/DestinationProvider";
import ExportData from "@/data/ExportData";
import { useFob } from "@/contextProviders/FobProvider";
import { useState } from "react";
import DateRangeContext from "@/contextProviders/DateRangeContext";

interface DashboardContentProps {
  marketData: MarketData[];
  varietyNames: string[];
  destinationNames: string[];
};

const DashboardContent: React.FC<DashboardContentProps> = ({ marketData, varietyNames, destinationNames }) => {
  const varietyContext = useVariety();
  const destinationContext = useDesintation();
  const fobContext = useFob();

  const [dateRange, setDateRange] = useState<number[]>([]);
  
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

  if (varietyContext?.value && destinationContext?.value) {
    // ASSUMING these are sorted by most recent to oldest
    marketData.forEach((marketDataPoint) => {
      const exportData: ExportData | undefined = marketDataPoint.getFilteredDataPoints(varietyContext.value, destinationContext.value);
      // this has to generate the lists of cwt and avg prices, which will be passed in to the GraphPanel after.
      if (exportData) {
        // TODO: find a way to do this better :clown:
        const cwt = fobContext.fob ? exportData.fob?.cwt : exportData.delivered?.cwt;
        cwtData.unshift(cwt);
        const price = fobContext.fob ? exportData.fob?.avgPrice : exportData.delivered?.avgPrice;
        priceData.unshift(price);
        const weekTime: number = (new Date(marketDataPoint.weekEndDate)).getTime();
        // this is causing an render loop - state is changing so it is updating again
        // setDateRange([weekTime, ...dateRange]);
      }
    });
  };

  return (
    <Flex direction="column" gap={4}>
      <ControlsPanel
        varietySelectOptions={Array.from(varietyNames)}
        destinationSelectOptions={Array.from(destinationNames)}
      />
      <Flex gap={2} direction={{ base: "column-reverse", lg: "row" }}>
        <Flex flex={1}  >
          <DateRangeContext.Provider value={{ dateRange, setDateRange }}>
            <GraphPanel cwtData={cwtData} priceData={priceData} />
          </DateRangeContext.Provider>
        </Flex>
        <InsightPanel />
      </Flex>
    </Flex>
  );
};

export default DashboardContent;
