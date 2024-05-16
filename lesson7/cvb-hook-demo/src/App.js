import React from 'react'
import CvbUseState from './components/CvbUseState'
import CvbContext from './components/CvbContext'
import CvbUseEffect from './components/CvbUseEffect'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 ClassName= 'text-center'> Cao Văn Bình</h1>
          <hr/>
          <CvbUseState />
          <hr/>
          <CvbUseEffect />
          <hr/>
          <CvbContext />
    </div>
  )
}
