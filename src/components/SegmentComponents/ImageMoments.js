import React from 'react';
import { Container, Stack, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Chart from 'react-apexcharts';
import LoaderAnimation from './utils/LoaderAnimation2';

const ImageMoments = ({ data }) => {

    const [loading, setLoading] = React.useState(true);
    const [momentsData, setMomentsData] = React.useState({});

    React.useEffect(() => {
        try {
            updateData();
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(true);
        }
    }, [data]);

    const updateData = () => {
        setMomentsData(data);
    };

    const options = {
        barChart: {
            chart: {
                type: 'bar'
            },
            xaxis: {
                categories: ['Mean', 'Variance', 'Skewness', 'Kurtosis', 'Contrast']
            }
        },
        correlationScatterPlot: {
            chart: {
                type: 'scatter',
                zoom: {
                    enabled: true,
                    type: 'xy'
                }
            },
            xaxis: {
                title: {
                    text: 'Test Metrics'
                }
            },
            yaxis: {
                title: {
                    text: 'Standard Metrics'
                }
            }
        },
        heatmap: {
            chart: {
                type: 'heatmap'
            },
            dataLabels: {
                enabled: false
            }
        }
    };

    const series = {
        barChart: [
            {
                name: 'Test Data',
                data: [
                    momentsData.test_mean,
                    momentsData.test_variance,
                    momentsData.test_skewness,
                    momentsData.test_kurtosis,
                    momentsData.test_contrast
                ]
            },
            {
                name: 'Standard Data',
                data: [
                    momentsData.std_mean,
                    momentsData.std_variance,
                    momentsData.std_skewness,
                    momentsData.std_kurtosis,
                    momentsData.std_contrast
                ]
            }
        ],
        correlationScatterPlot: [
            {
                name: 'Correlation',
                data: [
                    { x: momentsData.test_mean, y: momentsData.std_mean },
                    { x: momentsData.test_variance, y: momentsData.std_variance },
                    { x: momentsData.test_skewness, y: momentsData.std_skewness },
                    { x: momentsData.test_kurtosis, y: momentsData.std_kurtosis },
                    { x: momentsData.test_contrast, y: momentsData.std_contrast }
                ]
            }
        ],
        heatmap: [
            {
                data: [
                    { x: 'Mean', y: 'Test', value: momentsData.test_mean },
                    { x: 'Mean', y: 'Standard', value: momentsData.std_mean },
                    { x: 'Variance', y: 'Test', value: momentsData.test_variance },
                    { x: 'Variance', y: 'Standard', value: momentsData.std_variance },
                    { x: 'Skewness', y: 'Test', value: momentsData.test_skewness },
                    { x: 'Skewness', y: 'Standard', value: momentsData.std_skewness },
                    { x: 'Kurtosis', y: 'Test', value: momentsData.test_kurtosis },
                    { x: 'Kurtosis', y: 'Standard', value: momentsData.std_kurtosis },
                    { x: 'Contrast', y: 'Test', value: momentsData.test_contrast },
                    { x: 'Contrast', y: 'Standard', value: momentsData.std_contrast }
                ]
            }
        ]
    };

    return (
        <div>
            {loading ? (
                <React.Fragment>
                    <LoaderAnimation />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* Display Image Moments title */}
                    <Typography variant='h4' color='secondary' sx={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}>
                        Image Moments
                    </Typography>

                    {/* Container for different visualizations */}
                    <Container>
                        <Stack direction='row' rowGap={2}>
                            {/* Table displaying image moments data */}
                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Image Moments Statistics
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Metric</TableCell>
                                                <TableCell>Test Data</TableCell>
                                                <TableCell>Standard Data</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Mean</TableCell>
                                                <TableCell>{momentsData.test_mean}</TableCell>
                                                <TableCell>{momentsData.std_mean}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Variance</TableCell>
                                                <TableCell>{momentsData.test_variance}</TableCell>
                                                <TableCell>{momentsData.std_variance}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Skewness</TableCell>
                                                <TableCell>{momentsData.test_skewness}</TableCell>
                                                <TableCell>{momentsData.std_skewness}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Kurtosis</TableCell>
                                                <TableCell>{momentsData.test_kurtosis}</TableCell>
                                                <TableCell>{momentsData.std_kurtosis}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Contrast</TableCell>
                                                <TableCell>{momentsData.test_contrast}</TableCell>
                                                <TableCell>{momentsData.std_contrast}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                            {/* Bar chart to visualize mean, variance, skewness, kurtosis, and contrast */}
                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Image Moments Bar Chart
                                </Typography>
                                <Chart
                                    options={options.barChart}
                                    series={series.barChart}
                                    type='bar'
                                    width='400'
                                />
                            </div>

                            {/* Scatter plot to visualize correlation between test and standard data */}
                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Image Moments Correlation Scatter Plot
                                </Typography>
                                <Chart
                                    options={options.correlationScatterPlot}
                                    series={series.correlationScatterPlot}
                                    type='scatter'
                                    width='400'
                                />
                            </div>

                            {/* Heatmap to visualize the distribution of different metrics */}
                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Image Moments Heatmap
                                </Typography>
                                <Chart
                                    options={options.heatmap}
                                    series={series.heatmap}
                                    type='heatmap'
                                    width='400'
                                />
                            </div>
                        </Stack>
                    </Container>
                </React.Fragment>
            )}
        </div>
    );
};

export default ImageMoments;
