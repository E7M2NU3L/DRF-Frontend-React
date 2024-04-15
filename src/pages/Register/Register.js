import axios from 'axios';
import React from 'react'
import { Link, redirect } from 'react-router-dom'
import './main.css';

const Register = () => {
  const [username, SetUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsername = (e) => SetUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("username", username);
      form.append("email", email);
      form.append("password", password);

      const endpoint = "";
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
  return (
    <div class="container" style={{display: "flex", height: "110vh", alignItems: "center", justifyContent: "center", backgroundColor: "#ffefef"}}>
        <main class="card " style={{width: "400px", padding: "30px 15px", background: "rgba(0,0,0,0.6)", color: "#fefedf"}} >
            <h2>
                Signup
            </h2>
            <div class="mb-3"></div>
                <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Username</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Dr.Tommy Shelby" value={username} onChange={SetUsername} />
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={setEmail} />
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Eg: ihavenolimitations" value={password} onChange={setPassword} />
                </div>
                  <Link href="/" type="submit" id="liveToastBtn" class="btn btn-success" onSubmit={handleSubmit}>
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