import React, { useEffect, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import LoaderAnimation from './LoaderAnimation';

const RfParams = ({ data }) => {
    // Initialize state for chart options and data
    const [chartData, setChartData] = useState({
        categories: [],
        featureImportance: []
    });

    const [loading, setLoading] = useState(true);

    // Function to update data
    const updateData = () => {
        // Parse the feature_importance data from JSON string
        const featureImportance = JSON.parse(data.random_forest_analytics.feature_importance);

        // Generate categories (feature indices) based on feature_importance length
        const categories = Array.from({ length: featureImportance.length }, (_, index) => `Feature ${index + 1}`);

        // Update chart data state
        setChartData({
            categories,
            featureImportance
        });

        setLoading(false);
    };

    // Use effect to update data on component mount
    useEffect(() => {
        try {
            updateData();
        } catch (err) {
            console.log(err);
            setLoading(true);
        }
    }, []);

    // Render the component
    return (
        <>
            {loading ? (
                <LoaderAnimation />
            ) : (
                <React.Fragment>
                    <Container>
                        <Typography
                            variant="h4"
                            color="secondary"
                            sx={{
                                textAlign: 'center',
                                padding: '20px'
                            }}
                        >
                            Machine Learning Based Analysis
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {/* Bar Chart: Feature Importances */}
                            <div
                                className="d-flex"
                                style={{
                                    flexDirection: 'column',
                                    gap: '8px 0',
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    Feature Importances (Bar Chart)
                                </Typography>
                                <Chart
                                    options={{
                                        chart: { type: 'bar' },
                                        xaxis: { categories: chartData.categories }
                                    }}
                                    series={[
                                        {
                                            name: 'Feature Importance',
                                            data: chartData.featureImportance
                                        }
                                    ]}
                                    type="bar"
                                    width="400"
                                />
                            </div>

                            {/* Line Chart: Feature Importances */}
                            <div
                                className="d-flex"
                                style={{
                                    flexDirection: 'column',
                                    gap: '8px 0',
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    Feature Importances (Line Chart)
                                </Typography>
                                <Chart
                                    options={{
                                        chart: { type: 'line' },
                                        xaxis: { categories: chartData.categories }
                                    }}
                                    series={[
                                        {
                                            name: 'Feature Importance',
                                            data: chartData.featureImportance
                                        }
                                    ]}
                                    type="line"
                                    width="400"
                                />
                            </div>

                            {/* Scatter Plot: Feature Importances */}
                            <div
                                className="d-flex"
                                style={{
                                    flexDirection: 'column',
                                    gap: '8px 0',
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    Feature Importances (Scatter Plot)
                                </Typography>
                                <Chart
                                    options={{
                                        chart: { type: 'scatter' },
                                        xaxis: { categories: chartData.categories }
                                    }}
                                    series={[
                                        {
                                            name: 'Feature Importance',
                                            data: chartData.featureImportance
                                        }
                                    ]}
                                    type="scatter"
                                    width="400"
                                />
                            </div>

                            {/* Heatmap: Feature Importances */}
                            <div
                                className="d-flex"
                                style={{
                                    flexDirection: 'column',
                                    gap: '8px 0',
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    Feature Importances (Heatmap)
                                </Typography>
                                <Chart
                                    options={{
                                        chart: { type: 'heatmap' },
                                        xaxis: { categories: chartData.categories }
                                    }}
                                    series={[
                                        {
                                            name: 'Feature Importance',
                                            data: [chartData.featureImportance]
                                        }
                                    ]}
                                    type="heatmap"
                                    width="400"
                                />
                            </div>

                            {/* Pie Chart: Feature Importances */}
                            <div
                                className="d-flex"
                                style={{
                                    flexDirection: 'column',
                                    gap: '8px 0',
                                    margin: '0 auto'
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    Feature Importances (Pie Chart)
                                </Typography>
                                <Chart
                                    options={{
                                        chart: { type: 'pie' }
                                    }}
                                    series={chartData.featureImportance}
                                    type="pie"
                                    width="400"
                                />
                            </div>
                        </Stack>
                    </Container>
                </React.Fragment>
            )}
        </>
    );
};

export default RfParams;