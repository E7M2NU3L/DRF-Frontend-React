import { Button, Stack } from '@mui/material'
import React from 'react'
import InputImage from './assets/output.jpg'
import Mask from './assets/mask.jpg'
import LoaderAnimation from './utils/LoaderAnimation2'
import SnackBar from './utils/SnackBar'

const SegmentedOutput = ({ data }) => {
  const [loading, setLoading] = React.useState(false);
  const [Data, setData] = React.useState({});

  React.useEffect(() => {
    try{
      UpdateData();
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
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
          <div class="main d-flex justify-content-center align-items-center bg-secondary-subtle" style={{width: "100%", minHeight: "100vh", padding: "3rem 0"}}>
            <div class="container py-4 px-4 mx-4" style={{backgroundColor: "#CBD5E1"}}>
              <h1 class="text-success font-monospace">
                Segmented Output
              </h1>
              <p className='text-primary'>
                UNet is a convolutional neural network architecture used for image segmentation tasks, particularly in biomedical image analysis, featuring a U-shaped structure for accurate delineation of object boundaries.
              </p>
              <div class="row" style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: "2rem 0",
              }}>
                <div class="col text-primary">
                  <h2>Input Feeded Image</h2>
                  <Stack direction="column" sx={{
                    height: "400px",
                    width: "400px",
                    padding: "30px 20px",
                    color: "#fff",
                  }}>
                    <img src={InputImage} alt="input" class="img-thumbnail shadow-lg" />
                    <Button variant='contained' color="secondary">
                      <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href={InputImage}>Download</a>
                    </Button>
                  </Stack>
                </div>
                <div class="col text-success">
                  <h2>
                    Segmented Mask
                  </h2>
                  <Stack direction="column" rowGap={2} sx={{
                    height: "400px",
                    width: "400px",
                    padding: "30px 20px",
                    color: "#fff",
                  }}>
                    <img src={Mask} alt="output" class="img-thumbnail shadow-lg" />
                    <Button class="btn btn-info">
                      <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href={Mask}>Download</a>
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>          
            </div>
        </React.Fragment>
      )}
    </>
  );
}

export default SegmentedOutput;