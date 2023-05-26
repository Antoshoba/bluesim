import { Box, Card, Stack, Typography } from "@mui/material";

import { Chart } from "chart.js";
import ReactApexChart from "react-apexcharts";

interface ChartDataCircule1 {
  series: any;
  color: any;
  label: any;
}

export default function cicule({ series, color, label }: ChartDataCircule1) {
  const chartOptions = {
    series: series,
    fill: {
      colors: color,
    },
    markers: {
      size: 2,
    },

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },

        dataLabels: {
          showOn: "always",
          style: {
            colors: ["#F44336", "#E91E63", "#9C27B0"],
          },
          name: {
            offsetY: -10,
            show: true,
            color: "#111",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            background: "red",
            fontSize: "20px",
            show: true,
          },
        },
        subtitle: {
          text: "HHUYHVOUVY",
        },
      },
    },

    // stroke: {
    //   lineCap: "round",
    // },
    labels: [label],
  };
  return (
    <Card sx={{ maxWidth: 275, padding: 3 }}>
      <Box
        borderBottom={"1px solid #EBEBEB"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography>Sleep score</Typography>
        <Typography color={"#00000080"}>1 hour ago</Typography>
      </Box>
      <Stack direction="row" spacing={3}>
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="radialBar"
          height={172}
        />
      </Stack>
    </Card>
  );
}
