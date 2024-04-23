import React from 'react'
import SegmentedOutput from '../../components/SegmentComponents/SegmentedOutput'
import ImageMoments from '../../components/SegmentComponents/ImageMoments'
import ImageAnalytics from '../../components/SegmentComponents/ImageAnalytics'
import ExtraParams from '../../components/SegmentComponents/ExtraParams'
import RfParams from '../../components/SegmentComponents/RfParams'
import axios from 'axios'
import LoaderAnimation from '../../components/SegmentComponents/utils/LoaderAnimation2';
import MaskParams from '../../components/SegmentComponents/MaskParams'
import ImageParams from '../../components/SegmentComponents/ImageParams'

const Segmented = () => {
  const [loader, setLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const endpoint = "http://localhost:8000/api/segmenter/image_segment/"
      const response = axios.get(endpoint, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response);
      refetch();
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  }, [])
  
  const refetch = async () => {
    try {
      const endpoint = "http://localhost:8000/api/segmenter/image_segment/"
      const response = axios.get(endpoint, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      {loader ? (
        <React.Fragment>
          <LoaderAnimation />
        </React.Fragment>
      ) : (
        <main style={{
          backgroundColor: "#fefedf"
        }}>
          <SegmentedOutput />
          <ImageMoments />
          <ImageAnalytics />
          <ExtraParams />
          <MaskParams />
          <ImageParams />
          <RfParams />
        </main>
      )}
    </>
  )
}

export default Segmented