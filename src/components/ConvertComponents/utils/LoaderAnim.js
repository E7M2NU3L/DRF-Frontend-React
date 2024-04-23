import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderAnimation = () => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
  
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
        <main className='' style={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "2rem 0",
          padding: "2rem 0"
        }}>
            <Typography variant='h5' color="secondary">
             Please Wait the Results are Loading.... 
            </Typography>
            <Stack sx={{ color: 'blue-gray', width: "100%", display: "flex", justifyContent: "center" }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </Box>

        </main>
    );
}

export default LoaderAnimation