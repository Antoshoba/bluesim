import CustomCharts from "../common/CustomCharts";

export default function HeatmapChart() {
  return (
    <CustomCharts
      sx={{
        ".apexcharts-bar-area:hover": {},
      }}
      options={{
        xaxis: {
          tooltip: {
            enabled: false,
          },
        },
        legend: {
          horizontalAlign: "right",
          offsetY: -37,
          markers: {
            width: 8,
            height: 8,
            offsetY: -1,
          },
        },
        tooltip: {
          theme: "dark",
          onDatasetHover: {
            highlightDataSeries: false,
          },
        },

        plotOptions: {
          heatmap: {
            distributed: false,
            radius: 6,
            colorScale: {
              ranges: [
                {
                  from: -30,
                  to: 5,
                  color: "#FFDCC9",
                  name: "Low",
                },
                {
                  from: 6,
                  to: 20,
                  color: "#FF9F69",
                  name: "Normal",
                },
                {
                  from: 21,
                  to: 45,
                  color: "#CD652A",
                  name: "More",
                },
              ],
            },
          },
        },
        chart: {
          id: "J2w-Chart",
          height: 380,
          type: "heatmap",
          toolbar: {
            show: false,
          },
          selection: {
            enabled: true,
            type: "x",
            fill: {
              color: "#24292e",
              opacity: 0.1,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Alerts or nurses call over a week",
          style: {
            fontSize: "18px",
            fontWeight: 700,
            color: "#00171F",
          },
        },
        stroke: { width: 5 },
      }}
      responsive={[
        {
          breakpoint: 1000,

          options: {
            plotOptions: {
              heatmap: {
                // horizontal: true,
                legend: {
                  position: "top",
                  horizontalAlign: "center",
                  // offsetY: -37,
                  // markers: {
                  //   width: 18,
                  //   height: 18,
                  //   offsetY: -1,
                  // },
                },
              },
            },
          },
        },
      ]}
      type="heatmap"
      series={[
        {
          name: "4am",
          data: [
            {
              x: "Mon",
              y: 22,
            },
            {
              x: "Tue",
              y: 29,
            },
            {
              x: "Wed",
              y: 13,
            },
            {
              x: "Thu",
              y: 32,
            },
            {
              x: "Fri",
              y: 32,
            },
          ],
        },
        {
          name: "8am",
          data: [
            {
              x: "Mon",
              y: 43,
            },
            {
              x: "Tue",
              y: 43,
            },
            {
              x: "Wed",
              y: 43,
            },
            {
              x: "Thu",
              y: 43,
            },
            {
              x: "Fri",
              y: 32,
            },
          ],
        },
        {
          name: "12am",
          data: [
            {
              x: "Mon",
              y: 43,
            },
            {
              x: "Tue",
              y: 43,
            },
            {
              x: "Wed",
              y: 43,
            },
            {
              x: "Thu",
              y: 43,
            },
            {
              x: "Fri",
              y: 32,
            },
          ],
        },
        {
          name: "4pm",
          data: [
            {
              x: "Mon",
              y: 43,
            },
            {
              x: "Tue",
              y: 43,
            },
            {
              x: "Wed",
              y: 43,
            },
            {
              x: "Thu",
              y: 43,
            },
            {
              x: "Fri",
              y: 32,
            },
          ],
        },
        {
          name: "12pm",
          data: [
            {
              x: "Mon",
              y: 43,
            },
            {
              x: "Tue",
              y: 43,
            },
            {
              x: "Wed",
              y: 43,
            },
            {
              x: "Thu",
              y: 43,
            },
            {
              x: "Fri",
              y: 32,
            },
          ],
        },
      ]}
    />
  );
}
