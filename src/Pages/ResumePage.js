import React from 'react'
import JobCards from '../Components/JobCards'
import ResumeUpperContainer from '../Components/ResumeUpperContainer'


const ResumePage = () => {
  return (
    <div className='valign center'>
        <ResumeUpperContainer />
        <JobCards />
    </div>
  )
}

export default ResumePage