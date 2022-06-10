import React, { useState, useEffect } from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


const sliderData = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    name: 'Elena',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores consectetur',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
    name: 'stefania',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores consectetur',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    name: 'andereea',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores consectetur',
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'luminita',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores consectetur',
  },
]

function Sliders() {

   const [people, setPeople] = useState(sliderData)
   const [index, setIndex] = useState(0)

 useEffect(() => {
   const lastIndex = people.length - 1
   if (index < 0) {
     setIndex(lastIndex)
   }
   if (index > lastIndex) {
     setIndex(0)
   }
 }, [index, people])

 useEffect(() => {
   let slider = setInterval(() => {
     setIndex(index - 1)
   }, 5000)
   return () => clearInterval(slider)
 })



  return (
  
      <div className=' section py-3'>
        <div className='title '>
          <h2>Super catal</h2>
          <p>
            Super catal is a beautifull and smart animal, that's obviously
            smarter than human!
          </p>
        </div>
        <div className='section-center bg-dark '>
          {people.map((person, personIndex) => {
            const { id, image, name, info } = person
            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <article className={position}>
                <img src={image} alt='' className='person-img' />
                <h3 className='text-light'>{name}</h3>

                <p className='text'>{info}</p>
                <div className='py-2'>
                  <a href='' className='text-primary px-1 '>
                    <FaTwitter />
                  </a>
                  <a href='' className='text-primary px-1 '>
                    <FaFacebookF />
                  </a>
                  <a href='' className='text-primary px-1 '>
                    <FaLinkedinIn />
                  </a>
                  <a href='' className='text-primary px-1 '>
                    <FaInstagram />
                  </a>
                </div>
              </article>
            )
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className='next' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
 
  )
 
}

// const Slider = ({ name, image, info, id }) => {
//   return (
//     <>
//       <div class='col-md-6 col-lg-3'>
//         <div class='card bg-light'>
//           <div class='card-body text-center'>
//             <img class='rounded-circle mb-3' src={image} alt={name} />
//             <h3 class='card-title mb-3'>{name}</h3>
//             <p class='card-text'>{info}</p>
//             <a href='' className='text-dark px-1'>
//               <FaTwitter />
//             </a>
//             <a href='' className='text-dark px-1'>
//               <FaFacebookF />
//             </a>
//             <a href='' className='text-dark px-1'>
//               <FaLinkedinIn />
//             </a>
//             <a href='' className='text-dark px-1'>
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default Sliders
