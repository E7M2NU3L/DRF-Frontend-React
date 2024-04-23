import React from 'react'
import LoaderAnimation from './utils/LoaderAnimation2';
import SnackBar from './utils/SnackBar';

const ImageParams = ({ data }) => {
    const [loading, SetLoading] = React.useState(true);
    const [Data, setData] = React.useState({});

    React.useEffect(() => {
        try{
        UpdateData();
        SetLoading(false);
        }
        catch(err){
        console.log(err);
        SetLoading(true);
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
                <main className='d-flex' style={{
                    flexDirection: "column",
                    minHeight: "100vh",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <LoaderAnimation />
                    <SnackBar />
                </main>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <main>

                </main>
            </React.Fragment>
        )}
    </>
  )
}

export default ImageParams