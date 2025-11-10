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
        <HomeAbout show={false} />
        <div className="mt-10"><HomeTeam /></div>
        <div className="mt-10"><HomeCountdown /></div>
        <div className="mt-10"><Testimonial /></div>
    </div>
  )
}
