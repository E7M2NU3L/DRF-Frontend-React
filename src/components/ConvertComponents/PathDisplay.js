import React, { useEffect, useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import LoaderAnimation from './utils/LoaderAnim';
import LoaderLayout from './utils/LoaderLayout';

const PathDisplay = ({ data }) => {
    const [loading, setLoading] = useState(true);
    const [pathData, setPathData] = useState({});

    useEffect(() => {
        if (data) {
            // Set data and stop loading when data is available
            setPathData(data);
            setLoading(false);
        }
    }, [data]);

    return (
        <>
            {loading ? (
                // Display loaders when still loading data
                <main className='d-flex' style={{
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <LoaderAnimation />
                    <LoaderLayout />
                </main>
            ) : (
                // Display output data when loading is complete
                <Box
                    sx={{
                        minHeight: '50vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem 0',
                        background: '#fefedf',
                        margin: '0 auto',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            width: '60%',
                            padding: '1rem',
                            marginBottom: '1rem',
                            backgroundColor: '#f8f9fa',
                        }}
                    >
                        <Typography variant='h6' color="primary">
                            Dicom Path:
                        </Typography>
                        <Typography variant='body2' color="textSecondary">
                            {pathData.dicom_path}
                        </Typography>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            width: '60%',
                            padding: '1rem',
                            backgroundColor: '#f8f9fa',
                        }}
                    >
                        <Typography variant='h6' color="primary">
                            Jpeg Path:
                        </Typography>
                        <Typography variant='body2' color="textSecondary">
                            {pathData.jpeg_path}
                        </Typography>
                    </Paper>
                </Box>
            )}
        </>
    );
};

export default PathDisplay;
