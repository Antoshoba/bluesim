import { Box, Grid } from "@mui/material";
import AdminHeader from "./AdminHeader";
import Alerts from "./Alerts";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import CardComponent from "./CardComponent";
import MyChart from "./LineChart";
import SemiCircleChart from "./SemiCircleChart";
import Heart from "./assets/Vector.png";
import Vector1 from "./assets/Vector1.png";
import Vector2 from "./assets/Vector3.png";
import Vector3 from "./assets/Vector4.png";

export default function DashbordPages() {
  return (
    <Box
      width="100%"
      maxWidth={1200}
      padding={4}
      sx={{
        fontFamily: "Gilroy",
        backgroundColor: "#F5F5F5",
        boxSizing: "border-box",
      }}
    >
      <AdminHeader />
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "center", md: "left" }}
      >
        <Grid item xs={12} sm={3}>
          <CardComponent
            label="Total nurses"
            count={720}
            icon={Heart}
            background="#FFEFF6"
            borderColor="#FFE0EE"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardComponent
            label="Beds occupied"
            count={250}
            icon={Vector1}
            background="#FFF1E8"
            borderColor="#FFDDC7"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardComponent
            label="Routine checks"
            count={87}
            icon={Vector2}
            background="#EEFBFF"
            borderColor="#D7F3FF"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardComponent
            label="Alerts received"
            count={30}
            icon={Vector3}
            background="#FFEDED"
            borderColor="#FFD5D5"
          />
        </Grid>
      </Grid>
      <Grid container marginY={1} spacing={4}>
        <Grid item xs={12} md={6}>
          <SemiCircleChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <Alerts />
        </Grid>
      </Grid>
      <Grid container marginY={1} spacing={4}>
        <Grid item xs={12} sm={6} md={7}>
          <MyChart />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid container marginY={1} spacing={4}>
        <Grid item xs={6}>
          <BubbleChart />
        </Grid>
      </Grid>
    </Box>
  );
}
