import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import LoaderAnimation from './utils/LoaderAnimation2';
import SnackBar from './utils/SnackBar';

const SegmentedOutput = ({ data, input, message }) => {
    const [loading, setLoading] = React.useState(false);

    const [imageSrc, setImageSrc] = React.useState(null);

    // Convert array data to base64 data URL
    const convertArrayToBase64 = (arrayData) => {
        // Assuming arrayData is a 2D array of image pixel data
        // Convert the array to a Uint8Array or Uint8ClampedArray for encoding
        const uint8Array = new Uint8Array(arrayData);
        // Convert the Uint8Array to a base64 string
        const base64String = btoa(String.fromCharCode(...uint8Array));
        // Create a data URL with the base64 string and MIME type (e.g., "image/png")
        const dataUrl = `data:image/png;base64,${base64String}`;
        return dataUrl;
    };

    // Convert data to imageSrc when data changes
    React.useEffect(() => {
        if (input) {
            // Convert data array to base64 data URL and set image source
            const base64DataUrl = convertArrayToBase64(input);
            setImageSrc(base64DataUrl);
        }
    }, [input]);

    const [maskSrc, setMaskSrc] = React.useState(null);

    React.useEffect(() => {
      if (data) {
        // Convert data array to base64 data URL and set image source
        const base64DataUrlM = convertArrayToBase64(data);
        setMaskSrc(base64DataUrlM);
      }
    },[data])

    React.useEffect(() => {
        try {
            if (data) {
                setLoading(false);
            } else {
                setLoading(true);
            }
        } catch (err) {
            console.error(err);
            setLoading(true);
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
                    <div class="main d-flex justify-content-center align-items-center bg-secondary-subtle" style={{ width: "100%", minHeight: "100vh", padding: "3rem 0" }}>
                        <div class="container py-4 px-4 mx-4" style={{ backgroundColor: "#CBD5E1" }}>
                          <Typography variant='h2' color="secondary">
                            {message}
                          </Typography>
                            <h1 class="text-success font-monospace">Segmented Output</h1>
                            <p className='text-primary'>UNet is a convolutional neural network architecture used for image segmentation tasks, particularly in biomedical image analysis, featuring a U-shaped structure for accurate delineation of object boundaries.</p>
                            <div class="row" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", padding: "2rem 0" }}>
                                <div class="col text-primary">
                                    <h2>Input Feeded Image</h2>
                                    <Stack direction="column" sx={{ height: "400px", width: "400px", padding: "30px 20px" }}>
                                        <img src={imageSrc} alt="input" class="img-thumbnail shadow-lg" />
                                        <Button variant='contained' color="secondary">
                                            <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href={imageSrc} download="input_image.jpg">Download</a>
                                        </Button>
                                    </Stack>
                                </div>
                                <div class="col text-success">
                                    <h2>Segmented Mask</h2>
                                    <Stack direction="column" sx={{ height: "400px", width: "400px", padding: "30px 20px" }}>
                                        <img src={maskSrc} alt="mask" class="img-thumbnail shadow-lg" />
                                        <Button variant='contained' color="success">
                                            <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href={maskSrc} download="segmented_mask.jpg">Download</a>
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
};

export default SegmentedOutput;
