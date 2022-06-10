import React from 'react'
import wallpaper from './photos/elenamanage-removebg-preview.png'
import gif from './photos/Writing room.gif'
import pic2 from './photos/Business analytics-cuate.png'

function Home() {
  return (
    <>
      <div class='navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
        <div class='container'>
          <a href='#' class='navbar-brand'>
            Elena web
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navmenu'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item'>
                <a href='#Home' class='nav-link'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a href='#shop' class='nav-link'>
                  Shop
                </a>
              </li>
              <li class='nav-item'>
                <a href='#about' class='nav-link'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    

      {/* <!-- Newsletter --> */}

      <section class='bg-primary text-light p-5'>
        <div class='container'>
          <div class='d-md-flex justify-content-between align-items-center'>
            <h3 class='mb-3 mb-md-0 '> Sign Up </h3>

            <div class='input-group news-input'>
              <input
                type='text'
                class='form-control'
                placeholder='Enter Email'
              />
              <button class='btn btn-dark btn-lg' type='button'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

    

      {/* <!-- learn Section --> */}

      <section id='shop' class='p-5'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-md'>
              <img src={gif} alt='fundamentals' class='img-fluid' />
            </div>
            <div class='col-md p-5'>
              <h2>Learn About Elena's Company</h2>
              <p class='load'>Elene is a profesional</p>
              <p class='load'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, placeat sapiente reiciendis quos totam aspernatur
                deleniti eos inventore repellendus,
              </p>
              <a href='https://www.travelfree.ro/' class='btn btn-light mt-3'>
                <i class='bi bi-chevron-right'></i>Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- next section --> */}

      <section id='about' class='p-5 bg-dark text-light'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-md p-5'>
              <h2>Learn Business</h2>
              <p class='load'>
                Lorem ipsum Tenetur, animi exercitationem? Debitis harum
                dignissimos corporis error, numquam voluptatem porro quis
              </p>
              <p class='load'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, placeat sapiente reiciendis quos totam aspernatur
                deleniti eos inventore repellendus
              </p>
              <a href='#' class='btn btn-light mt-3'>
                <i class='bi bi-chevron-right'></i>Read More
              </a>
            </div>
            <div class='col-md'>
              <img
                src={pic2}
                alt='fundamentals'
                class='img-fluid'
              />
            </div>
          </div>
        </div>
      </section>



  

     

      {/* <!-- map --> */}

      <section class='p-5'>
        <div class='container'>
          <div class='row g-5'>
            <div class='col-md'>
              <h2 class='text-center mb-4'>Contact info</h2>
              <ul class='list-group list-group-flush lead'>
                <li class='list-group-item'>
                  <span class='fw-bold'>Location :</span> Romania, Bucharest
                  Sector 5
                </li>{' '}
                <li class='list-group-item'>
                  <span class='fw-bold'>Phone :</span> 07346667777
                </li>{' '}
                <li class='list-group-item'>
                  <span class='fw-bold'>Email :</span> elena.gheorghe@gmail
                </li>
                <li class='list-group-item'>
                  <span class='fw-bold'>Company : </span>Travel Free
                </li>
                <li class='list-group-item'>
                  <span class='fw-bold'>Country :</span> Romania
                </li>
              </ul>
            </div>
            <div class='col-md'>
              <div id='map'></div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}

      <footer class='p-5 bg-dark text-white text-center position-relative'>
        <div class='container'>
          <p class='lead'>Copyright &copy; 2021 catal</p>
          <a href='#' class='position-absolute bottom-0 end-0 p-5'>
            <i class='bi bi-arrow-up-circle h1'></i>
          </a>
        </div>
      </footer>

      {/* <!-- Modal --> */}

      <div
        class='modal fade'
        id='enroll'
        tabindex='-1'
        aria-labelledby='enrollLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='enrollLabel'>
                Sign Up To SuperCatal
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <p class='lead'>
                Fill out the supercatal form and become a real supercatal!
              </p>
              <form>
                <div class='mb-3'>
                  <label for='first-name' class='col-form-label'>
                    First Name
                  </label>
                  <input type='text' class='form-control' id='first-name' />
                </div>
              </form>
              <form>
                <div class='mb-3'>
                  <label for='first-name' class='col-form-label'>
                    Email
                  </label>
                  <input type='text' class='form-control' id='first-name' />
                </div>
              </form>
              <form>
                <div class='mb-3'>
                  <label for='first-name' class='col-form-label'>
                    Phone Number
                  </label>
                  <input type='text' class='form-control' id='first-name' />
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Submit
              </button>
              <button type='button' class='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
