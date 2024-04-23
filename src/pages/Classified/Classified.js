import React, { useEffect, useState } from 'react';
import LoaderAnimation from '../../components/ClassifyComponents/LoaderAnimation';
import TrainingProcess from '../../components/ClassifyComponents/TrainingProcess';
import ClassifiedOutput from '../../components/ClassifyComponents/ClassifiedOutput';
import ImageMoments from '../../components/ClassifyComponents/ImageMoments';
import ImageAnalytics from '../../components/ClassifyComponents/ImageAnalytics';
import ExtraParams from '../../components/ClassifyComponents/ExtraParams';
import RfParams from '../../components/ClassifyComponents/RfParams';

const Classified = ({ data }) => {
    // Define state variables for each data type
    const [outputClassified, setOutputClassified] = useState({});
    const [imageAnalytics, setImageAnalytics] = useState({});
    const [rfParams, setRfParams] = useState({});
    const [imageMoments, setImageMoments] = useState({});
    const [extraParams, setExtraParams] = useState({});
    const [base64Image, setBase64Image] = useState(""); // State for base64 image
    const [loading, setLoading] = useState(true); // Initial loading state

    // Function to convert image array to base64
    function arrayToBase64Image(arrayData, width, height) {
        // Convert the array data to a Uint8ClampedArray
        const uint8Array = new Uint8ClampedArray(arrayData);
        
        // Create a canvas element
        const canvas = document.createElement('canvas');
        // Set the width and height of the canvas
        canvas.width = width;
        canvas.height = height;
        
        // Get the 2D context of the canvas
        const ctx = canvas.getContext('2d');
        
        // Create an ImageData object from the array data
        const imageData = new ImageData(uint8Array, width, height);
        
        // Put the image data on the canvas
        ctx.putImageData(imageData, 0, 0);
        
        // Convert the canvas content to a data URL
        const dataURL = canvas.toDataURL();
        
        // Return the base64-encoded image
        return dataURL;
    }

    // Parse and organize the data from the backend response
    useEffect(() => {
        if (data) {
            const parsedData = data;

            // Extract data for each child component
            const output = parsedData.output[0];
            
            setOutputClassified(output.output_classified);
            setImageAnalytics(output.image_analytics);
            setRfParams(output.random_forest_analytics);
            setImageMoments(output.image_moments);
            setExtraParams(output.extra_params);
            
            // Parse the image array from the "data" field (assuming data is in JSON format)
            const imageDataString = parsedData.data;
            
            // Convert the string representation of the image array to a nested array
            const imageArray = JSON.parse(imageDataString);
            
            // Set the width and height based on your knowledge or assumptions about the image
            const imageWidth = 224; // Adjust as necessary
            const imageHeight = 224; // Adjust as necessary
            
            // Convert the image array to a base64-encoded image using the function
            const base64Image = arrayToBase64Image(imageArray, imageWidth, imageHeight);
            
            // Set the base64 image data state
            setBase64Image(base64Image);
            
            // Once data is set, update loading state
            setLoading(false);
        }
    }, [data]);

    return (
        <section style={{ backgroundColor: "#fefedf" }}>
            {loading ? (
                <LoaderAnimation />
            ) : (
                <React.Fragment>
                    <ClassifiedOutput data={outputClassified} base64Image={base64Image} />
                    <ImageMoments data={imageMoments} />
                    <ImageAnalytics data={imageAnalytics} />
                    <ExtraParams data={extraParams} />
                    <RfParams data={rfParams} />
                </React.Fragment>
            )}
            <TrainingProcess />
        </section>
    );
};

export default Classified;
