import CustomCharts from "../common/CustomCharts";

export default function ProgressChart() {
  return (
    <CustomCharts
      height={250}
      options={{
        plotOptions: {
          radialBar: {
            offsetX: -80,
            inverseOrder: false,
            dataLabels: {
              total: {
                show: false,
                label: "TOTAL",
              },
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
            hollow: {
              // margin: 15,
              size: "70%",
              image: "https://picsum.photos/50/50",
              imageWidth: 94,
              imageHeight: 94,
              imageClipped: false,
            },
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
        chart: {
          id: "J2w-Chart",
          // width: 380,s
          type: "radialBar",
        },
        // title: {
        //   text: "Your Progress",
        // },
        stroke: {
          lineCap: "round",
        },

        colors: ["#FFC09C", "#07789D"],
        labels: ["Routine completion", "Alerts closed"],
        legend: {
          show: true,
          floating: true,
          fontSize: "12px",
          position: "right",
          // offsetX: 257,
          offsetY: 55,
          // labels: {
          //   useSeriesColors: true,
          // },
          markers: {
            width: 4,
            height: 32,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 6,
            customHTML: undefined,
            onClick: undefined,
            offsetX: -10,
            offsetY: 18,
          },
        },

        // fill: {
        //   colors: ["#BD2B38", "#BD2B38"],
        // },
        // responsive: [
        //   {
        //     breakpoint: 1300,

        //     options: {
        //       plotOptions: {
        //         area: {
        //           horizontal: true,
        //         },
        //       },
        //     },
        //   },
        // ],
      }}
      responsive={[
        {
          breakpoint: 375,
          options: {
            plotOptions: {
              radialBar: {
                horizontal: false,
              },
            },
          },
        },
      ]}
      type="radialBar"
      series={[70, 50]}
    />
  );
}
