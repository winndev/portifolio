import React from 'react'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20'>
      <div className='max-w-screen-xl mx-auto px-5'>
        <div className='relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900 p-12'>
          <div className='text-center mb-12'>
            <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent'>About Me</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <img src={profile_img} alt="Profile" className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg ring-4 ring-blue-300 object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-gray-700">
                <p><span className="font-semibold text-blue-600">Aspiring web developer</span> with foundational experience in crafting <span className="font-semibold text-blue-600">responsive websites</span></p>
                <p><span className="font-semibold text-blue-600">Passionate aspiring web developer</span> dedicated to crafting <span className="font-semibold text-blue-600">websites and interactive applications</span>, eager to grow skills and collaborate on innovative projects.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center transition-all duration-300">
                  <span className="text-2xl">🟦</span>
                  <p className='min-w-[150px] font-medium text-gray-900 dark:text-white'>HTML & CSS</p>
                  <hr className="flex-1 border-none h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{width: '80%'}} />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">80%</span>
                </div>
                <div className="flex gap-4 items-center transition-all duration-300">
                  <span className="text-2xl">⚛️</span>
                  <p className='min-w-[150px] font-medium text-gray-900 dark:text-white'>React JS</p>
                  <hr className="flex-1 border-none h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{width: '50%'}} />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">50%</span>
                </div>
                <div className="flex gap-4 items-center transition-all duration-300">
                  <span className="text-2xl">🟨</span>
                  <p className='min-w-[150px] font-medium text-gray-900 dark:text-white'>JavaScript</p>
                  <hr className="flex-1 border-none h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{width: '75%'}} />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">75%</span>
                </div>
                <div className="flex gap-4 items-center transition-all duration-300">
                  <span className="text-2xl">🚀</span>
                  <p className='min-w-[150px] font-medium text-gray-900 dark:text-white'>Express & NodeJS</p>
                  <hr className="flex-1 border-none h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{width: '50%'}} />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">50%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer text-center">
                <span className="text-4xl">⏳</span>
                <h1 className='text-4xl font-bold text-blue-600'>3+</h1>
                <p className="text-gray-600">YEARS OF EXPERIENCE</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer text-center">
                <span className="text-4xl">📂</span>
                <h1 className='text-4xl font-bold text-green-600'>10+</h1>
                <p className="text-gray-600">PROJECTS COMPLETED</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer text-center">
                <span className="text-4xl">😊</span>
                <h1 className='text-4xl font-bold text-purple-600'>15+</h1>
                <p className="text-gray-600">HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
