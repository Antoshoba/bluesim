import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

export default function MyChart() {
    const chartOptions = {

        title: {
            text: "Alerts over time",
            style: {
                fontSize: '18px',
                fontWeight: 700,


            },
        },

        chart: {
            width: '500px',
            toolbar: {
                show: false,
            },

        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
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
            //theme: false,
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

        xaxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
        },
        stroke: {
            width: 2,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    const chartSeries = [
        // Define your series data here
        // For example:
        {
            name: 'Normal alert',
            data: [30, 40, 35, 50, 49, 60, 80],
            color: "#014A62",
            backgroundColor: "linear-gradient(174.33deg, #FFD9D9 -34.83%, rgba(255, 226, 226, 0) 95.48%)",
        },
        {
            name: 'High alert',
            data: [5, 30, 25, 34, 49, 50, 90],
            color: "#FFBF90",
        },
        {
            name: 'Critical alert',
            data: [0, 50, 65, 45, 30, 20],
            color: "#EC5252",
        },
    ];

    return (
        <Box sx={{ border: "1px solid #E4E4E4", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff", height: "325px" }}>
            <Chart options={chartOptions} series={chartSeries} type="line" height={300} />
        </Box>
    );
};