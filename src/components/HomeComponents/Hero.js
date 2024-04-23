import React from 'react'
import HeroLogo from '../..//assets/images/hero-logo.jpeg'

const Hero = () => {
  return (
    <section class="px-4 pb-5" style={{
        backgroundColor: "#fefedf"
    }}>
        <div class="row align-items-center justify-content-lg-between flex h-100 mx-auto w-100">
            <div class="col-sm-12 col-md-12 col-lg-6">
                <h1 class="text-4xl font-semibold mt-4">
                    Empowering <span class="text-[#b166cc] font-bold">Precision Medicine</span> through <span class="text-[#7572ff] font-bold">Advanced Image Analysis</span>
                </h1>
                <h2 class="text-2xl font-normal">
                    Revolutionize Medical Imaging with Our State-of-the-Art Segmentation and Classification Tool
                </h2>
                <h4 class="text-md font-light">
                    Welcome to Medical Image Segmenter, where cutting-edge technology meets medical expertise. Our platform harnesses the power of UNET and deep neural network classifiers to bring unprecedented accuracy and efficiency to medical image analysis.
                </h4>
                <a href="/api/v1/tool/kidney-classify" class="btn btn-dark border-0 mb-3">
                        Explore Now
                </a>           
            </div>
            <div class="img-fluid col-sm-12 col-md-12 col-lg-6 pt-sm-4">
                <img src={HeroLogo} alt="hero-logo" style={{
                    width: "450px",
                    height: "300px"
                }} class="ps-5 rounded-5 border pb-3" />
            </div>
        </div>
    </section>
  )
}

export default Hero