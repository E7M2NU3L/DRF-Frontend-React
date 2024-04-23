import React from 'react'

const LoaderLayout = () => {
  return (
    <main class="" style={{maxHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem 0", flexDirection: "column", minHeight: "100vh"}}>
              <h1>
                  Kindly Wait <span class="text-primary pe-2">Processing</span>and Converting<span class="text-success">The given nifti [.nii.gz] File</span>
              </h1>
              <div class="">
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
              </div>
          </main>
  )
}

export default LoaderLayout