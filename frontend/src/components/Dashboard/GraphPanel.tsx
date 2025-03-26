import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";
import StyledLineGraph from "./Graphs/StyledLineGraph";

const GraphPanel: React.FC = () => {
  const graphConfig: string = "two";
  let graphs;
  
  const cwtData: number[] = [1500, 1450, 1600, 1650, 1675];
  const cwtColor: string = "#123456";
  const priceData: number[] = [22, 22, 22.50, 22.50, 23];
  const priceColor: string = "#654321";

  switch(graphConfig) {
    case "one":
      graphs = <DoubleLineGraph
        name1="cwt" data1={cwtData} color1={cwtColor} yRange1={50}
        name2="avg.price" data2={priceData} color2={priceColor} yRange2={0.25}
      />;
      break;
    case "two":
    default:
      graphs = (
        <SimpleGrid columns={1} margin="0 auto">
          <StyledLineGraph
            name="CWT" data={cwtData} color={cwtColor} yRange={50}
          />
          <StyledLineGraph
            name="Avg. Price" data={priceData} color={priceColor} yRange={0.25}
          />
        </SimpleGrid>
      )
  }

  return (
    <Flex width={{ base: "100%", xl: "5xl" }} id="innerGraphPanelFlex">
      {graphs}
    </Flex>
  )
};

export default GraphPanel;