import React from 'react'
import HomeAbout from '../components/HomeAbout'
import PageBanner from '../components/PageBanner'
import HomeTeam from '../components/HomeTeam'
import HomeCountdown from '../components/HomeCountdown'
import Testimonial from '../components/Testimonial'

export default function About() {
  return (
    <div>
        <PageBanner title="About Us" />
        <div className="px-4 md:px-8">
            <HomeAbout show={false} />
        </div>
        <div className="mt-10"><HomeTeam /></div>
        <div className="px-4 md:px-8">
            <div className="mt-10"><HomeCountdown /></div>
        </div>
        <div className="mt-10"><Testimonial /></div>
    </div>
  )
}
