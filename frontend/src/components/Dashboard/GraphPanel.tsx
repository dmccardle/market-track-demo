import { Container } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const GraphPanel = () => {
  const cwtData: number[] = [1500, 1450, 1600, 1650, 1675];
  const cwtColor: string = "#123456";
  const priceData: number[] = [22, 22, 22.50, 22.50, 23];
  const priceColor: string = "#654321";

  const series: ApexAxisChartSeries = [
    {
      name: "cwt",
      data: cwtData,
      color: cwtColor
    },
    {
      name: "avg.price",
      data: priceData,
      color: priceColor
    }
  ];

  const options: ApexOptions = {
    chart: {
      id: "line"
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
            colors: cwtColor
          }
        },
        title: {
          text: "CWT",
          rotate: 360,
          style: {
            color: cwtColor,
          },
          offsetX: -10,
        },
        // TODO: make range configurable
        max: (Math.ceil(Math.max(...cwtData) + 50)),
        min: (Math.floor(Math.min(...cwtData) - 50))
      },
      {
        opposite: true,
        labels: {
          style: {
            colors: priceColor
          }
        },
        title: {
          text: "Avg. Price",
          rotate: 360,
          style: {
            color: priceColor
          },
          offsetX: 20,
        },
        max: (Math.ceil(Math.max(...priceData) + 0.25)),
        min: (Math.floor(Math.min(...priceData) - 0.25))
      }
    ],
  };

  return (
    <Container width={{ base: "100%", xl: "5xl" }}>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
      />
    </Container>
  )
};

export default GraphPanel;