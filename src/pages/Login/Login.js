import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="container" style="display: flex; height: 90vh; align-items: center; justify-content: center; background-color: #ffefef;">
        <main class="card " style="width: 400px; padding: 30px 15px; background: rgba(0,0,0,0.6); color: #fefedf;" >
            <h2>
                Login
            </h2>
            <div class="mb-3"></div>
              <form action="" method="POST">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email"  id="exampleFormControlInput1" placeholder="name@example.com" />
                  
                  <div class="row g-3 align-items-center">
                    <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                      <input type="password" id="inputPassword6" name="password" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div class="col-auto">
                      <span id="passwordHelpInline" class="form-text text-white">
                        Must be 8-20 characters long.
                      </span>
                    </div>
                  </div>
        
                  <button type="submit" class="btn btn-success" id="liveToastBtn">
                    Login
                  </button>

                  <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                      <div class="toast-header">
                        <img src="..." class="rounded me-2" alt="..." />
                        <strong class="me-auto">Admin</strong>
                        <small>Just Now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                      </div>
                      <div class="toast-body">
                        You have been successfully Logged in
                      </div>
                    </div>
                  </div>
                </form>
              <ul class="list-group bg-secondary mt-4">
                <li class="list-group-item bg-secondary-subtle">Forgot password</li>
                <li class="list-group-item bg-secondary-subtle"><Link to="/api/v1/users/register" class="nav-link">Don't have an account? signup</Link></li>
              </ul>
          </main>
      </div>
  )
}

export default Login