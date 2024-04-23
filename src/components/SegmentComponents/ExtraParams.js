import React from 'react'
import LoaderAnimation from './utils/LoaderAnimation2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Divider, Typography } from '@mui/material';
import HoldImg from './assets/output.jpg'

const itemData = [
  {
    img: HoldImg ,  
    title: 'Sobel Filtered Image',
    author: 'Going through the high frequency components',
  },
  {
    img: HoldImg ,  
    title: 'Canny Filtered',
    author: 'High Frequency with Canny`s mask',
  },
  {
    img: HoldImg,
    title: 'Prewitts Filtered Image',
    author: 'Filtering through filters to find the hidden moments',
  },
  {
    img: HoldImg,
    title: 'Laplacian Gradient Image',
    author: 'Gradient Based Analysis for the given image',
  },
  {
    img: HoldImg,
    title: 'Watershed Alorithm',
    author: 'Applying Watershed on the image to find hidden details',
  },
];

const ExtraParams = ({ data }) => {
  const [options, setOptions] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [Data, setData] = React.useState({});

  React.useEffect(() => {
    try{
      UpdateData();
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }, [])

  const UpdateData = () => {
    setData(data);
  }

  const getOutput = () => {
    return Data;
    
  }
  return (
    <>
    {loading ? (
      <React.Fragment>
        <LoaderAnimation />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Divider flexItem sx={{
          backgroundColor: "#a8fef9",
          height: "1px",
          width: "100%",
          margin: "1rem 0"
        }} />
       <Typography variant='h4' color="secondary" sx={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "30px",
            paddingLeft: "20px",
            paddingRight: "20px"
          }}>
            PostProcessing of the Input Image For Pattern Analytics
          </Typography>
        <ImageList sx={{ width: "80%", height: "100%", margin: "0 auto" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: "400px", height: "400px" }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Divider flexItem sx={{
          backgroundColor: "#a8fef9",
          height: "1px",
          width: "100%",
          margin: "1rem 0"
        }}/>
      </React.Fragment>
    )}
    </>
  )
}

export default ExtraParams