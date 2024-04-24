import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Segmented from '../Segmented/Segmented';
import './main.css';

const Convert = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [outputData, setOutputData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Dropzone configuration
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
        },
    });

    const handleFileNameChange = (e) => setFileName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !fileName) {
            console.log("Please provide a file and a file name.");
            return;
        }

        const formData = new FormData();
        formData.append('fileName', fileName);
        formData.append('uploaded_data', file);

        try {
            setIsLoading(true); // Start loader animation
            const endpoint = 'http://localhost:8000/api/segmenter/image_segment';
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setOutputData(response.data);
        } catch (error) {
            console.error('Error during API request:', error.message);
        } finally {
            setIsLoading(false); // Stop loader animation
        }
    };

    return (
        <>
            {outputData ? (
                <Segmented data={outputData} isLoading={isLoading} />
            ) : (
                <main className="container-fluid d-flex justify-content-center align-items-center" style={{ margin: 0, padding: '2rem 0', minHeight: '100vh', background: '#fefedf' }}>
                    <div className="card" style={{ width: '400px', padding: '30px 20px' }}>
                        <h2>Segmenter API</h2>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Name the File"
                                    className="cool-input"
                                    value={fileName}
                                    onChange={handleFileNameChange}
                                />
                                <span className="form-text text-muted"><small>Required</small></span><br />
                            </div>

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
                                <h5>Rules to Remember</h5>
                                <p>The file must be named with unique integers at the end.</p>
                                <p>The file must be a .jpeg/.jpg file.</p>
                                <p>Don't press the Validate button multiple times; it may impact server performance.</p>
                            </div>

                            <button type="submit" className="cool-button">Validate</button>
                        </form>
                    </div>
                </main>
            )}
        </>
    );
};

export default Convert;
