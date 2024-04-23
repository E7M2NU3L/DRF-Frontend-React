import React, { useEffect, useState } from 'react';
import OutputCards from '../../components/ConvertComponents/OutputCards';
import PathDisplay from '../../components/ConvertComponents/PathDisplay';
import axios from 'axios';
import LoaderLayout from '../../components/ConvertComponents/utils/LoaderLayout';

const Converted = ({ data }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Since `data` is being passed from parent, handle the loading state based on `data` availability
    if (data) {
      setLoading(false);
    }
  }, [data]); // Only run when `data` changes

  // No need for redundant API calls here since `data` is already being passed from the parent component

  return (
    <>
      {loading ? (
        <React.Fragment>
          <LoaderLayout />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <OutputCards data={data} /> {/* Assuming OutputCards accepts `data` as a prop */}
          <PathDisplay data={data} />
        </React.Fragment>
      )}
    </>
  );
};

export default Converted;
