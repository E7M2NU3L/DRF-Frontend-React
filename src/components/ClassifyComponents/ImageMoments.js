import React, { useState, useEffect } from 'react';
import LoaderAnimation from './utils/LoaderAnimation2';
import { Container, Stack, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

const ImageMoments = ({ data }) => {
    // Extract image_moments data from props
    const { image_moments } = data;

    // Initialize state for chart options and data
    const [chartOptions, setChartOptions] = useState({
        rawMoments: {
            options: {
                chart: {
                    type: 'bar'
                },
                xaxis: {
                    categories: [
                        'm00', 'm10', 'm01', 'm20', 'm11', 'm02', 'm30', 'm21', 'm12', 'm03'
                    ]
                }
            },
            series: [
                {
                    name: 'Raw Moments',
                    data: [
                        image_moments.m00,
                        image_moments.m10,
                        image_moments.m01,
                        image_moments.m20,
                        image_moments.m11,
                        image_moments.m02,
                        image_moments.m30,
                        image_moments.m21,
                        image_moments.m12,
                        image_moments.m03
                    ]
                }
            ]
        },
        centralMoments: {
            options: {
                chart: {
                    type: 'line'
                },
                xaxis: {
                    categories: ['mu20', 'mu11', 'mu02', 'mu30', 'mu21', 'mu12', 'mu03']
                }
            },
            series: [
                {
                    name: 'Central Moments',
                    data: [
                        image_moments.mu20,
                        image_moments.mu11,
                        image_moments.mu02,
                        image_moments.mu30,
                        image_moments.mu21,
                        image_moments.mu12,
                        image_moments.mu03
                    ]
                }
            ]
        },
        normalizedMoments: {
            options: {
                chart: {
                    type: 'scatter'
                },
                xaxis: {
                    categories: ['nu20', 'nu11', 'nu02', 'nu30', 'nu21', 'nu12', 'nu03']
                }
            },
            series: [
                {
                    name: 'Normalized Moments',
                    data: [
                        image_moments.nu20,
                        image_moments.nu11,
                        image_moments.nu02,
                        image_moments.nu30,
                        image_moments.nu21,
                        image_moments.nu12,
                        image_moments.nu03
                    ]
                }
            ]
        },
        heatmap: {
            options: {
                chart: {
                    type: 'heatmap'
                },
                xaxis: {
                    categories: [
                        'm00', 'm10', 'm01', 'm20', 'm11', 'm02', 'm30', 'm21', 'm12', 'm03',
                        'mu20', 'mu11', 'mu02', 'mu30', 'mu21', 'mu12', 'mu03',
                        'nu20', 'nu11', 'nu02', 'nu30', 'nu21', 'nu12', 'nu03'
                    ]
                }
            },
            series: [
                {
                    name: 'Moments',
                    data: [
                        [0, image_moments.m00], [1, image_moments.m10], [2, image_moments.m01],
                        [3, image_moments.m20], [4, image_moments.m11], [5, image_moments.m02],
                        [6, image_moments.m30], [7, image_moments.m21], [8, image_moments.m12],
                        [9, image_moments.m03], [10, image_moments.mu20], [11, image_moments.mu11],
                        [12, image_moments.mu02], [13, image_moments.mu30], [14, image_moments.mu21],
                        [15, image_moments.mu12], [16, image_moments.mu03], [17, image_moments.nu20],
                        [18, image_moments.nu11], [19, image_moments.nu02], [20, image_moments.nu30],
                        [21, image_moments.nu21], [22, image_moments.nu12], [23, image_moments.nu03]
                    ]
                }
            ]
        }
    });

    const [loading, setLoading] = useState(false);

    // Effect to update data and handle loading state
    useEffect(() => {
        try {
            UpdateData();
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(true);
        }
    }, []);

    const UpdateData = () => {
        // Set the data
        setChartOptions((prevOptions) => ({
            ...prevOptions,
        }));
    };

    // Render the component
    return (
        <div>
            {loading ? (
                <LoaderAnimation />
            ) : (
                <>
                    <Typography variant='h4' color='secondary' sx={{
                        textAlign: 'center',
                        padding: '20px'
                    }}>
                        Image Moments
                    </Typography>
                    <Container>
                        <Stack direction='row' rowGap={2}>
                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Raw Moments
                                </Typography>
                                <Chart
                                    options={chartOptions.rawMoments.options}
                                    series={chartOptions.rawMoments.series}
                                    type='bar'
                                    width='400'
                                />
                            </div>

                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Central Moments
                                </Typography>
                                <Chart
                                    options={chartOptions.centralMoments.options}
                                    series={chartOptions.centralMoments.series}
                                    type='line'
                                    width='400'
                                />
                            </div>

                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Normalized Moments
                                </Typography>
                                <Chart
                                    options={chartOptions.normalizedMoments.options}
                                    series={chartOptions.normalizedMoments.series}
                                    type='scatter'
                                    width='400'
                                />
                            </div>

                            <div className='d-flex' style={{
                                flexDirection: 'column',
                                gap: '8px 0',
                                margin: '0 auto'
                            }}>
                                <Typography variant='h6' color='secondary'>
                                    Heatmap
                                </Typography>
                                <Chart
                                    options={chartOptions.heatmap.options}
                                    series={chartOptions.heatmap.series}
                                    type='heatmap'
                                    width='400'
                                />
                            </div>
                        </Stack>
                    </Container>
                </>
            )}
        </div>
    );
};

export default ImageMoments;
