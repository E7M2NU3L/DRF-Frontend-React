import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'
import LoaderAnimation from '../ClassifyComponents/LoaderAnimation'
import SnackBar from './utils/SnackBar'

const RfParams = ({ data }) => {
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

    const [loading, SetLoading] = React.useState(true);
    const [Data, setData] = React.useState({});

    React.useEffect(() => {
      try{
        UpdateData();
        SetLoading(false);
      }
      catch(err){
        console.log(err);
        SetLoading(true);
      }
    }, [])

    const UpdateData = () => {
      setData(data);
    }

    const getOutput = () => {
      return Data;
      
    } 
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
        </React.Fragment>
      )}
    </>
  )
}

export default RfParams