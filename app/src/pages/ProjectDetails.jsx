import React from 'react'
import PageBanner from '../components/PageBanner'
import { NavLink,Link, useParams } from 'react-router-dom'
import { contactInfo, projects } from '../utils/data';
import pattern from "../assets/backgrounds/pattern.jpg"
import Button from '../components/Button'
import { Mail, MoveRight, PhoneCall } from 'lucide-react'

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.filter((project) => project.slug === slug)
  return (
    <div>
        <PageBanner title="Project Details" />
        <div className="mt-10 mx-10 lg:mx-30">
          <div className="w-full h-[400px] overflow-hidden rounded-md">
            <img src={project[0].image} alt="project-banner-image" className='w-full h-full object-cover' />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <h4 className='text-4xl font-extrabold'>Here to Know About the Project</h4>
                <p className="text-header-text">{project[0].about}</p>
                <div className="mt-10">
                  <h4 className="text-4xl">Challenge and solution</h4>
                  <p className="text-header-text mt-4">{project[0].challengeSolution}</p>
                </div>
                <div className="rounded-md bg-muted/40 px-6 py-8">
                  <div className="flex gap-2 mb-2">
                    <p className="text-text font-semibold">Demo Link:</p>
                    <a href={`https://${project[0].demoLink}`} target="_blank" className="text-header-text">{project[0].demoLink}</a>
                  </div>
                  {project[0].accounts.map((account,index) => (
                    <div key={index} className="flex flex-col gap-2 mb-2">
                      <div className="flex flex-row gap-2">
                        <p className="text-text font-semibold">Role: <span className="text-header-text font-light">{account.role}</span></p>
                        <p className="text-text font-semibold">Password: <span className="text-header-text font-light">{account.password}</span></p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center items-center">
                    <Link to="/contact"><Button className='px-4 py-4' hoverBg='black'>Request Live Demo</Button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-md bg-muted/40 w-full h-auto lg:h-74 py-10 px-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row lg:flex-col gap-1">
                    <p className="text-header-text gap-1">Client:</p>
                    <p className='font-bold'>{project[0].client}</p>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-1">
                    <p className="text-header-text">Category:</p>
                    <p className='font-bold'>{project[0].category}</p>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-1">
                    <p className="text-header-text">Project Value:</p>
                    <p className='font-semibold'>{project[0].value}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full h-[400px] relative">
                <img src={pattern} alt="pattern" className="absolute rounded-sm w-full h-full inset-0 object-cover" />
                <div className="flex flex-col gap-4 absolute inset-0 z-10 px-8 py-10">
                  <div className="bg-transparent shrink-0 w-24 h-24 p-2 flex items-center justify-center rounded-full border border-primary">
                      <div className="p-4 rounded-full bg-primary text-white flex items-center justify-center">
                        <PhoneCall size={32} />
                      </div>
                  </div>
                  <h4 className="text-white capitalize">Call us anytime</h4>
                  <h2 className="text-white">{contactInfo.phone.value}</h2>
                  <div className="flex items-center flex-row gap-2">
                    <Mail size={32} className='text-primary' />
                    <p className="text-md text-white">{contactInfo.email.value}</p>
                  </div>
                  <Link to="/contact"><Button icon={MoveRight} className='px-4 py-4' hoverBg='black' iconPosition='right'>Contact Us</Button></Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}
