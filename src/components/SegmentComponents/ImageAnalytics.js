import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

const ImageMomentsVisualization = ({ data }) => {
  // Initialize state for chart options and series data
  const [chartOptions, setChartOptions] = React.useState({
    options: {
      chart: {
        id: "moments-chart",
        type: 'radar',  // Set the default chart type to radar
      },
      xaxis: {
        categories: ['m00', 'm10', 'm01', 'm20', 'm11', 'm02', 'm30', 'm21', 'm12', 'm03'],
      },
      colors: ['#66DA26', '#FF9800'],
    },
    series: [
      {
        name: "Moments",
        data: [
          data.m00,
          data.m10,
          data.m01,
          data.m20,
          data.m11,
          data.m02,
          data.m30,
          data.m21,
          data.m12,
          data.m03
        ]
      }
    ]
  });

  return (
    <Container>
      <Typography variant="h4" color="secondary" sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        Image Moments Visualization
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        {/* Radar plot for moments data */}
        <div style={{ width: '400px' }}>
          <Typography variant="h6" color="secondary" sx={{ textAlign: 'center' }}>
            Radar Plot
          </Typography>
          <Chart
            options={{ ...chartOptions.options, chart: { type: 'radar' } }}
            series={chartOptions.series}
            type="radar"
            width="400"
          />
        </div>

        {/* Heatmap for moments data */}
        <div style={{ width: '400px' }}>
          <Typography variant="h6" color="secondary" sx={{ textAlign: 'center' }}>
            Heatmap
          </Typography>
          <Chart
            options={{ ...chartOptions.options, chart: { type: 'heatmap' }, plotOptions: { heatmap: { radius: 0 } } }}
            series={chartOptions.series}
            type="heatmap"
            width="400"
          />
        </div>

        {/* Correlation map for moments data */}
        <div style={{ width: '400px' }}>
          <Typography variant="h6" color="secondary" sx={{ textAlign: 'center' }}>
            Correlation Map
          </Typography>
          <Chart
            options={{ ...chartOptions.options, chart: { type: 'scatter' } }}
            series={chartOptions.series}
            type="scatter"
            width="400"
          />
        </div>
      </Stack>
    </Container>
  );
};

export default ImageMomentsVisualization;
