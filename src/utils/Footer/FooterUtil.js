import React from 'react'
import { Link } from 'react-router-dom'

const FooterUtil = () => {
  return (
    <div class="bg-secondary">
        <main class="container-lg">
          <div class="row">
              <div class="col-lg-4 mt-3" style={{
                    color: "#fefedf"
              }}>
                  <h2>
                      Medical Segmenter
                  </h2>
                  <p>
                      Medical Segmenter is a medical image segmentation and classification tool that enables you to quickly and easily segment and classify medical images.
                  </p>
              </div>
  
              <div class="col-lg-4 col-md-6 col-sm-12 pt-4 pb-3">
                  <ul class="list-group">
                      <li class="list-group-item bg-secondary-subtle text-center text-black">Quick links</li>
                      <li class="list-group-item bg-secondary-subtle"><Link to="api/v1/tool/kidney-segment" class="nav-link">Segment</Link></li>
                      <li class="list-group-item bg-secondary-subtle"><Link to="api/v1/tool/kidney-classify" class="nav-link">Classify</Link></li>
                      <li class="list-group-item bg-secondary-subtle"><Link to="api/v1/tool/kidney-project" class="nav-link">Project</Link></li>
                  </ul>
              </div>
  
              <div class="col-lg-4 col-md-6 col-sm-12 pb-4 pt-4">                  
                  <ul class="list-group">
                      <li class="list-group-item bg-secondary-subtle"> Ms. Fathima Shabana</li>
                      <li class="list-group-item bg-secondary-subtle">Ms. Ruth Angel</li>
                      <li class="list-group-item bg-secondary-subtle">Ms. Nirosha</li>
                      <li class="list-group-item bg-secondary-subtle">Ms. Vinodhini</li>
                  </ul>
              </div>
          </div>
        </main>
      </div>
  )
}

export default FooterUtil