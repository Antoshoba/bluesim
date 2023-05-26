import { Grid, Stack } from "@mui/material";

import CirculeChart from "./CirculeChart/CirculeChart";
import HeartRateChart from "./HeartRateChart/HeartrateChart";

export default function TotalChart() {
  const series = [49];
  const series1 = [85];

  return (
    <Stack m={2} direction={"row"} spacing={2}>
      <Grid spacing={3} container>
        <Grid item xs>
          <HeartRateChart color={"#FF4747"} />
        </Grid>
        <Grid item xs>
          <CirculeChart
            series={series}
            color={"#FFC7A7"}
            label={"not so good"}
          />
        </Grid>
        <Grid item xs>
          <HeartRateChart color={"#9988FF"} />
        </Grid>
        <Grid item xs>
          <CirculeChart series={series1} color={"#49C89A"} label={"normal"} />
        </Grid>
      </Grid>
    </Stack>
  );
}
