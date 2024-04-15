import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const OutputCards = () => {
    return (
        <main style={{
            minHeight: "100vh",
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: "#fefedf",
        }}>
        <Container>
            <Stack direction="row" rowGap={2} style={{
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                gap: "0 4rem"
            }}>
                <Card sx={{ maxWidth: 275, backgroundImage: "linear-gradient(to right top, #b7c1e3, #7991bc)", borderRadius: 7, boxShadow: "rgba(0,0,0,0.6)", padding: "1rem 1rem" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24, fontWeight: 700 }} color="secondary" variant='h6'>
                    Converted Files into Dicom <Typography variant='h6' color="green">
                        Successfully
                    </Typography>
                    </Typography>
                    <Typography variant="h5" component="div">
                    Credits to the Library nii2dcm whichtakes incharge of the comand line conversion
                    <Typography variant='h5' color={'lightseagreen'} >
                        Status: Success
                    </Typography>
                    
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Click below to view the path
                    </Typography>
                    <Typography variant="body2">
                    The Images will be stored in a directory named from 0 upto the final final slie .file format specifications
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='secondary' variant='contained'>Click Here</Button>
                </CardActions>
                </Card>

                <Card sx={{  maxWidth: 275, backgroundImage: "linear-gradient(to right top, #b7c1e3, #7991bc)", borderRadius: 7, boxShadow: "rgba(0,0,0,0.6)", padding: "1rem 1rem" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 24, fontWeight: 700 }} color="secondary" gutterBottom variant='h6'>
                        Converted Files into Jpeg <Typography variant='h6' color="green">
                            Successfully
                        </Typography>
                        </Typography>
                        <Typography variant="h5" component="div">
                        Credits to the Library pydicom whichtakes incharge of the comand line conversion
                        <Typography variant='h5' color={'lightseagreen'} >
                            Status: Success
                        </Typography>
                        
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Click below to view the path
                        </Typography>
                        <Typography variant="body2">
                        The Images will be stored in a directory named from 0 upto the final final slie .file format specifications
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='secondary' variant='contained'>Click Here</Button>
                    </CardActions>
                    </Card>
            </Stack>
        </Container>
        </main>
      );
}

export default OutputCards