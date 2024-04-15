import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'

const RfParams = () => {
  const [options, setOptions] = React.useState({
    options: {
     
      colors: ['#66DA26', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "test image flattened",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "test img moments",
        data: [30, 40, 45, 50, 49, 60, 70, 91].reverse()
      },
    ],
  })
  return (
    <>
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
        <Stack direction="row" rowGap={2} >
          <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
            <Typography variant='h6' color="secondary">
              Feature Importtances of RF Classifier
            </Typography>
            <Chart
              options={options.options}
              series={options.series}
              type="area"
              width="400"
            />
          </div>
          <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
            <Typography variant='h6' color="secondary">
              Estimator Importances of RF Classifier
            </Typography>
            <Chart
              options={options.options}
              series={options.series}
              type="area"
              width="400"
            />
          </div>   
        </Stack>
      </Container>
    </>
  )
}

export default RfParams