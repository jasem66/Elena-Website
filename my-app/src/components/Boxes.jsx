import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { ImOffice } from 'react-icons/im'
import { SiVirtualbox } from 'react-icons/si'

const boxData = [
  {
    id: 1,
    title: 'Vitural',
    description: 'Business is sweet',
    icon: <SiVirtualbox />,
   
  },
  {
    id: 2,
    title: 'Hybrid',
    description: 'Business is bitter',
    icon: <ImOffice />,
  },
  {
    id: 3,
    title: 'Person',
    description: 'Business is sour',
    icon: <BsPerson />,
  },
]

function Boxes() {
  return (
    <div className='container-fluid px-5 py-3'>
      <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3  g-4 '>
        {boxData.map((item) => (
          <Box key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

const Box = ({ title, description,icon }) => {
  return (
    <div>
      <div className='col-md'>
        <div className='card bg-dark text-light'>
          <div className='card-body text-center'>
            <div className='h1'>
            {icon}
            </div>
            <h3 className='card-title mb-3'>{title}</h3>
            <p className='card-text'>{description}</p>
            <a href='' className='btn btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boxes
