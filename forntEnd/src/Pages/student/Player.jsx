import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const Player = () => {
  const {enrolledCourses,calculateChapterTime}=useContext(AppContext)
  const {courseId}=useParams()
  const[courseData,setCourseData]=useState(null)
  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData.courseContent.map((chapter, index) => (
              <div className='border border-gray-300 bg-white mb-2 rounded' key={index}>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                  <div className='flex flex-items-center gap-2'>
                    <img className={`transforn transition-transform ${openSections[index] ? 'rotate-180' : ''}`} src={assets.down_arrow_icon} alt="down arrow" />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className=' text-sm md:text-default'>{chapter.chapterContent.length}lecturs- {calculateChapterTime(chapter)}</p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'}`} >
                  <ul className='list disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className='flex items-start gap-2 py-1'>
                        <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1' />
                        <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.isPreviewFree && <p onClick={() => setplayerData({ videoId: lecture.lectureUrl.split('/').pop() })} className='text-blue-500 cursor-pointer'>Preview</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
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
        {/* Right Column */}
        <div></div>
      </div>
    </>
  )
}

export default Player
