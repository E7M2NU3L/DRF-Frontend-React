import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import './main.css';

const Register = () => {
  const [username, SetUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleUsername = (e) => SetUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("username", username);
      form.append("email", email);
      form.append("password", password);
      form.append("password_confirmation", passwordConfirm);

      const endpoint = "http://localhost:8000/api/classifier/register/";
      const response = axios.post(endpoint, {
        FormData: form
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      const endpoint = "/"
      return redirect(endpoint);
    }
  }

  const [loggedIn, setLoggedin] = useState(false);

  useEffect(() => {
    const response = getLoginStatus();
    if (response) {
      setLoggedin(true);
    }
  }, []);

  const getLoginStatus = () => {
    try {
      const endpoint = "http://localhost:8000/api/classifier/register/";
      const response = axios.get(endpoint,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {loggedIn ?(
        <React.Fragment>
          <div class="container-fluid" style={{display: "flex", height: "110vh", alignItems: "center", justifyContent: "center", backgroundColor: "#ffefef"}}>
            <main class="card " style={{width: "400px", padding: "30px 15px", background: "rgba(0,0,0,0.6)", color: "#fefedf"}} >
                <h2>
                    Signup
                </h2>
                <div class="mb-3"></div>
                    <form action="">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Username</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Dr.Tommy Shelby" value={username} onChange={handleUsername} name='username' />
                    </div>
                    
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail} name="email" />
                    </div>
                    
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Eg: ihavenolimitations" value={password} onChange={handlePassword} name='password' />
                    </div>

                    
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                      <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Eg: ihavenolimitations" value={passwordConfirm} onChange={handlePasswordConfirm} name='password_confirmation' />
                    </div>
                      <Link href="/" type="submit" id="liveToastBtn" class="btn btn-success" onSubmit={handleSubmit}>
                        Signup
                      </Link>


                    </form>
                  <ul class="list-group bg-secondary mt-4">
                    <li class="list-group-item bg-secondary-subtle">Forgot password</li>
                    <li class="list-group-item bg-secondary-subtle"><Link to="/api/v1/users/login" class="nav-link">Already have an account? login</Link></li>
                  </ul>
              </main>
          </div>
        </React.Fragment>
      ) : (
          <React.Fragment>
          <div className='d-flex justify-content-center align-items-center w-100 h-100' style={{
            background: "#fefedf"
          }}>
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
          </div>
          </React.Fragment>
      )}
    </>
  )
}

export default Register