import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-green-200 dark:bg-green-900 rounded-full opacity-25 animate-bounce"></div>
      <Navbar/>
      <div id="home"><Hero/></div>
      <div id="about"><About/></div>
      <Contact/>
    </div>
  )
}

export default App

