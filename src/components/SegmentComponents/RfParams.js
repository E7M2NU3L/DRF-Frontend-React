import React from 'react';
import { Container, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Chart from 'react-apexcharts';
import LoaderAnimation from '../ClassifyComponents/LoaderAnimation';
import SnackBar from './utils/SnackBar';

const RfParams = ({ data }) => {
    const [loading, setLoading] = React.useState(true);
    const [featureImportance, setFeatureImportance] = React.useState([]);
    const [chartOptions, setChartOptions] = React.useState({
        chart: {
            id: 'feature-importance-chart',
            type: 'bar',
            toolbar: {
                show: true
            }
        },
        colors: ['#66DA26'],
        xaxis: {
            categories: [] // Will be populated with feature indices
        },
        plotOptions: {
            bar: {
                distributed: true,
            }
        }
    });
    const [chartSeries, setChartSeries] = React.useState([
        {
            name: 'Feature Importance',
            data: [] // Will be populated with feature importance data
        }
    ]);

    // Parse data and update state
    React.useEffect(() => {
        if (data && data.feature_importance) {
            const featureImportanceArray = data.feature_importance;
            
            // Populate chart options and series
            setChartOptions((prevOptions) => ({
                ...prevOptions,
                xaxis: {
                    categories: Array.from({ length: featureImportanceArray.length }, (_, index) => `Feature ${index + 1}`)
                }
            }));
            setChartSeries([
                {
                    name: 'Feature Importance',
                    data: featureImportanceArray
                }
            ]);

            // Update feature importance data
            setFeatureImportance(featureImportanceArray);
            setLoading(false);
        }
    }, [data]);

    return (
        <>
            {loading ? (
                <React.Fragment>
                    <main className='d-flex' style={{
                        flexDirection: "column",
                        minHeight: "100vh",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <LoaderAnimation />
                        <SnackBar />
                    </main>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Container>
                        <Typography variant='h4' color="secondary" sx={{
                            textAlign: "center",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px",
                            paddingRight: "20px"
                        }}>
                            Machine Learning Based Analysis
                        </Typography>

                        <Stack direction="row" spacing={3} justifyContent="center">
                            {/* Feature Importance Bar Chart */}
                            <div>
                                <Typography variant='h6' color="secondary" align="center">
                                    Feature Importances of RF Classifier
                                </Typography>
                                <Chart
                                    options={chartOptions}
                                    series={chartSeries}
                                    type="bar"
                                    width={400}
                                />
                            </div>
                            {/* Feature Importance Table */}
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Feature Index</TableCell>
                                            <TableCell>Importance</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {featureImportance.map((importance, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{`Feature ${index + 1}`}</TableCell>
                                                <TableCell>{importance.toFixed(4)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>

                    </Container>
                </React.Fragment>
            )}
        </>
    );
};

export default RfParams;
