import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div class="container" style="display: flex; height: 110vh; align-items: center; justify-content: center; background-color: #ffefef;">
        <main class="card " style="width: 400px; padding: 30px 15px; background: rgba(0,0,0,0.6); color: #fefedf;" >
            <h2>
                Signup
            </h2>
            <div class="mb-3"></div>
                <form action="">
                  <Link href="/" type="submit" id="liveToastBtn" class="btn btn-success">
                    Signup
                  </Link>

                  <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                      <div class="toast-header">
                        <img src="..." class="rounded me-2" alt="..." />
                        <strong class="me-auto">Admin</strong>
                        <small>Just Now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                      </div>
                      <div class="toast-body">
                        You have been successfully Registered
                      </div>
                    </div>
                  </div>
                </form>
              <ul class="list-group bg-secondary mt-4">
                <li class="list-group-item bg-secondary-subtle">Forgot password</li>
                <li class="list-group-item bg-secondary-subtle"><Link to="/api/v1/users/login" class="nav-link">Already have an account? login</Link></li>
              </ul>
          </main>
      </div>

  )
}

export default Register