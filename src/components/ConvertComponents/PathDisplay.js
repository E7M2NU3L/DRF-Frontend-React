import { Typography } from '@mui/material'
import React from 'react'

const PathDisplay = () => {
  return (
    <div style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        background: "#fefedf",
        backgroundSize: 'cover',
        margin: "0 auto"
    }}>
        <section style={{
            width: "60%",
            margin: "0 auto",
            padding: "1rem 0",
        }}>
            <Typography variant='h6' color="green">
                Dicom Path: 
            </Typography>
            <Typography variant='p' color="secondary">
                path
            </Typography>
        </section>

        <section style={{
            width: "60%",
            margin: "0 auto",
            padding: "1rem 0",
        }}>
            <Typography variant='h6' color="green">
                Jpeg Path: 
            </Typography>
            <Typography variant='p' color="secondary">
                path
            </Typography>
        </section>
    </div>
  )
}

export default PathDisplay