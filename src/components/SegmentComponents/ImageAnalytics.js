import React from 'react'
import LoaderAnimation from './utils/LoaderAnimation2';
import Chart from 'react-apexcharts';
import { Container, Stack, Typography } from '@mui/material';

const ImageAnalytics = () => {
  const [state, setState] = React.useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "input img",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "std img",
        data: [30, 40, 45, 50, 49, 60, 70, 91].reverse()
      }
    ]
  }
  );

  const [image, setImage] = React.useState({
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
  });

  const [stdImage, setStdImage] = React.useState({
    options: {
    colors: ['#E91E63', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "std img flattened",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "std. img moments",
        data: [30, 40, 45, 50, 49, 60, 70, 91].reverse()
      },
    ],
  })
  const [loading, SetLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      // getting the message
      // const url = "http://localhost:8000/api/classifier"
      SetLoading(true);
      // axios.get("http://localhost:8000/api/classifier")
      
    } catch (err) {
      SetLoading(false);
    }
  }, [])
  return (
    <div>
      {false ? (
        <React.Fragment>
          <LoaderAnimation />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant='h4' color="secondary" sx={{
            textAlign: "center",
            paddingTop: "3rem",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px"
          }}>
            Statistical Analytics for the Given Image
          </Typography>
          <Container>
            <Stack rowGap={2} direction="row">
            <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
                <Typography variant='h6' color="secondary">
                  Input Image Flattened Array
                </Typography>
                <Chart
                  options={image.options}
                  series={image.series}
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
                  Standard Image Flattened Array
                </Typography>
                <Chart
                  options={stdImage.options}
                  series={stdImage.series}
                  type="area"
                  width="400"
                />
              </div>   
            </Stack>
          </Container>
          <Container sx={{
            padding: "2rem 0"
          }}>
            <Stack direction="row">
              <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
                <Typography variant='h6' color="secondary">
                  Input Image Mean
                </Typography>
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="400"
                />
              </div>                
              <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
                <Typography variant='h6' color="secondary">
                  Input Image Variance
                </Typography>
                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                  width="400"
                />
              </div>
            </Stack>

            <Stack direction="row">
            <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
                <Typography variant='h6' color="secondary">
                  Input Image Mean
                </Typography>
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="400"
                />
              </div>                
              <div className='d-flex' style={{
                flexDirection: "column",
                gap: "8px 0",
                margin: "0 auto"
              }}>
                <Typography variant='h6' color="secondary">
                  Input Image Variance
                </Typography>
                <Chart
                  options={state.options}
                  series={state.series}
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
                  Input Image Skewness
                </Typography>
                <Chart
                  options={state.options}
                  series={state.series}
                  type="radar"
                  width="400"
                />
              </div>
            </Stack>
          </Container>
        </React.Fragment>
      )}
    </div>
  )
}

export default ImageAnalytics