import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from '../src/Pages/student/Home'
import Courses from '../src/Pages/student/Courses'
import CourseDetail from '../src/Pages/student/CourseDetail'
import MyEnrollement from '../src/Pages/student/MyEnrollement'
import Player from '../src/Pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './Pages/educator/Educator'
import Dashboard from './Pages/educator/Dashboard'
import Add_Course from './Pages/educator/Add_Course'
import My_Course from './Pages/educator/My_Course'
import Student_Enrolled from './Pages/educator/Student_Enrolled'
import Navbar from './components/student/Navbar'

const App = () => {
  const isEducator=useMatch('/educator/*')
  return (
    <div className='min-h-screen text-default bg-white'>
      {!isEducator && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<Courses/>}/>
        <Route path='/course-list/:input' element={<Courses/>}/>
        <Route path='/course_detail' element={<CourseDetail/>}/>
        <Route path='/course_detail/:input' element={<CourseDetail/>}/>
        <Route path='/my-enrollement' element={<MyEnrollement/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/player/:input' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
          <Route path='educator' element={<Dashboard/>}/>
          <Route path='add-course' element={<Add_Course/>}/>
          <Route path='my-courses' element={<My_Course/>}/>
          <Route path='student-enrolled' element={<Student_Enrolled/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
