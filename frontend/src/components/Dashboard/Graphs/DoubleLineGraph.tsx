import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const formatCwtData = (cwtData: number): string => {
  return cwtData.toLocaleString();
};

const formatPriceData = (priceData: number): string => {
  return (new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" })).format(priceData);
}

interface DoubleLineGraphProps {
  name1: string;
  data1: number[],
  color1: string;
  name2: string;
  data2: number[],
  color2: string;
}

const DoubleLineGraph: React.FC<DoubleLineGraphProps> = ({ name1, data1, color1, name2, data2, color2 }) => {
  // TODO: make this figure out if it is a cwt or price data to format
  const formatDataLabel = (dataPoint: number): string => {
    const inData1 = data1.includes(dataPoint);
    const inData2 = data2.includes(dataPoint);
    if (inData1 && !inData2) {
      return formatCwtData(dataPoint);
    } else if (inData2 && !inData1) {
      return formatPriceData(dataPoint);
    } else {
      return "";
    }
  }
  
  const dateRange = [
    new Date("2025-01-31").getTime(),
    new Date("2025-02-06").getTime(),
    new Date("2025-02-13").getTime(),
    new Date("2025-02-20").getTime(),
    new Date("2025-02-27").getTime(),
    new Date("2025-03-05").getTime(),
    new Date("2025-03-12").getTime(),
    new Date("2025-03-19").getTime(),
    new Date("2025-03-26").getTime(),
    new Date("2025-04-02").getTime(),
  ];

  const cwtSeries: ApexAxisChartSeries = [
    {
      name: name1,
      data: data1.map((data, index) => {
        return { x: dateRange.at(index), y: data }
      }),
      color: color1,
    }
  ];

  const priceSeries: ApexAxisChartSeries = [
    {
      name: name2,
      data: data2.map((data, index) => {
        return { x: dateRange.at(index), y: data }
      }),
      color: color2,
    }
  ];

  const options2: ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
      },
      events: {
        beforeZoom: (ctx) => {
          ctx.w.config.xaxis.range = undefined;
        }
      }
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      ...cwtSeries,
      ...priceSeries
    ],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontSize: "20em",
      fontWeight: 600,
      labels: {
        useSeriesColors: true,
      },
      itemMargin: {
        horizontal: 10,
      },
      markers: {
        size: 10,
        shape: "rect"
      },
    },
    xaxis: {
      type: "category",
      range: dateRange[dateRange.length - 1] - dateRange[dateRange.length - 5],
      labels: {
        formatter: (value) => {
          const options: Intl.DateTimeFormatOptions = {
            month: "long",
            day: "numeric",
          };

          return (new Date(value)).toLocaleString("en-CA", options);
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: formatDataLabel,
      textAnchor: "middle",
      style: {
        fontWeight: "bold",
      },
      background: {
        enabled: true,
        borderRadius: 4,
        padding: 6,
        borderColor: "#444"
      },
      dropShadow: {
        enabled: true,
        blur: 4,
        opacity: 0.45,
      }
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: color1,
          },
          formatter: formatCwtData
        },
        stepSize: 100,
        axisTicks: {
          show: true,
          width: 10,
        },
        axisBorder: {
          show: true,
        },
        // TODO: make range configurable
        max: Math.ceil(Math.max(...data1)/100)*100 + 100,
        min: Math.floor(Math.min(...data1)/100)*100 - 100,
      },
      {
        opposite: true,
        labels: {
          style: {
            colors: color2,
          },
          formatter: formatPriceData
        },
        axisTicks: {
          show: true,
          width: 10,
        },
        axisBorder: {
          show: true,
        },
        stepSize: 0.5,
        max: Math.ceil(Math.max(...data2)) + 1,
        min: Math.floor(Math.min(...data2)) - 2,
      }
    ],
    grid: {
      show: true,
      padding: {
        right: 60,
        left: 60,
      },
    }
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