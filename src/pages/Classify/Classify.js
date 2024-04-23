import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './main.css'; // Import your custom CSS styles
import axios from 'axios';
import Classified from '../Classified/Classified';

const Convert = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [outputData, setOutputData] = useState(null);
    const [getData, setGetData] = useState(false);

    // Use the effect to monitor outputData changes and set getData to true when outputData is available
    useEffect(() => {
        if (outputData) {
            setGetData(true);
        }
    }, [outputData]); // Adding outputData as a dependency to ensure the effect runs when it changes

    // Dropzone configuration
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
        },
    });

    // Handle file name change
    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image_input', file);
        formData.append('fileName', fileName);

        const endpoint = 'http://localhost:8000/api/classifier/result-get/';

        try {
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = response.data;
            console.log('Response:', data);
            setOutputData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section>
            {getData ? (
                <React.Fragment>
                    <main>
                        <Classified data={outputData} />
                    </main>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <main className="container-fluid d-flex justify-content-center align-items-center" style={{ margin: 0, padding: '2rem 0', minHeight: '100vh', background: "#fefedf" }}>
                        <div className="card" style={{ width: '400px', padding: '30px 20px' }}>
                            <h2>Classify</h2>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-3"></div>

                                {/* Custom styled input field */}
                                <input
                                    type="text"
                                    placeholder="Name the File"
                                    className="cool-input"
                                    value={fileName}
                                    onChange={handleFileNameChange}
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

                                <button type="submit" className="cool-button">Validate</button>
                            </form>
                        </div>
                    </main>
                </React.Fragment>
            )}
        </section>
    );
};

export default Convert;
