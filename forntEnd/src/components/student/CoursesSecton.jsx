import React from 'react'
import { Link } from 'react-router-dom'
const CoursesSecton = () => {
  return (
    <div>
      <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800 ' >Learn from the best</h2>
      <p className='md:text-base text-sm text-gray-500 mt-3 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3  rounded'>Show All Courses</Link>
    </div>
    </div>
  )
}

export default CoursesSecton
