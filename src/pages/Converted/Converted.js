import React from 'react'

const Converted = () => {
  return (
    <main class="d-flex justify-content-center items-center w-100 min-vh-100" style={{maxHeight: "100%"}}>
    <h1>
        Kindly Wait <span class="text-primary">Processing</span>and Converting<span class="text-success">The given nifti [.nii.gz] File</span>
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

export default Converted