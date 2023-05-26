import { Box, Card, Typography } from "@mui/material";

import ReactApexChart from "react-apexcharts";

interface ChartProps {
  color: any;
}
export default function HeartRateChart({ color }: ChartProps) {
  const chartOptions = {
    chart: {
      stacked: false,
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      size: 4,
      hover: {
        size: 10,
        sizeOffset: 2,
      },
    },
  };

  const chartSeries = [
    {
      name: "Heart Rate",
      data: [31, 43, 56, 317, 78],
      color: color,
    },
  ];
  return (
    <Card sx={{ maxWidth: 275, padding: 3 }}>
      <Box
        height={"auto"}
        mb={2}
        borderBottom={"1px solid #EBEBEB"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography>Hear rate</Typography>
        <Typography color={"#00000080"}>1 hour ago</Typography>
      </Box>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        width={"250px"}
        height={120}
      />
    </Card>
  );
}
