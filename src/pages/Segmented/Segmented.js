import React from 'react'

const Segmented = () => {
  return (
    <div class="main d-flex justify-content-center align-items-center bg-secondary-subtle" style={{width: "100%", minHeight: "100vh"}}>
        <div class="container py-4 px-4 mx-4" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
          
          <h1 class="text-white font-monospace">
            Segmented Output
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dignissimos in, culpa harum aliquid provident ut hic autem corporis. Esse repudiandae quo nobis saepe distinctio beatae repellendus, animi facilis maiores?
          </p>
          <div class="row">
            <div class="col text-white">
              <h2>Input Feeded Image</h2>
              <img src="{{image}}" alt="input" class="img-thumbnail shadow-lg" />
              <button class="btn btn-warning">
                <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href="{{mask}}">Download</a>
              </button>
            </div>
            <div class="col text-white">
              <h2>
                Segmented Mask
              </h2>
              <img src="{{mask}}" alt="output" class="img-thumbnail shadow-lg" />
              <button class="btn btn-info">
                <a class="text-decoration-none text-black fw-bold link-offset-2-hover" href="{{mask}}">Download</a>
              </button>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default Segmented