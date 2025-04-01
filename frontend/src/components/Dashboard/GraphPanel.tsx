import React from "react";
import DoubleLineGraph from "./Graphs/DoubleLineGraph";

const GraphPanel: React.FC = () => {
  const cwtData: number[] = [1500, 1450, 1600, 1650, 1675];
  const cwtColor: string = "#123456";
  const priceData: number[] = [22, 22, 22.50, 22.50, 23];
  const priceColor: string = "#654321";

  return (
    <DoubleLineGraph
      name1="cwt" data1={cwtData} color1={cwtColor} yRange1={50}
      name2="avg.price" data2={priceData} color2={priceColor} yRange2={0.25}
    />
  )
};

export default GraphPanel;