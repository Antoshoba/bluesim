import { Box } from '@mui/material';
import Chart from 'react-apexcharts';
//import "./App.css";



export default function BarChart() {
    const chartOptions = {
        chart: {
            width: '500px',
            toolbar: {
                show: false,
            },

        },
        title: {
            text: "Nurses attendence",
            style: {
                fontSize: '18px',
                fontWeight: 700,

            },
        },

        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            // theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined,
            },
            y: {
                formatter: undefined,
                // title: {
                //     formatter: (seriesName) => seriesName,
                // },
            },
            z: {
                formatter: undefined,
                title: 'Size: '
            },
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: true,
            //horizontalAlign: "right",
            offsetY: -37,
            markers: {
                width: 8,
                height: 8,
                offsetY: -1,
            },

        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
            min: 0, // Set the minimum value for the y-axis
            max: 100, // Set the maximum value for the y-axis
            tickAmount: 5,// Set the number of ticks or intervals on the y-axis
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: '16px',
            }
        },
        stroke: {
            colors: ["transparent"],
            width: 5
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                }
            },
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                }
            },
        ],
    };

    const chartSeries = [
        {
            name: 'Absent',
            data: [50, 30, 45, 60, 70, 85, 64],
            color: "#014A62",

        },
        {
            name: 'Present',
            data: [10, 20, 35, 50, 89, 90, 95],
            color: "#FFBF90",

        },
    ];

    return (
        <Box sx={{ border: "1px solid #E4E4E4", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff", height: "325px" }}>
            <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
        </Box>
    );
};

