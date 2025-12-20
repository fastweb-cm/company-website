import React from 'react'
import HomeProjects from '../components/HomeProjects'
import PageBanner from '../components/PageBanner'
import Testimonial from '../components/Testimonial'
import SectionHeaderText from '../components/SectionHeaderText'

export default function Project() {
  return (
    <div>
        <PageBanner title="Our Projects" />
        <h4 className="text-center my-10">
            <SectionHeaderText title={"Recently Completed Work"} />
        </h4>
        <HomeProjects show={false} />
        <div className="mt-10">
            <Testimonial />
        </div>
    </div>
  )
}
