import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCards from './CourseCard.jsx'
const CoursesSecton = () => {
  const {allCourses}=useContext(AppContext)
  return (
    <div>
      <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800 ' >Learn from the best</h2>
      <p className='md:text-base text-sm text-gray-500 mt-3 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
      <div className='grid sm:grid-rows-auto grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,4).map((course,index)=>
          <CourseCards key={index} course={course}/>
        )}
      </div>
      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3  rounded'>Show All Courses</Link>
    </div>
    </div>
  )
}

export default CoursesSecton
