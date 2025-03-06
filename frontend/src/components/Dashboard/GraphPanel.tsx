import { Container } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

const GraphPanel = () => {
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];

  return (
    <Container>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
      />
    </Container>
  )
};

export default GraphPanel;