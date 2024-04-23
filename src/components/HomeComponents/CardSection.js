import React from 'react'
import { Link } from 'react-router-dom'
import Card1Image from "../../assets/images/segment_1.jpeg";
import Card2Image from "../../assets/images/segment_2.jpeg";
import Card3Image from "../../assets/images/segment_3.jpg";

const CardSection = () => {
  return (
    <main class="container-md pt-5 pb-5" style={{
        
    }}>
        <div class="row" style={{
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "space-around",
            height: "100%",
            width: "100%", 
            alignItems: "center",
            gap: "2rem"
        }}>
            <div class="card" style={{
                width: "18rem", 
                backgroundImage: "linear-gradient(to right top, #b39cd0, #ab5aac)",
                paddingTop: "1rem"
            }}>
                <img src={Card1Image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Efficient Kidney Imaging with XGBoost</h5>
                  <h6 class="card-subtitle">Rapid Classification for Swift Diagnosis</h6>
                  <p class="card-text">Harness the speed and accuracy of XGBoost for quick and precise classification of kidney CT images. Streamline your workflow and expedite diagnosis with our advanced imaging solution.
                </p>
                  <Link to="api/v1/tool/kidney-classify" class="btn btn-dark">Discover</Link>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
                backgroundImage: "linear-gradient(to right top, #b39cd0, #ab5aac)",
                paddingTop: "1rem"
            }}>
                <img src={Card2Image} class="card-img-top img-thumbnail" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">VGGNet: Precision Segmentation Tool</h5>
                  <h6 class="card-subtitle">Accurate Analysis for Informed Decision</h6>
                  <p class="card-text">Unlock the power of VGGNet for precise segmentation of kidney structures in CT images. Enhance diagnostic accuracy and streamline analysis with our cutting-edge segmentation tool.
                </p>
                <Link to="api/v1/tools/kidney-segment" class="btn btn-dark">Experience</Link>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
                backgroundImage: "linear-gradient(to right top, #b39cd0, #ab5aac)",
                paddingTop: "1rem"
            }}>
                <img src={Card3Image}class="card-img-top img-thumbnail" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Seamless Integration for Medical Imaging</h5>
                  <h6 class="card-subtitle">User-Friendly Interface for Enhanced Workflow</h6>
                  <p class="card-text">Experience seamless integration and intuitive interface designed for efficient navigation and analysis of medical images. Elevate your diagnostic capabilities with our streamlined imaging solution.
                </p>
                  <Link to="api/v1/tools/kidney-segment" class="btn btn-dark">Optimize</Link>
                </div>
            </div>
        </div>
      </main>

  )
}

export default CardSection