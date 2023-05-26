import Chart, { Props } from "react-apexcharts";

export default function CustomCharts(props: Props) {
  return (
    // <Box m={2} p={2} width={"100%"}>
    <Chart
      height={350}
      sx={{ ".apexcharts-toolbar": { display: "none !important" } }}
      {...props}
    />
    // </Box>
  );
}
