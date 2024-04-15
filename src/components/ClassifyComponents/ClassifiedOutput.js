import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './main.css';
import CardImage from './assets/output.jpg'
import { green } from '@mui/material/colors';
import axios from 'axios';
import SnackBar from './utils/SnackBar';

const ClassifiedOutput = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    try {
      const endpoint = ""
      // const res = axios.get(endpoint);
      const response = "some response"
      response.then(() => {
        console.log(response);
      }).catch((err) => {
        console.log(err);
      })

    } catch (error) {
      console.log(error.message);
      // setLoading(true);
    }
  }, []);

  return (
    <main className='card-hold-op' style={{
      paddingBottom: '2rem',
    }}>
      {false ? (
        <React.Fragment>
          <SnackBar />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant='h4' color="secondary" sx={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px"
          }}>
            Classified Output
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={CardImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Predictions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Given input Image have been classified as <Typography variant='h5' color={'lightseagreen'} >
                  "Tumor"
                </Typography>

                <Typography variant='p' style={{
                  paddingTop: "10px",
                }}>
                  Used Algorithms:
                </Typography>
                <div className='d-flex' style={{
                  flexDirection: "column",
                  paddingTop: "10px",
                }}>
                  <Typography variant='p' color={green[600]}>
                    1. LightGBM with VGGNET Weights
                  </Typography>
                  <Typography variant='p' color={green[600]}>
                    2. XGBoost with VGGNET Weights
                  </Typography>
                  <Typography variant='p' color={green[600]}>
                    3. CNN Classifier DeepNET Model
                  </Typography>
                </div>
                
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color='secondary' variant='contained' >View All Reports</Button>
              <Button size="small" color='primary' variant='contained'>View Statitics</Button>
            </CardActions>
          </Card>
        </React.Fragment>
      )}
    </main>
  );
}

export default ClassifiedOutput;