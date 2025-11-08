import React from 'react'
import bg from "../assets/backgrounds/bg.jpg"
import { PhoneCall } from 'lucide-react'
import SectionHeaderText from './SectionHeaderText'
import Input from './UI/Input'
import Button from './Button'

export default function ContactSection() {
  return (
    <div className="relative">
      {/* Background banner */}
      <div className="relative w-full h-[400px] flex">
        <img src={bg} alt="ctabanner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-6 px-4 w-full -top-70">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                            <SectionHeaderText title="CONTACT US" color='text-white' lineBg='bg-background'/>
                            <h2 className="text-2xl md:text-5xl text-white max-w-full lg:max-w-[250px] text-start">
                                Need an IT Solution?
                            </h2>
                            <p className="text-white max-w-full lg:max-w-[350px] text-start">
                            We provide tailored IT solutions to help your business succeed.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-50 h-60 bg-primary flex flex-col items-center justify-center rounded-none text-white px-4 py-6">
                        <PhoneCall size={64} />
                        <p className="text-white font-bold text-3xl text-center">Service Available</p>
                        <p>(+237 677 196 252)</p>
                    </div>
                </div>
                <div className="bg-muted rounded-md w-full lg:mt-16 h-70 flex items-center justify-center text-white">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3035256576304!2d9.277280873861304!3d4.16060889581319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061331779863a2d%3A0xf4750cae457b7f27!2sMolyko%20Omnisport%20Stadium!5e0!3m2!1sen!2scm!4v1762545070964!5m2!1sen!2scm" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="w-full bg-black rounded-none px-6 py-8 text-white">
                <h2 className="text-white text-3xl mb-4">REQUEST A QUOTE</h2>
                <form className="flex flex-col gap-4 w-full">
                    <Input type="text" placeholder="Enter Your Name" name="name"/>
                    <Input type="email" placeholder="Enter Your Email Address" name="email"/>
                    <Input type="text" placeholder="Phone Number" name="phone"/>
                    <textarea
                    name="message"
                    cols="4"
                    rows="6"
                    className='border border-muted rounded-md focus:outline-none px-2 py-2 w-full'
                    placeholder="Your Message"
                    />
                    <Button className='w-full md:w-1/2 rounded-none px-4 py-6 text-lg'>
                        Send a Message
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
