import { Flex, Text } from "@chakra-ui/react";
import ControlsPanel from "./ControlsPanel";
import GraphPanel from "./GraphPanel";
import InsightPanel from "./Insights/InsightPanel";
import MarketData from "@/data/MarketData";
import { useVariety } from "@/contextProviders/VarietyProvider";
import { useDesintation } from "@/contextProviders/DestinationProvider";
import ExportData from "@/data/ExportData";
import { useFob } from "@/contextProviders/FobProvider";
import { useAvgPrice } from "@/contextProviders/data/AvgPriceDataProvider";
import { useCwt } from "@/contextProviders/data/CwtDataProvider";
import { useDateRange } from "@/contextProviders/data/DateRangeDataContext";
import { useEffect, useMemo } from "react";

interface DashboardContentProps {
  marketData: MarketData[];
  varietyNames: string[];
  destinationNames: string[];
};

const DashboardContent: React.FC<DashboardContentProps> = ({ marketData, varietyNames, destinationNames }) => {
  const varietyContext = useVariety();
  const destinationContext = useDesintation();
  const fobContext = useFob();
  
  const avgPriceContext = useAvgPrice();
  const cwtContext = useCwt();
  const dateRangeContext = useDateRange();

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
  useEffect(() => {
    if (varietyContext?.value && destinationContext?.value) {
      // ASSUMING these are sorted by most recent to oldest
      let runningCwt: number[] = [];
      let runningAvgPrice: number[] = [];
      let runningDateRange: number[] = [];
      marketData.forEach((marketDataPoint) => {
        const exportData: ExportData | undefined = marketDataPoint.getFilteredDataPoints(varietyContext.value, destinationContext.value, fobContext.fob);
        // this has to generate the lists of cwt and avg prices, which will be passed in to the GraphPanel after.
  
        if (exportData) {
          // TODO: find a way to do this better :clown:
          const cwt = fobContext.fob ? exportData.fob!.cwt : exportData.delivered!.cwt;
          runningCwt.unshift(cwt);
          const price = fobContext.fob ? exportData.fob!.avgPrice : exportData.delivered!.avgPrice;
          runningAvgPrice.unshift(price);
          const weekTime: number = (new Date(marketDataPoint.weekEndDate)).getTime();
          runningDateRange.unshift(weekTime);
        }
      });
      // the running* vars are correct, but for some reason on the DoubleLineGraph, all values are [] when using context
      cwtContext.setValue(runningCwt);
      avgPriceContext.setValue(runningAvgPrice);
      dateRangeContext.setValue(runningDateRange);
    }
  }, [varietyContext.value, destinationContext.value]);

  return (
    <Flex direction="column" gap={4}>
      <ControlsPanel
        varietySelectOptions={varietyNames}
        destinationSelectOptions={destinationNames}
      />
      {varietyContext.value && destinationContext.value ?
        <Flex gap={2} direction={{ base: "column-reverse", lg: "row" }}>
          <Flex flex={1}  >
            <GraphPanel />
          </Flex>
          <InsightPanel />
        </Flex>
      :
        <Text>Select variety & destination</Text>
      }
    </Flex>
  );
};

export default DashboardContent;
