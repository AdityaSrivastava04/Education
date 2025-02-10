import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const Testimonials = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium  text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Assumenda placeat quo, praesentium temporibus doloremque hic fugiat tempora unde provident optio?</p>
      <div>
        {dummyTestimonial.map((testimonial,index)=>(
          <div className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden' key={index}>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img className='h-12 w-12 rounded-full'src={testimonial.image} alt={testimonial.name} />
              <div className='text-lg font-medium text-gray-800'>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
              <div className='p-5 pb -7'>
                <div className='flex gap=0.5'>
                  {[...Array(5).map((_,i)=>(
                  <img key={i}src={i<Math.floor(testimonial.rating)?assets.star:assets.star_blank} alt='star' className='h-5'/>
                  ))]}
                </div>
                <p>{testimonial.feedback}</p>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )}

export default Testimonials
