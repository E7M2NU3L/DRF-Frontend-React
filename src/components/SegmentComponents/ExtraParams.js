import React, { useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ExtraParams = ({ data }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    if (data) {
      const filters = ['sobel', 'canny', 'prewitt', 'laplacian', 'watershed', 'watershed2'];
      const parsedImages = {};

      filters.forEach((filter) => {
        const rawData = data[filter];
        const arrayData = rawData
          .split('\n')
          .map((row) => row.trim().split(' ').map(Number));

        // Convert the array data to image using canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = arrayData[0].length;
        canvas.height = arrayData.length;

        // Create ImageData and put it on the canvas
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        let index = 0;

        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const value = arrayData[y][x];
            imageData.data[index++] = value; // Red
            imageData.data[index++] = value; // Green
            imageData.data[index++] = value; // Blue
            imageData.data[index++] = 255; // Alpha (opaque)
          }
        }

        ctx.putImageData(imageData, 0, 0);

        // Convert canvas to image URL
        parsedImages[filter] = canvas.toDataURL('image/png');
      });

      setImages(parsedImages);
    }
  }, [data]);

  return (
    <>
      <Divider flexItem sx={{ backgroundColor: '#a8fef9', height: '1px', width: '100%', margin: '1rem 0' }} />
      <Typography variant='h4' color='secondary' sx={{ textAlign: 'center', padding: '20px' }}>
        Post-Processing of the Input Image for Pattern Analytics
      </Typography>
      <ImageList sx={{ width: '80%', height: '100%', margin: '0 auto' }}>
        {Object.keys(images).map((filter, index) => (
          <ImageListItem key={index}>
            <img
              src={images[filter]}
              alt={filter}
              loading='lazy'
              style={{ width: '400px', height: '400px' }}
            />
            <ImageListItemBar title={filter} position='below' />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider flexItem sx={{ backgroundColor: '#a8fef9', height: '1px', width: '100%', margin: '1rem 0' }} />
    </>
  );
};

export default ExtraParams;
