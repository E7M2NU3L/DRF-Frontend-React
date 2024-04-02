import { TextField } from '@mui/material'
import React from 'react'
import { lightGreen } from '@mui/material/colors'

const Convert = () => {
  return (
    <main class="container-fluid" style={{
        margin: 0,
        padding: "2rem 0",
        minHeight: '100vh',
        maxHeight: '100%',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "#fefedf",
        backgroundSize: 'cover',
    }}>
    <div class="card" style={{
      width: "400px",
      padding: "30px 20px",
      background: "rgba(0,0,0,0.5)",
      backgroundSize: 'cover',
      color: "#fff",
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
            <h2>
                Classify
            </h2>
            <form method="post" enctype="multipart/form-data" autocomplete="off" className='' style={{
                padding: "30px 20px",
                color: "#fff",
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <div class="mb-3"></div>

              <TextField id="outlined-basic" label="File Name" variant="filled" color= 'secondary' sx={{
                borderRadius: 4,
              }} />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span>
              <br />
              <input type='file' name='classify-image' className='d-flex w-100 h-100 py-2 justify-content-center align-items-center' />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span><br /><hr /><h3>Points to Notice</h3><br /><ul><li>The Dicom img must be uncorrupted, proper image acquisition</li><br /><li>The image img must be less than 2 MB</li><li>Click the submit button to upload</li><li>Keep a unique name for the Image or File e.g. patient_00_123 etc.,</li></ul>
              <br />
                
              <a type="submit" href="{% url 'classified_output' %}" class="border-0 rounded-md shadow-sm btn btn-success">
                Validate
              </a>
            </form>
    </div>
  </main>
  )
}

export default Convert