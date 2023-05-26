import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';


export default function SemiCircleChart() {

    const chartOptions = {
        dataLabels: {
            enabled: false,

        },

        colors: ['#014A62', '#FFB27A', '#EC5252'],


        legend: {
            show: true,
            markers: {
                width: 5,
                height: 38,
                offsetX: -5,
                //offsetY: 20,

            },

        },

        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: -10,
                donut: {
                    size: "92%",
                    borderRadius: "10px",
                    labels: {
                        show: true,
                        value: {
                            fontSize: '26px',
                        },
                        name: {
                            fontSize: '22px',
                        },
                        total: {
                            show: true,
                            fontSize: '16px',

                            formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
                                return w.globals.seriesTotals.reduce((a: any, b: any) => {
                                    return a + b;
                                }, 0);
                            },
                            label: 'Overall residents',
                            color: "rgba(0, 23, 31, 0.6)",
                        },
                    },
                },
            },
        },
        series: [500, 250, 750], // Enter your series data here
        labels: ['Critical residents', 'Normal residents', 'General residents',], // Enter your labels here
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

    return (
        <Box sx={{ border: "1px solid #E4E4E4", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff", height: "280px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={1.5}>
                <Typography variant="h6" fontWeight={600}>Residents</Typography>
                <Link color="#BB9F5B">View all</Link>
            </Stack>
            <Divider />
            <Chart options={chartOptions} series={chartOptions.series} type="donut" width={900} height={550} style={{ marginTop: "40px" }} />
        </Box>
    );
};

