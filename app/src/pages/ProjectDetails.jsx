import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { Link, useParams } from 'react-router-dom'
import { contactInfo, projects } from '../utils/data';
import pattern from "../assets/backgrounds/pattern.jpg"
import Button from '../components/Button'
import { Mail, MoveRight, PhoneCall } from 'lucide-react'
import Modal from '../components/UI/Modal';
import Input from '../components/UI/Input';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    additional_note: "",
    demo_date: "",
    project_name: slug
  });
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true)
          emailjs.send("service_5ic9aji","template_3dhe5mk", formData, "y5Ldt1FKpF_LTyYJZ")
  
          .then( () => {
              toast.success("Message sent successfully!")
              setLoading(false);
              setShowModal(false)
          })
          .catch( (error) => {
              console.error("Error submitting form:", error);
              toast.error("Failed to send message. Please try again later.");
              setLoading(false);
          })
      }

  if (!project) {
    return <p className="text-center mt-10 text-error">** Project not found. **</p>;
  }

  return (
    <div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Request a Live Demo"
        btn={false}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 md:ga-4">
            <Input label="Full Name" required type="text" onChange={handleChange} name="from_name"/>
            <Input required type="hidden" name="project_name" onChange={handleChange} value={slug}/>
            <div className="flex flex-col md:flex-row  items center gap-4">
              <Input label="Email Address" required type="email" name="reply_to" onChange={handleChange}/>
              <Input label="Phone Number" required type="tel" name="phone" onChange={handleChange}/>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input label="Company / Organisation" type="text" name="company_name" onChange={handleChange}/>
              <Input label="Preferred Demo Date & Time" required  type="datetime-local" name="demo_date" onChange={handleChange}/>
            </div>
            <div className="flex flex-col">
              <label className='text-sm font-medium text-header-text mx-1' htmlFor="message">Additional Note</label>
              <textarea name="additional_note" onChange={handleChange} className='border border-muted rounded-md focus:outline-none px-2 py-2 w-full'
              cols="30"></textarea>
            </div>
            <Button loading={loading} type="submit" hoverBg='black'>Submit Request</Button>
          </div>
        </form>
      </Modal>

      <PageBanner title="Project Details" />
      <div className="mt-10 mx-10 lg:mx-30">
        <div className="w-full h-[400px] overflow-hidden rounded-md">
          <img src={project.image} alt="project-banner-image" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <h4 className="text-4xl font-extrabold">Here to Know About the Project</h4>
              <p className="text-header-text">{project.about}</p>

              <div className="mt-10">
                <h4 className="text-4xl">Challenge and solution</h4>
                <p className="text-header-text mt-4">{project.challengeSolution}</p>
              </div>

              <div className="rounded-md bg-muted/40 px-6 py-8">
                <div className="flex gap-2 mb-2">
                  <p className="text-text font-semibold">Demo Link:</p>
                  <a href={`https://${project.demoLink}`} target="_blank" rel="noopener noreferrer" className="text-header-text">
                    {project.demoLink}
                  </a>
                </div>

                {project.accounts.map((account, index) => (
                  <div key={index} className="flex flex-col gap-2 mb-2">
                    <div className="flex flex-row gap-2">
                      <p className="text-text font-semibold">
                        Role: <span className="text-header-text font-light">{account.role}</span>
                      </p>
                      <p className="text-text font-semibold">
                        Password: <span className="text-header-text font-light">{account.password}</span>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center items-center">
                  <Button onClick={() => setShowModal(true)} className="px-4 py-4" hoverBg="black">
                    Request Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-md bg-muted/40 w-full h-auto lg:h-74 py-10 px-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row lg:flex-col gap-1">
                  <p className="text-header-text gap-1">Client:</p>
                  <p className="font-bold">{project.client}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-1">
                  <p className="text-header-text">Category:</p>
                  <p className="font-bold">{project.category}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-1">
                  <p className="text-header-text">Project Value:</p>
                  <p className="font-semibold">{project.value}</p>
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
                  <Mail size={32} className="text-primary" />
                  <p className="text-md text-white">{contactInfo.email.value}</p>
                </div>
                <Link to="/contact">
                  <Button icon={MoveRight} className="px-4 py-4" hoverBg="black" iconPosition="right">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
