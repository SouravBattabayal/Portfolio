import React from 'react'
import AboutImg from '../assets/7358653-removebg-preview.png'
import {IoArrowForward} from 'react-icons/io5'

function About() {
    return (
        <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center '>
                    <img className='md:h-80' src={AboutImg} alt="" />

                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis dolore, voluptate aspernatur corporis totam labore, explicabo nulla aperiam ab tempore, fugiat laboriosam eum porro. Doloribus, placeat architecto!</p>
                            </span>
                        </div>


                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis dolore, voluptate aspernatur corporis totam labore, explicabo nulla aperiam ab tempore, fugiat laboriosam eum porro. Doloribus, placeat architecto!</p>
                            </span>
                        </div>


                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Engineer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis dolore, voluptate aspernatur corporis totam labore, explicabo nulla aperiam ab tempore, fugiat laboriosam eum porro. Doloribus, placeat architecto!</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About