import React from 'react';
import { Container, Typography, Stack, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Chart from 'react-apexcharts';
import LoaderAnimation from './utils/LoaderAnimation2';
import SnackBar from './utils/SnackBar';

const ImageParams = ({ data }) => {
    const [loading, setLoading] = React.useState(true);
    const [imageData, setImageData] = React.useState({});

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
        setImageData(data);
    };

    const options = {
        barChart: {
            chart: {
                type: 'bar'
            },
            xaxis: {
                categories: ['Mean Intensity', 'Min Intensity', 'Max Intensity', 'Std Intensity']
            }
        },
        centroidScatterPlot: {
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
        },
        pieChart: {
            chart: {
                type: 'pie'
            },
            labels: ['Foreground Pixels', 'Background Pixels']
        }
    };

    const series = {
        barChart: [
            {
                name: 'Intensity Metrics',
                data: [
                    imageData.mean_intensity,
                    imageData.min_intensity,
                    imageData.max_intensity,
                    imageData.std_intensity
                ]
            }
        ],
        centroidScatterPlot: [
            {
                name: 'Centroid',
                data: [
                    {
                        x: imageData.centroid[0],
                        y: imageData.centroid[1]
                    }
                ]
            }
        ],
        pieChart: [
            imageData.class_distribution.foreground_pixels,
            imageData.class_distribution.background_pixels
        ]
    };

    return (
        <>
            {loading ? (
                <main className='d-flex' style={{
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <LoaderAnimation />
                    <SnackBar />
                </main>
            ) : (
                <Container>
                    {/* Table displaying image parameters */}
                    <Typography variant='h4' color='secondary' sx={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}>
                        Image Parameters
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
                                    <TableCell>{imageData.area}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Centroid</TableCell>
                                    <TableCell>{`(${imageData.centroid[0]}, ${imageData.centroid[1]})`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Perimeter</TableCell>
                                    <TableCell>{imageData.perimeter}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Circularity</TableCell>
                                    <TableCell>{imageData.circularity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Mean Intensity</TableCell>
                                    <TableCell>{imageData.mean_intensity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Standard Deviation</TableCell>
                                    <TableCell>{imageData.std_intensity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Min Intensity</TableCell>
                                    <TableCell>{imageData.min_intensity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Max Intensity</TableCell>
                                    <TableCell>{imageData.max_intensity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bounding Box</TableCell>
                                    <TableCell>{`(${imageData.bounding_box.join(', ')})`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Width</TableCell>
                                    <TableCell>{imageData.width}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Height</TableCell>
                                    <TableCell>{imageData.height}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Aspect Ratio</TableCell>
                                    <TableCell>{imageData.aspect_ratio}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Orientation</TableCell>
                                    <TableCell>{imageData.orientation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Edge Metrics</TableCell>
                                    <TableCell>
                                        <Typography>Num Edges: {imageData.edge_metrics.num_edges}</Typography>
                                        <Typography>Edge Density: {imageData.edge_metrics.edge_density}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Texture Metrics</TableCell>
                                    <TableCell>
                                        <Typography>Solidity: {imageData.texture_metrics.solidity}</Typography>
                                        <Typography>Eccentricity: {imageData.texture_metrics.eccentricity}</Typography>
                                        <Typography>Major Axis Length: {imageData.texture_metrics.major_axis_length}</Typography>
                                        <Typography>Minor Axis Length: {imageData.texture_metrics.minor_axis_length}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Distance Metrics</TableCell>
                                    <TableCell>
                                        <Typography>Mean Distance: {imageData.distance_metrics.mean_distance}</Typography>
                                        <Typography>Max Distance: {imageData.distance_metrics.max_distance}</Typography>
                                        <Typography>Min Distance: {imageData.distance_metrics.min_distance}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Class Distribution</TableCell>
                                    <TableCell>
                                        <Typography>Foreground Pixels: {imageData.class_distribution.foreground_pixels}</Typography>
                                        <Typography>Background Pixels: {imageData.class_distribution.background_pixels}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Overlap Metrics</TableCell>
                                    <TableCell>
                                        <Typography>Dice Coefficient: {imageData.overlap_metrics.dice_coefficient}</Typography>
                                        <Typography>Jaccard Index: {imageData.overlap_metrics.jaccard_index}</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Bar chart for intensity metrics */}
                    <Typography variant='h6' color='secondary' sx={{ marginTop: '20px' }}>
                        Intensity Metrics Bar Chart
                    </Typography>
                    <Chart
                        options={options.barChart}
                        series={series.barChart}
                        type='bar'
                        width={500}
                    />

                    {/* Scatter plot for centroid data */}
                    <Typography variant='h6' color='secondary' sx={{ marginTop: '20px' }}>
                        Centroid Scatter Plot
                    </Typography>
                    <Chart
                        options={options.centroidScatterPlot}
                        series={series.centroidScatterPlot}
                        type='scatter'
                        width={500}
                    />

                    {/* Pie chart for class distribution */}
                    <Typography variant='h6' color='secondary' sx={{ marginTop: '20px' }}>
                        Class Distribution Pie Chart
                    </Typography>
                    <Chart
                        options={options.pieChart}
                        series={series.pieChart}
                        type='pie'
                        width={500}
                    />
                </Container>
            )}
        </>
    );
};

export default ImageParams;
