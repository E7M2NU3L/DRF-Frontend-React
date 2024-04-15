import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import axios from 'axios'

const Convert = () => {
  // States
  const [fileName, setFileName] = React.useState("");
  const [file, SetFile] = React.useState("");

  // handle FileName
  const handleFileName = (e) => setFileName(e.target.value);
  // handle File
  const handleFile = (e) => SetFile(e.target.files[0]);
  
  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("fileName", fileName);
    const endpoint = "http://localhost:8000/api/classifier/result-get/"
    try {
      const response = await axios.post(endpoint , {
        file: file,
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    fetch(endpoint, {
      method: "POST",
      body: formData,
    })
     .then((res) => res.json())
     .then((res) => {
        console.log(res);
      });
  };
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

              <input type='text'  placeholder = "Name the File" className='input-feld-classify' value={fileName} onChange={handleFileName} />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span>
              <br />
              <input type='file' name='classify-image' value={file} onChange={handleFile} className='d-flex w-100 h-100 py-2 justify-content-center align-items-center' />
              <span class='form-text text-muted'><small class='text-white'>Required</small></span><br /><hr /><h3>Points to Notice</h3><br /><ul><li>The Dicom img must be uncorrupted, proper image acquisition</li><br /><li>The image img must be less than 2 MB</li><li>Click the submit button to upload</li><li>Keep a unique name for the Image or File e.g. patient_00_123 etc.,</li></ul>
              <br />
                
              <Link type="submit" to="/api/v1/tool/kidney-classified" class="border-0 rounded-md shadow-sm btn btn-success">
                Validate
              </Link>
            </form>
    </div>
  </main>
  )
}

export default Convert