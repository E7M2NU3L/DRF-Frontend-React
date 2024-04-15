import React from 'react'
import './main.css'

const LoaderAnimation = () => {
  return (
    <main className='loader-classify'>
          <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
      </main>
  )
}

export default LoaderAnimation