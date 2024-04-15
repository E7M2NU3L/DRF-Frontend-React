import React from 'react'
import Label from '../../assets/images/labelling.jpg';
import Train from '../../assets/images/training.jpg';
import Build from '../../assets/images/build.jpg';
import './main.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const TrainingProcess = () => {
  return (
    <div className='training-process'>
        <div className='gara'>
        <Typography variant='h4' color="secondary" sx={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px"
          }}>
            Training Process
          </Typography>
        </div>

        <div className="image-grid" >
        <div class="card" style={{
          width: "18rem",
          height: "30rem",
        }}>
            <img src={Label} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pre-Processing Phase</h5>
              <p class="card-text">labelling of the images before feeding into the network</p>
              <Link to="/" class="btn btn-primary">
                View Project
              </Link>
            </div>
          </div>

          <div class="card" style={{
          width: "18rem",
          height: "30rem",
        }}>
            <img src={Train} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Training the Model</h5>
              <p class="card-text">The XgBoost Model is being trained along with VGGNET-16 Layer weights and feature extractors<span className='ps-1 text-success'>
                Epochs trained: 15</span></p>

              <p className='card-text'>
                 Transfer Learning due to the VggNET and Ensemble Learning as the models used Bagging with Xgboost, Random Forest Classifier etc.,
              </p>
              <Link to="/" class="btn btn-primary">
                View Project
              </Link>
            </div>
          </div>

          <div class="card" style={{
          width: "18rem",
          height: "30rem",
        }}>
            <img src={Build} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Backend</h5>
              <p class="card-text">Connecting the Trained Model with the Backend Django Rest Framework to interact with the input image feeded in the form and send it to the backend via json and the output is returned bak to the React server frontend</p>
              <Link to="/" class="btn btn-primary">
                View Project
              </Link>
            </div>
          </div>  
        </div>
      </div>
  )
}

export default TrainingProcess