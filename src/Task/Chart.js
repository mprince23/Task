import React from 'react';
import { Bar, Line, Pie, PolarArea, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, Filler, PointElement, ArcElement, PolarAreaController, RadialLinearScale } from 'chart.js';
import { Box, Container, Grid } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, PolarAreaController, RadialLinearScale, Title, Tooltip, Legend, Filler);

const Chart = () => {
    
    // Bar Chart

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Bar Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
        ],
    };

    const baroptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // Line Chart

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Line Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.1,
            },
        ],
    };

    const lineoptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // Pie chart

    const pieData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Pie Chart',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart',
            },
        },
    };

    // Polar Area chart

    const polarData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Polar Area Chart',
                data: [10, 15, 9, 6, 14, 17],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const polarOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Polar Area Chart',
            },
        },
    };


    // Scatter Chart

    const scatterData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: [
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 2 },
                    { x: 5, y: 8 },
                    { x: 6, y: 4 },
                    { x: 7, y: 7 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 5,
            },
        ],
    };

    const scatteroptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis Title',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis Title',
                },
            },
        },
    };

    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Box sx={{ padding: '10px', height: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                            <Bar data={barData} options={baroptions} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ padding: '10px', height: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                            <Line data={lineData} options={lineoptions} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ padding: '10px', height: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', display: "flex", justifyContent: "center" }}>
                            <Pie data={pieData} options={pieOptions} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ padding: '10px', height: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', display: "flex", justifyContent: "center" }}>
                            <PolarArea data={polarData} options={polarOptions} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ padding: '10px', height: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', display: "flex", justifyContent: "center" }}>
                            <Scatter data={scatterData} options={scatteroptions} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Chart;
