import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const NavUtil = () => {
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
  }, [])

  const Logout = async() => {
    try {
      const endpoint = "http://localhost:8000/auth/logout_user"
      const response = await axios.post(endpoint, {
        headers: {
          contentType: "application/json"
        }
      })
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Med Segment</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/api/v1/tool/kidney-classify">Classify</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/api/v1/tool/kidney-segment">Segment</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/api/v1/tool/kidney-convert">Converter API</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/api/v1/tool/kidney-project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Project
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/api/v1/tool/kidney-project">UNET</Link></li>
                  <li><Link class="dropdown-item" to="/api/v1/tool/kidney-project">XGBoost</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="/api/v1/tool/kidney-project">Django</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" aria-disabled="true">Learn More</Link>
              </li>
            </ul>

            {false ? (
              <React.Fragment>
                <form class="d-flex" role="search">
                  <Link class="btn btn-outline-success font-monospace" type="submit" to="/api/v1/users/logout">Logout</Link>
                </form>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form class="d-flex" role="search">
                  <Link class="btn btn-outline-success font-monospace" type="submit" to="/api/v1/users/login">Login</Link>
                </form>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
  )
}

export default NavUtil