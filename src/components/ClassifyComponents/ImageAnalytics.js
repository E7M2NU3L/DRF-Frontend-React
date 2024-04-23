import React from 'react';
import Chart from 'react-apexcharts';
import { Container, Stack, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ImageAnalytics = ({ data }) => {
    // Extract backend data
    const { mean_test, variance_test, skewness_test, kurtosis_test, contrast_test,
            mean_std, variance_std, skewness_std, kurtosis_std, contrast_std } = data.image_analytics;

    // Chart configurations
    const chartOptions = {
        meanComparison: {
            options: {
                chart: {
                    type: 'bar'
                },
                xaxis: {
                    categories: ['Mean (Test Image)', 'Mean (Standard Image)']
                }
            },
            series: [
                {
                    name: 'Mean',
                    data: [mean_test, mean_std]
                }
            ]
        },
        varianceComparison: {
            options: {
                chart: {
                    type: 'bar'
                },
                xaxis: {
                    categories: ['Variance (Test Image)', 'Variance (Standard Image)']
                }
            },
            series: [
                {
                    name: 'Variance',
                    data: [variance_test, variance_std]
                }
            ]
        },
        distributionMetrics: {
            options: {
                chart: {
                    type: 'radar'
                },
                labels: ['Skewness (Test)', 'Kurtosis (Test)', 'Contrast (Test)',
                         'Skewness (Standard)', 'Kurtosis (Standard)', 'Contrast (Standard)']
            },
            series: [
                {
                    name: 'Test Image',
                    data: [skewness_test, kurtosis_test, contrast_test]
                },
                {
                    name: 'Standard Image',
                    data: [skewness_std, kurtosis_std, contrast_std]
                }
            ]
        }
    };

    // Return JSX for visualizations and table
    return (
        <div>
            <Typography variant='h4' color='secondary' style={{ textAlign: 'center', padding: '20px' }}>
                Image Analytics
            </Typography>
            
            <Container>
                {/* Mean Comparison */}
                <Stack direction='row' justifyContent='center'>
                    <div style={{ width: '50%' }}>
                        <Typography variant='h6' color='secondary'>Mean Comparison</Typography>
                        <Chart options={chartOptions.meanComparison.options}
                               series={chartOptions.meanComparison.series}
                               type='bar'
                               width='400' />
                    </div>
                </Stack>
                
                {/* Variance Comparison */}
                <Stack direction='row' justifyContent='center' style={{ marginTop: '20px' }}>
                    <div style={{ width: '50%' }}>
                        <Typography variant='h6' color='secondary'>Variance Comparison</Typography>
                        <Chart options={chartOptions.varianceComparison.options}
                               series={chartOptions.varianceComparison.series}
                               type='bar'
                               width='400' />
                    </div>
                </Stack>

                {/* Distribution Metrics */}
                <Stack direction='row' justifyContent='center' style={{ marginTop: '20px' }}>
                    <div style={{ width: '80%' }}>
                        <Typography variant='h6' color='secondary'>Distribution Metrics</Typography>
                        <Chart options={chartOptions.distributionMetrics.options}
                               series={chartOptions.distributionMetrics.series}
                               type='radar'
                               width='600' />
                    </div>
                </Stack>

                {/* Data Table */}
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Typography variant='h6' color='secondary' style={{ textAlign: 'center', padding: '10px' }}>
                        Data Summary
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Metric</TableCell>
                                <TableCell align='right'>Test Image</TableCell>
                                <TableCell align='right'>Standard Image</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Mean</TableCell>
                                <TableCell align='right'>{mean_test}</TableCell>
                                <TableCell align='right'>{mean_std}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Variance</TableCell>
                                <TableCell align='right'>{variance_test}</TableCell>
                                <TableCell align='right'>{variance_std}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Skewness</TableCell>
                                <TableCell align='right'>{skewness_test}</TableCell>
                                <TableCell align='right'>{skewness_std}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Kurtosis</TableCell>
                                <TableCell align='right'>{kurtosis_test}</TableCell>
                                <TableCell align='right'>{kurtosis_std}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Contrast</TableCell>
                                <TableCell align='right'>{contrast_test}</TableCell>
                                <TableCell align='right'>{contrast_std}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ImageAnalytics;
