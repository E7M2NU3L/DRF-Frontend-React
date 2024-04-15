import React from 'react'
import './main.css'
import LoaderAnimation from '../../components/ClassifyComponents/LoaderAnimation';
import axios from 'axios';
import TrainingProcess from '../../components/ClassifyComponents/TrainingProcess';
import ClassifiedOutput from '../../components/ClassifyComponents/ClassifiedOutput';
import ImageMoments from '../../components/ClassifyComponents/ImageMoments';
import ImageAnalytics from '../../components/ClassifyComponents/ImageAnalytics';
import ExtraParams from '../../components/ClassifyComponents/ExtraParams';
import RfParams from '../../components/ClassifyComponents/RfParams';

const Classified = () => {

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      const endpoint = "http://localhost:8000/api/classifier/result-get/"
      const response = axios.get(endpoint, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      console.log(response);
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  })
  
  return (
    <>
    <section style={{
      backgroundColor: "#fefedf"
    }}>
        {loading ? (
            <React.Fragment>
              <ClassifiedOutput />
              <ImageMoments />
              <ImageAnalytics />
              <ExtraParams />
              <RfParams />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <LoaderAnimation />
            </React.Fragment>
          )}
          
        <TrainingProcess />
    </section>
    </>
  )
}

export default Classified