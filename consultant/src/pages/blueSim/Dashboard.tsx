import BubbleChart from "@j2w/shared-frontend/components/modules/charts/BubbleChart";
import HeatmapChart from "@j2w/shared-frontend/components/modules/charts/HeatmapChart";
import ProgressChart from "@j2w/shared-frontend/components/modules/charts/ProgressChart";
import TimeLineChart from "@j2w/shared-frontend/components/modules/charts/TimeLineChart";
import StartIconButon from "@j2w/shared-frontend/components/modules/common/StartIconButton";
import StaticDatePickerLandscape from "@j2w/shared-frontend/components/modules/common/StaticDatePickerLandscape";
import { Card, Divider, Grid, Stack, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Grid container xs={12} mb={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              height: "auto",
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              padding: "16px 26px 1s6px 26px",
              p: 2,
              mr: { xs: 0, sm: 3 },
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent={"space-between"}
              ml={2}
              mr={2}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", color: "#00171F" }}
              >
                Upcoming activity
              </Typography>
              <StartIconButon label={"Add new"} />
            </Stack>
            <Divider
              sx={{ border: "1px solid #EBEBEB", mb: 4, ml: 2, mr: 2 }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              // justifyContent={"center"}
            >
              {/* <Grid item xs={12} md={3}>
                // <Stack> */}
              <StaticDatePickerLandscape />
              {/* </Stack> */}
              {/* {/* </Grid> */}
              <Grid item xs={12} md={8}>
                <TimeLineChart />
              </Grid>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12} md={7} mb={2}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              // minWidth: "625px",
              minHeight: "344px",
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              padding: "16px 26px 16px 16px",
            }}
          >
            {/* <Stack direction="row" spacing={2} justifyContent={"space-between"}> */}
            {/* <Typography variant="h6">
              Alerts or nurses call over a week
            </Typography> */}
            {/* <StartIconButon label={"Add new"} /> */}
            {/* </Stack> */}
            {/* <Divider sx={{ border: "1px solid #EBEBEB", mb: 4 }} /> */}
            <HeatmapChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={5} mb={2}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              minWidth: { xs: 0, md: "455px" },
              // minHeight: "344px",
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              paddingBottom: "120px",
              marginRight: { xs: 0, md: 3 },
              marginLeft: { xs: 0, md: 2 },
              paddingLeft: { xs: 0, md: 2 },
              paddingRight: { xs: 0, md: 2 },
            }}
          >
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
              <Typography variant="h6" mt={1} mb={1} ml={1}>
                Your Progress
              </Typography>
            </Stack>
            <Divider sx={{ border: "1px solid #EBEBEB" }} />
            <ProgressChart />
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12} md={5} mb={2}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              // minWidth: "625px",
              minHeight: "344px",
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              padding: "16px 26px 16px 16px",
            }}
          ></Card>
        </Grid>
        <Grid item xs={12} md={7} mb={2}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              minWidth: { xs: 0, md: "455px" },
              // minHeight: "344px",
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              // paddingBottom: "20px",
              marginRight: { xs: 0, md: 3 },
              marginLeft: { xs: 0, md: 2 },
              paddingLeft: { xs: 0, md: 2 },
              paddingRight: { xs: 0, md: 2 },
            }}
          >
            <BubbleChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
