import axios from 'axios';
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import Segmented from '../Segmented/Segmented';
import './main.css'

const Convert = () => {
  const [FileName, SetFileName] = React.useState("");
  const [File, SetFile] = React.useState(null);

  const [outputData, setOutputData] = React.useState(null);
  const [gotOutput, setGotOutput] = React.useState(false);

  useEffect(() => {
    try {
      handleOutputReceived();
    } catch (error) {
      console.log(error);
    } 
  }, []);

  const handleOutputReceived = () => {
    if (outputData) {
      setGotOutput(true);
    }
  }

   // Dropzone configuration
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
        SetFile(acceptedFiles[0]);
    },
});

  const handleFileName = (e) => SetFileName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    // form.append('fileName', FileName);
    form.append('file', File);

    try {
      const endpoint = "http://localhost:8000/api/segmenter/image_segment/"
      const response = axios.post(endpoint, {
        formData: form
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response);

      const data = response.data;
      setOutputData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      {gotOutput ? (
        <React.Fragment>
          <Segmented data={outputData} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <main className="container-fluid d-flex justify-content-center align-items-center" style={{ margin: 0, padding: '2rem 0', minHeight: '100vh', background: "#fefedf" }}>
                <div className="card" style={{ width: '400px', padding: '30px 20px'  }}>
                    <h2>Segmenter API</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3"></div>

                        {/* Custom styled input field */}
                        <input
                            type="text"
                            placeholder="Name the File"
                            className="cool-input"
                            value={FileName}
                            onChange={handleFileName}
                        />
                        <span className="form-text text-muted"><small>Required</small></span><br />

                        {/* Custom file upload field using React Dropzone */}
                        <div className="cool-file-upload" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop the files here...</p>
                            ) : (
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            )}
                        </div>
                        <span className="form-text text-muted"><small>Required</small></span><br />

                        <div className='mt-2 mb-3'>
                          <h5>
                            Rules To Remember
                          </h5>
                          <p>
                            The File must be named with unique integers at the end
                          </p>
                          <p>
                            The file must be a .jpeg/.jpg file
                          </p>
                          <p>
                            Don't press Validate button multiple times, it will bring down the server
                          </p>
                        </div>

                        <button type="submit" className="cool-button" onSubmit={handleSubmit}>Validate</button>
                    </form>
                </div>
            </main>
        </React.Fragment>
      )}
    </>
  )
}

export default Convert