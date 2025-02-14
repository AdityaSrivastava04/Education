import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';

const CourseDetail = () => {
  const id=useParams()
  const [courseData,setCourseData]=useState(null);
  const [openSections,setOpenSections]=useState({});
  const {allCourses,calculateRating,claCulateCourseDuration, claculateNoOfLecture, calculateChapterTime}=useContext(AppContext)
  const featchCoursesData = async ()=>{
    const findCourse=allCourses.find(course=>course._id===id.input )
    setCourseData(findCourse);
  }
  useEffect(()=>{
    featchCoursesData()
  },[])
  const toggleSection=(index)=>{
    setOpenSections((prev)=>(
      {...prev,[index]: !prev[index],

      }
    ))
  }
  return courseData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start bg-gradient-to-b from-cyan-100/70 justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
      <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-100/70'>
      </div>
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:font-semibold  text-gray-800 '>{courseData.courseTitle}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0,200)}}></p>
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                  <p>{calculateRating(courseData)}</p>
                  <div className='flex'>
                    {[...Array(5)].map((_,i)=>( <img key={i} src={i<Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5'/>))}
                  </div>
                  <p className='text-blue-600'>{courseData.courseRatings.length}Rating</p>
                <p>{courseData.courseRatings.length} Students</p>
                </div>
                <p className='text-sm'>Course By<span className='text-blue-600 underline'>Aditya</span></p>
                <div className='pt-8 text-gray-800'>
                  <h2 className='text-xl font-semibold'>Course Structure</h2>
                  <div className='pt-5'>
                    {courseData.courseContent.map((chapter,index)=>(
                      <div className='border border-gray-300 bg-white mb-2 rounded' key={index}>
                        <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=>toggleSection(index)}>
                          <div className='flex flex-items-center gap-2'>
                            <img src={assets.down_arrow_icon} alt="down arrow" />
                            <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                          </div>
                            <p className=' text-sm md:text-default'>{chapter.chapterContent.length}lecturs- {calculateChapterTime(chapter)}</p>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${openSections[index]?'max-h-96':'max-h-0'}`} >
                          <ul className='list disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                            {chapter.chapterContent.map((lecture,i)=>(
                              <li key={i} className='flex items-start gap-2 py-1'>
                                <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1' />
                                <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                                  <p>{lecture.lectureTitle}</p>
                                  <div className='flex gap-2'>
                                    {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                                    <p>{humanizeDuration(lecture.lectureDuration*60*1000,{units:['h','m']})}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      </div>
      <div></div>
    </div>
    </>
  ): <Loading/>
}

export default CourseDetail
