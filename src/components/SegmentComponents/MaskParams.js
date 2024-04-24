import React from 'react';
import { Container, Typography, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Chart from 'react-apexcharts';
import LoaderAnimation from './utils/LoaderAnimation2';
import SnackBar from './utils/SnackBar';

const MaskParams = ({ data }) => {
    const [loading, setLoading] = React.useState(true);
    const [maskData, setMaskData] = React.useState({});

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
        setMaskData(data);
    };

    const scatterPlotOptions = {
        chart: {
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        xaxis: {
            title: {
                text: 'X Coordinate'
            }
        },
        yaxis: {
            title: {
                text: 'Y Coordinate'
            }
        }
    };

    const histogramOptions = {
        chart: {
            type: 'histogram'
        },
        plotOptions: {
            histogram: {
                columnWidth: '80%'
            }
        },
        xaxis: {
            title: {
                text: 'Circularity'
            }
        },
        yaxis: {
            title: {
                text: 'Frequency'
            }
        }
    };

    return (
        <>
            {loading ? (
                <main className='d-flex' style={{
                    flexDirection: "column",
                    minHeight: "100vh",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <LoaderAnimation />
                    <SnackBar />
                </main>
            ) : (
                <Container>
                    {/* Table displaying mask statistics */}
                    <Typography variant='h4' color='secondary' sx={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}>
                        Mask Statistical Data
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Parameter</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Area</TableCell>
                                    <TableCell>{maskData.area}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Centroid</TableCell>
                                    <TableCell>{`(${maskData.centroid[0]}, ${maskData.centroid[1]})`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Perimeter</TableCell>
                                    <TableCell>{maskData.perimeter}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Circularity</TableCell>
                                    <TableCell>{maskData.circularity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Number of Components</TableCell>
                                    <TableCell>{maskData.num_components}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Scatter plot for centroid data */}
                    <Typography variant='h6' color='secondary' sx={{ marginTop: '20px' }}>
                        Centroid Scatter Plot
                    </Typography>
                    <Chart
                        options={scatterPlotOptions}
                        series={[{
                            name: 'Centroid',
                            data: [
                                {
                                    x: maskData.centroid[0],
                                    y: maskData.centroid[1]
                                }
                            ]
                        }]}
                        type='scatter'
                        width={400}
                    />

                    {/* Histogram for circularity data */}
                    <Typography variant='h6' color='secondary' sx={{ marginTop: '20px' }}>
                        Circularity Histogram
                    </Typography>
                    <Chart
                        options={histogramOptions}
                        series={[{
                            name: 'Circularity',
                            data: [maskData.circularity]
                        }]}
                        type='histogram'
                        width={400}
                    />
                </Container>
            )}
        </>
    );
};

export default MaskParams;
