import { TextField } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const Convert = () => {
  const [fileName, setFileName] = React.useState("");
  const [File, SetFile] = React.useState(null);

  const handleFileName = (e) => setFileName(e.target.value); 
  const handleFile = (e) => SetFile(e.target.files[0]);

  const handleSubmit = async(e) => {
    e.preventDefaults();

    const form = new FormData();
    form.append("file", File);
    form.append("name", fileName);

    const endpoint = "http://localhost:8000/api/converter/image_upload/"
    try {
      const response = await axios.post(
        endpoint, {
          file: File,
          name: fileName
        },{
          headers: {
            'Content-Type':'multipart/form-data'
          }
        }
      )
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

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
                Convert Nifti to Dicom and Jpg
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
              }} value={fileName} onChange={setFileName} />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span>
              <br />
              <input type='file' name='classify-image' value={File} onChange={SetFile} className='d-flex w-100 h-100 py-2 justify-content-center align-items-center' />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span><br /><hr /><h3>Points to Notice</h3><br /><ul><li>The Dicom file must be uncorrupted, proper image acquisition</li><br /><li>The image file must be less than 2 MB</li><li>Click the submit button to upload</li><li>Keep a unique name for the Image or File e.g. patient_00_123 etc.,</li></ul>
              <br />
                
              <Link type="submit" to="/api/v1/tool/kidney-converted" className="border-0 rounded-md shadow-sm btn btn-success">
                Validate
              </Link>
            </form>
    </div>
  </main>
  )
}

export default Convert