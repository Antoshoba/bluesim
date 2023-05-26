import Chart from 'react-apexcharts';

export default function BubbleChart() {
    const chartOptions = {
        grid: {
            show: false,
        },
        legend: {
            //     offsetY: -37,
            //    position: "top",
            //     // horizontalAlign: "right",
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
            //id: "J2w-Chart",
            //height: 50,
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
            //theme: "dark",
        },
        title: {
            text: "Alerts Over the Wards in a week",
            style: {
                fontSize: "18px",
                fontWeight: 700,
                color: "#00171F",
            },
        },
        // stroke: {
        //     lineCap: "round",
        // },
        colors: ["#FFC09C", "#07789D"],
        labels: ["Routine completion", "Alerts closed"],
    }

    const chartSeries = [
        {
            name: "Normal",
            data: [[new Date().getTime(), 43, 28], [new Date().getTime(), 55, 8], [new Date().getTime(), 23, 18]],
        },
        {
            name: "High",
            data: [[new Date().getTime(), 10, 28]],
        },
        {
            name: "Critical",
            data: [[new Date().getTime(), 43, 28]],
        },

    ]

    return (
        <div>
            <Chart options={chartOptions} series={chartSeries} type="bubble" height={300} />
        </div>
    )
}
