import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Converted from '../Converted/Converted';
import { useDropzone } from 'react-dropzone';
import './main.css';

const Convert = () => {
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [getData, setGetData] = useState(false);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    if (output) {
      setGetData(true);
    }
  }, [output]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected from e.preventDefaults();

    const formData = new FormData();
    formData.append('image_nifti', file);
    formData.append('image_name', fileName);
    formData.append('image_description', fileDescription);

    const endpoint = 'http://localhost:8000/api/converter/image_upload/';
    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = response.data;
      console.log(response);
      setOutput(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {getData ? (
        <Converted data={output} />
      ) : (
        <React.Fragment>
          <main
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{ margin: 0, padding: '2rem 0', minHeight: '100vh', background: '#fefedf' }}
          >
            <div className="card" style={{ width: '400px', padding: '30px 20px' }}>
              <h2>Converter API</h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3"></div>

                <input
                  type="text"
                  placeholder="Name the File"
                  className="cool-input"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
                <span className="form-text text-muted"><small>Required</small></span><br />

                <div className="mb-3"></div>
                <input
                  type="text"
                  placeholder="Proper Description"
                  className="cool-input"
                  value={fileDescription}
                  onChange={(e) => setFileDescription(e.target.value)}
                />

                <div className="cool-file-upload" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here...</p>
                  ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  )}
                </div>
                <span className="form-text text-muted"><small>Required</small></span><br />

                <div className="mt-2 mb-3">
                  <h5>Rules To Remember</h5>
                  <p>The file must be named with unique integers at the end; description must be around 100 characters.</p>
                  <p>The file must be a .nii.gz file.</p>
                  <p>Don't press the validate button multiple times; it will bring down the server.</p>
                </div>

                <button type="submit" className="cool-button">
                  Validate
                </button>
              </form>
            </div>
          </main>
        </React.Fragment>
      )}
    </>
  );
};

export default Convert;
