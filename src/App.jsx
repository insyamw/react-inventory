import { useState } from 'react'
import Title from './components/Title'
import Card from './components/Card'
import Case from './components/Case'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <Case>
      <div className='bg-gray-900 flex items-center justify-center min-h-screen'>
        <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
          <p className='text-white text-2xl text-center mb-5'>Insya Mada Wirda | 12209053</p>
          <Link to="/login" className='block text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Silakan login terlebih dahulu</Link>
        </div>
      </div>
    </Case>
  )
}