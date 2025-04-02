import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const formatCwtData = (cwtData: number[]): string[] => {
  return cwtData.map((data) => data.toLocaleString());
};

const formatPriceData = (priceData: number[]): string[] => {
  return priceData.map((data) => (new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" })).format(data))
}

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
  // const dateRange = [
  //   new Date("2025-03-05").getTime(),
  //   new Date("2025-03-12").getTime(),
  //   new Date("2025-03-19").getTime(),
  //   new Date("2025-03-26").getTime(),
  //   new Date("2025-04-02").getTime(),
  // ]

  // const cwtSeriesData2 = data1.map((data, index) => {
  //   return { x: dateRange.at(index), y: data }
  // })

  const cwtSeriesData = [
    {
      x: new Date("2025-03-05").getTime(),
      y: 1500
    },
    {
      x: new Date("2025-03-12").getTime(),
      y: 1450
    },
    {
      x: new Date("2025-03-19").getTime(),
      y: 1600
    },
    {
      x: new Date("2025-03-26").getTime(),
      y: 1650
    },
    {
      x: new Date("2025-04-02").getTime(),
      y: 1675
    },
  ];
  const cwtSeries: ApexAxisChartSeries = [
    {
      name: name1,
      data: [
        ...cwtSeriesData
      ]
    }
  ];

  const priceSeriesData = [
    {
      x: new Date("2025-03-05").getTime(),
      y: 22
    },
    {
      x: new Date("2025-03-12").getTime(),
      y: 22
    },
    {
      x: new Date("2025-03-19").getTime(),
      y: 22.5
    },
    {
      x: new Date("2025-03-26").getTime(),
      y: 22.5
    },
    {
      x: new Date("2025-04-02").getTime(),
      y: 23
    },
  ];
  const priceSeries: ApexAxisChartSeries = [
    {
      name: name2,
      data: [
        ...priceSeriesData
      ]
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