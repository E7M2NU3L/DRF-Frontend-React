import React, { useEffect, useState } from 'react';
import LoaderAnimation from './utils/LoaderAnimation2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Divider, Typography } from '@mui/material';

const ExtraParams = ({ data }) => {
    // State to hold processed image data URLs
    const [imageDataURLs, setImageDataURLs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data) {
            processImages(data.extra_params);
        }
    }, [data]);

    const processImages = (extraParams) => {
        // Extract the arrays from extra_params
        const { sobel, canny, prewitt, laplacian, watershed } = extraParams;

        // Convert arrays to images and create data URLs
        const images = [sobel, canny, prewitt, laplacian, watershed];
        const titles = [
            'Sobel Filtered Image',
            'Canny Filtered Image',
            'Prewitt Filtered Image',
            'Laplacian Gradient Image',
            'Watershed Algorithm'
        ];
        const authors = [
            'Going through the high frequency components',
            'High Frequency with Canny`s mask',
            'Filtering through filters to find the hidden moments',
            'Gradient Based Analysis for the given image',
            'Applying Watershed on the image to find hidden details'
        ];
        
        const newImageDataURLs = images.map((imageArray, index) => {
            // Convert the array data to a data URL
            const blob = new Blob([imageArray], { type: 'image/png' });
            const dataURL = URL.createObjectURL(blob);
            return {
                img: dataURL,
                title: titles[index],
                author: authors[index]
            };
        });
        
        setImageDataURLs(newImageDataURLs);
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <LoaderAnimation />
            ) : (
                <React.Fragment>
                    <Divider flexItem sx={{ backgroundColor: '#a8fef9', height: '1px', width: '100%', margin: '1rem 0' }} />
                    <Typography variant='h4' color='secondary' sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '30px', paddingLeft: '20px', paddingRight: '20px' }}>
                        PostProcessing of the Input Image For Pattern Analytics
                    </Typography>
                    <ImageList sx={{ width: '80%', height: '100%', margin: '0 auto' }}>
                        {imageDataURLs.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading='lazy'
                                    style={{ width: '400px', height: '400px' }}
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position='below'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Divider flexItem sx={{ backgroundColor: '#a8fef9', height: '1px', width: '100%', margin: '1rem 0' }} />
                </React.Fragment>
            )}
        </>
    );
};

export default ExtraParams;
