import React from 'react'
import DownloadButton from '../Components/DownloadButton'
import './ResumeUpperContainer.css'

const ResumeUpperContainer = () => {
  return (
    <div className='resume-upper-container'>
         <h1 className='header-text flow-text'>Résumé</h1>
        <DownloadButton/>
    </div>
  )
}

export default ResumeUpperContainer