import { Box, Container, Flex } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface StyledLineGraphProps {
  name: string;
  data: number[],
  color: string;
  yRange?: number;
}

const StyledLineGraph: React.FC<StyledLineGraphProps> = ({ name, data, color, yRange = 0 }) => {
  const series: ApexAxisChartSeries = [
    {
      name: name,
      data: data,
      color: color,
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "line",
      toolbar: {
        show: false,
      }
    },
    stroke: {
      curve: "straight"
    },
    markers: {
      size: 8
    },
    xaxis: {
      categories: ["February 26th", "March 5th", "March 12th", "March 19th", "March 26th"]
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: color
          }
        },
        title: {
          text: name,
          style: {
            color: color,
          },
        },
        // TODO: make range configurable
        max: (Math.ceil(Math.max(...data) + yRange)),
        min: (Math.floor(Math.min(...data) - yRange))
      },
    ],
  };

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={series}
      width="100%"
      height="100%"
    />
  )
};

export default StyledLineGraph;