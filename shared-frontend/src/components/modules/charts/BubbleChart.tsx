import CustomCharts from "../common/CustomCharts";

export default function BubbleChart() {
  return (
    <CustomCharts
      height={300}
      options={{
        grid: {
          show: false,
        },
        legend: {
          offsetY: -37,
          position: "top",
          horizontalAlign: "right",
          markers: {
            width: 8,
            height: 8,
          },
        },

        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
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
          },
        },
        chart: {
          id: "J2w-Chart",
          height: 50,
          type: "bubble",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: "dark",
        },
        title: {
          text: "Alerts Over the Wards in a week",
          style: {
            fontSize: "18px",
            fontWeight: 700,
            color: "#00171F",
          },
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#07789D", "#FFC09C"],
        labels: ["Routine completion", "Alerts closed"],
      }}
      type="bubble"
      series={[
        {
          name: "Normal",
          data: [[new Date().getTime(), 0, 0]],
        },
        {
          name: "High",
          data: [[new Date().getTime(), 0, 0]],
        },
      ]}
    />
  );
}
