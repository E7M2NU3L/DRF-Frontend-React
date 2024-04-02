import React from 'react'
import Label from '../../assets/images/labelling.jpg';
import Train from '../../assets/images/training.jpg';
import Build from '../../assets/images/build.jpg'

const Classified = () => {
  return (
    <main style={{
        backgroundColor: "#fefedf"
    }}>
        <h1 class="text-center pt-4">
          Predictions
        </h1>
        <div class="row" style={{
            minHeight: "90vh",
            height: "100%",
            paddingTop: "2rem",
            paddingBottom: "3.5rem",
            gap: "2rem 2rem"
        }}>
          <div class="col" style={{
            display: "flex",
            justifyContent: "center" ,
            alignItems: "center",
            minHeight: "100%",
            width: "100%",
            flexWrap: "wrap"
          }}>
            
            <div class="card" style={{
                width: "300px",
                gap: "2rem 2rem",
                padding: "30px 10px",
                margin: "1rem 2rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff"
            }}>
              <img src="{{ image.img.url  }}" alt="{{ image.fileName }}" class="rounded-4 img-fluid" />
              <div class="mb-3">
                <h4 class="pt-4">
                  Input Image - Image.fileName
                </h4 >
                <p>
                  Classified as: Ct Image with a <span class="text-warning">
                    output
                  </span>
                </p>
              </div>
            </div>
            <br />
            <a href="/" class=" btn btn-danger justify-content-center align-items-center w-100 d-flex" >
              Go back to Home
            </a>
            <br />
          </div>
        </div>

        <main>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                    </main>

            <div>
              <h2 class="">
                Training Process
              </h2>
              <p>
                The below figures denote the
                <ul class="list-group">
                  <li class="list-group-item">labelling of the images before feeding into the network</li>
                  <li class="list-group-item">the second figure denotes the training of the cnn model</li>
                  <li class="list-group-item">the final network denotes the integration of the nwteok inside the django backend</li>
                </ul>
              </p>
              <div class=" d-flex gap-3   align-content-center justify-content-between w-100 h-100 py-4 flex-wrap" style={{
                width: '100%',
              }} >
                <img src={Label} width="400px" height="400px" />
                <img src={Train} width="400px" height="400px" />
                <img src={Build} width="400px" height="400px" />  
              </div>
            </div>
          </main>
  )
}

export default Classified