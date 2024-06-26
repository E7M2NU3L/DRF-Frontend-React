import React from 'react'
import NN from '../../assets/images/vgg-neural-network-architecture.png'
import UNET from '../../assets/images/unet.png'

const ProjectReport = () => {
  return (
    <div class="row" style={{
      backgroundImage: "linear-gradient(to right top, #abeaff, #b0f7f9)"
    }}>
        <div class="col-4" >
          <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#item-1">Project Title</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">Group Members</a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">Idea</a>
              </nav>
              
              <a class="nav-link" href="#item-2">Classification</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-2-1">XGBoost</a>
                <a class="nav-link ms-3 my-1" href="#item-2-2">VGGNET Weights</a>
              </nav>
              
              <a class="nav-link" href="#item-3">Segmentation</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-3-1">Monai Pre-Processing</a>
                <a class="nav-link ms-3 my-1" href="#item-3-2">UNET</a>
              </nav>
            </nav>
          </nav>
        </div>
      
        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
            <div id="item-1" class="mb-5">
              <h4>Kidney Tumour Segmentation and Classification</h4>
              <p>Final Year Project by Students of IV <sup>th</sup> year BME</p>
            </div>
            <div id="item-1-1">
              <h5>Project Team Members</h5>
              <p>
                <ul class="list-group pb-4">
                    <li class="list-group-item">Ms. Fathima Shabana</li>
                    <li class="list-group-item">Ms. Ruth Angel</li>
                    <li class="list-group-item">Ms. Nirosha</li>
                    <li class="list-group-item">Ms. Vinothini</li>
                </ul>
              </p>
            </div>
            <div id="item-1-2">
              <h5>Introduction</h5>
              <p>
                AI-based diagnostic tools not only speed up the interpretation of complex images but also improve early detection of disease, ultimately delivering better outcomes for patients. Additionally, AI-based image processing facilitates personalized treatment plans, thereby optimizing healthcare delivery.
              </p>
              <ul class="list-group pt-4">
                <li class="list-group-item active">Stacks that we use</li>
                <li class="list-group-item">Pytorch and Monai - Segmentation and Pre-processing</li>
                <li class="list-group-item">XGboost and Keras - for Classification and model training</li>
                <li class="list-group-item">Django - Python based Backend</li>
                <li class="list-group-item">html, css, js - Frontend</li>
            </ul>
            </div>
            <div id="item-2" class="pt-5">
              <h4>Classification</h4>
              <p class="pb-3">For Classification purposes we use XGBoost classifier which is a lightweight ML based classifier Model along with VGGNEt's pre-trained network weights to enhanec the accuracy of the Model</p>
            </div>
            <div id="item-2">
                <h4>XGBoost Algorithm</h4>
                <p>
                    XGBoost is a robust machine-learning algorithm that can help you understand your data and make better decisions.
                </p>
                <p>
                    XGBoost is an implementation of gradient-boosting decision trees. It has been used by data scientists and researchers worldwide to optimize their machine-learning models.
                </p>
                <p>
                    XGBoost is designed for speed, ease of use, and performance on large datasets. It does not require optimization of the parameters or tuning, which means that it can be used immediately after installation without any further configuration.
                </p>

            </div>
            <div id="item-2">
                <h4>VGGNET Weights</h4>
                <p>
                    VGG stands for Visual Geometry Group; it is a standard deep Convolutional Neural Network (CNN) architecture with multiple layers. The “deep” refers to the number of layers with VGG-16 or VGG-19 consisting of 16 and 19 convolutional layers. The VGG architecture is the basis of ground-breaking object recognition models. Developed as a deep neural network, the VGGNet also surpasses baselines on many tasks and datasets beyond ImageNet. Moreover, it is now still one of the most popular image recognition architectures.
                </p>
                <img src={NN} class="img-thumbnail py-4" alt='neural network' />
            </div>
            <div id="item-3">
              <h4>Segmentation with UNET</h4>
              <p>
                Segmentation is a pretty complicated task when it comes to medical imaging, as the tumour CT images contains 3D slices, the files are acquired as .nii.gz files 
              </p>
              <p>
                At first the nift files are broken down to .dcm files and fragmented into smaller groups and converted back to a smaller nifti of the original nifti file
              </p>
            </div>
            <div id="item-3-1">
              <h5>Monai Based Pre-processing</h5>
              <p>
                Monai is an AI based pre-processing framework made for medcal imaging, it contains some metrics and processing modules such as AddChannel, ScaleIntensity, OrientaionModulate etc.,
              </p>
              <p>
                Through this the training and testing images are pre-processed
              </p>
            </div>
            <div id="item-3-2">
              <h5>UNET</h5>
              <p>
                UNET is a deep convolutional neural network (CNN) architecture that is used for medical image segmentation.
              </p>
              <img src={UNET} class="img-thumbnail" alt='unet architecture'/>
              <p>
                The goal of semantic segmentation is the same as traditional image classification in remote sensing, which is usually conducted by applying traditional machine learning techniques such as random forest and maximum likelihood classifier. Like image classification, there are also two inputs for semantic segmentation.
              </p>

              <h6>
                UNET Architecture
              </h6>
              <p>
                U-net was originally invented and first used for biomedical image segmentation. Its architecture can be broadly thought of as an encoder network followed by a decoder network. Unlike classification where the end result of the the deep network is the only important thing, semantic segmentation not only requires discrimination at pixel level but also a mechanism to project the discriminative features learnt at different stages of the encoder onto the pixel space.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectReport