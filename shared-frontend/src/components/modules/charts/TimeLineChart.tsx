import CustomCharts from "../common/CustomCharts";

export default function TimeLineChart() {
  return (
    <CustomCharts
      height={350}
      width={"100%"}
      options={{
        plotOptions: {
          bar: {
            borderRadius: 20,
            horizontal: true,
            distributed: false,
            dataLabels: {
              hideOverflowingLabels: false,
            },
          },
        },
        markers: {
          shape: "circle",
          radius: 10,
        },
        chart: {
          id: "J2w-Chart",
          width: 380,
          type: "rangeBar",
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,

          style: {
            colors: ["#f3f4f5", "#fff"],
          },
        },

        xaxis: {
          type: "datetime",
          position: "top",
          min: 1685062840000,
          max: 1685120440000,
          // categories: ["Label 1", "Label 2", "Label 3", "Label 4"],
        },
        yaxis: {
          show: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      }}
      responsive={[
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
          },
        },
      ]}
      type="rangeBar"
      series={[
        {
          data: [
            {
              x: "Provide medicine to residents",
              y: [
                1685062840000, // start time of the period (in ms)
                1685084440000, // end of the period (in ms)
                // new Date("2019-02-27").getTime(),
                // new Date("2019-03-04").getTime(),
              ],
              fillColor: "#014A62",
            },
            {
              x: "Routine vitals check",
              y: [
                1685077240000, 1685095240000,
                // new Date("2019-03-04").getTime(),
                // new Date("2019-03-08").getTime(),
              ],
              fillColor: "#FF9F69",
            },
            {
              x: "Breakfast break",
              y: [
                1685088040000, 1685098840000,
                // new Date("2019-03-07").getTime(),
                // new Date("2019-03-10").getTime(),
              ],
              fillColor: "#70B570",
            },
            {
              x: "Doctor visit",
              y: [
                1685098840000, 1685113240000,
                // new Date("2019-03-08").getTime(),
                // new Date("2019-03-12").getTime(),
              ],
              fillColor: "#6993FF",
            },
            {
              x: "Movie time",
              y: [
                1685106040000, 1685120440000,
                // new Date("2019-03-12").getTime(),
                // new Date("2019-03-17").getTime(),
              ],
              fillColor: "#C78157",
            },
          ],
        },
      ]}
    />
  );
}
