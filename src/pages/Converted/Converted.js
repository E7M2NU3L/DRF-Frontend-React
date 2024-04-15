import React from 'react'
import LoaderLayout from '../../components/ConvertComponents/LoaderLayout';
import OutputCards from '../../components/ConvertComponents/OutputCards';
import PathDisplay from '../../components/ConvertComponents/PathDisplay';
import axios from 'axios';

const Converted = () => {

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    try {  
      const endpoint = "http://localhost:8000/api/converter/image_upload/"
      const response = axios.get(endpoint, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      });
      console.log(response);
      refetch();
      setLoading(false); 
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [])

  const refetch = async() => {
    try {  
      const endpoint = "http://localhost:8000/api/converter/image_upload/"
      const response = await axios.get(endpoint, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      });
      console.log(response); 
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {false ? (
        <React.Fragment>
          <LoaderLayout />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <OutputCards />
          <PathDisplay />
        </React.Fragment>
      )}
    </>
  )
}

export default Converted