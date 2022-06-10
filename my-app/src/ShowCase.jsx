import React from 'react';
import wallpaper from './photos/elenamanage-removebg-preview.png';

function ShowCase() {
  return (
    <div>
      <section
        id='Home'
        class='bg-dark text-light p-5 p-lg-0 py-lg-5 text-center text-sm-start'
      >
        <div class='container'>
          <div class='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                Become a profesional <span class='text-warning'>Seller</span>
              </h1>
              <p class='lead my-3'>
                If you want to become a profesional please enroll our super
                catal calcalac course!
              </p>
              <button
                class='btn btn-primary btn-lg'
                data-bs-toggle='modal'
                data-bs-target='#enroll'
              >
                Enroll
              </button>
            </div>
            <img
              class='img-fluid w-50 d-none d-sm-block'
              src={wallpaper}
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShowCase