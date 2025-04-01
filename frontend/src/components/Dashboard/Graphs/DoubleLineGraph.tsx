import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface DoubleLineGraphProps {
  name1: string;
  data1: number[],
  color1: string;
  yRange1?: number;
  name2: string;
  data2: number[],
  color2: string;
  yRange2?: number;
}

const DoubleLineGraph: React.FC<DoubleLineGraphProps> = ({ name1, data1, color1, yRange1 = 0, name2, data2, color2, yRange2 = 0 }) => {

  const series: ApexAxisChartSeries = [
    {
      name: name1,
      data: data1,
      color: color1
    },
    {
      name: name2,
      data: data2,
      color: color2
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
            colors: color1
          }
        },
        title: {
          text: "CWT",
          rotate: 360,
          style: {
            color: color1,
          },
          offsetX: -10,
        },
        // TODO: make range configurable
        max: (Math.ceil(Math.max(...data1) + yRange1)),
        min: (Math.floor(Math.min(...data1) - yRange1))
      },
      {
        opposite: true,
        labels: {
          style: {
            colors: color2
          }
        },
        title: {
          text: "Avg. Price",
          rotate: 360,
          style: {
            color: color2
          },
          offsetX: 20,
        },
        max: (Math.ceil(Math.max(...data2) + yRange2)),
        min: (Math.floor(Math.min(...data2) - yRange2))
      }
    ],
  };

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={series}
    />
  )
};

export default DoubleLineGraph;