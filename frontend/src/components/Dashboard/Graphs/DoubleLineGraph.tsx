import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

// const formatCwtData = (cwtData: number[]): string[] => {
//   return cwtData.map((data) => data.toLocaleString());
// };

// const formatPriceData = (priceData: number[]): string[] => {
//   return priceData.map((data) => (new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" })).format(data))
// }

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
  // TODO: make this figure out if it is a cwt or price data to format
  const formatDataLabel = (dataPoint: number): string => {
    const inData1 = data1.includes(dataPoint);
    const inData2 = data2.includes(dataPoint);
    if (inData1 && !inData2) {
      return dataPoint.toLocaleString();
    } else if (inData2 && !inData1) {
      return (new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" })).format(dataPoint)
    } else {
      return "";
    }
  }
  
  const dateRange = [
    new Date("2025-03-05").getTime(),
    new Date("2025-03-12").getTime(),
    new Date("2025-03-19").getTime(),
    new Date("2025-03-26").getTime(),
    new Date("2025-04-02").getTime(),
  ]

  const cwtSeries: ApexAxisChartSeries = [
    {
      name: name1,
      data: data1.map((data, index) => {
        return { x: dateRange.at(index), y: data }
      })
    }
  ];

  const priceSeries: ApexAxisChartSeries = [
    {
      name: name2,
      data: data2.map((data, index) => {
        return { x: dateRange.at(index), y: data }
      }),
    }
  ];

  const options2: ApexOptions = {
    chart: {
      id: "line"
    },
    stroke: {
      curve: "straight"
    },
    markers: {
      size: 8
    },
    series: [
      ...cwtSeries,
      ...priceSeries
    ],
    xaxis: {
      type: "datetime"
    },
    dataLabels: {
      enabled: true,
      formatter: formatDataLabel
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
  }
  

  return (
    <ReactApexChart
      type="line"
      options={options2}
      series={[ ...cwtSeries, ...priceSeries ]}
    />
  )
};

export default DoubleLineGraph;