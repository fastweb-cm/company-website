import PageBanner from '../components/PageBanner'
import { contactInfo, services } from '../utils/data'
import { Mail, MoveRight, PhoneCall } from 'lucide-react'
import { NavLink,Link, useParams } from 'react-router-dom'
import Faq from '../components/Faq'
import pattern from "../assets/backgrounds/pattern.jpg"
import Button from '../components/Button'

export default function ServiceDetails() {
  const { slug } = useParams();
  return (
    <div>
      <PageBanner title="Service Details" />
      <div className="px-6 my-10 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.filter((service) => service.slug === slug).map((service,index) => (
          <div key={index} className="col-span-2">
            <div className="flex flex-col gap-6">
              <div className="w-full h-[400px] overflow-hidden rounded-sm">
                <img src={service.banner} alt="service banner image" className='w-full h-full object-cover' />
              </div>
              <h4 className='text-4xl'>{service.title}</h4>
              <p className="text-header-text">
                {service.description}
              </p>
              <h4 className="text-4xl">Frequently Asked Question</h4>
              <p className="text-header-text">
                This section provides clear answers to common questions asked by our customers. It is designed to help you quickly understand our services, processes, and policies without any confusion.
              </p>
              <Faq />
            </div>
          </div>
        ))}
        {/* services category sidebar */}
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <NavLink to={`/services/${service.slug}`} key={index} className={({isActive}) => 
              `w-full h-full shadow-sm group rounded-none flex flex-row items-center justify-between py-6 px-4 cursor-pointer hover:bg-primary
              ${
                isActive ? "bg-primary text-white":"bg-background text-text"
              }`}>
                <h4 className="font-semibold group-hover:text-white!">{service.title}</h4>
                <MoveRight className='group-hover:text-black' size={34} />
              </NavLink>
            ))}
          </div>
          <div className="mt-4 w-full h-[400px] relative">
            <img src={pattern} alt="pattern" className="absolute rounded-sm w-full h-full inset-0 object-cover" />
            <div className="flex flex-col gap-4 absolute inset-0 z-10 px-8 py-10">
              <div className="bg-transparent w-24 h-24 p-2 flex items-center justify-center rounded-full border border-primary">
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
  )
}
