import Button from "../components/Button"
import PageBanner from "../components/PageBanner"
import SectionHeaderText from "../components/SectionHeaderText"
import Input from "../components/UI/Input"
import { PhoneCall } from "lucide-react"
import { contactInfo } from "../utils/data"

export default function Contact() {
  return (
    <div>
        <PageBanner title="Contact Us"/>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">
            <div className="flex flex-col gap-4">
                <SectionHeaderText title="SEND US EMAIL" />
                <h2 className="text-3xl md:text-5xl">Feel Free to Write</h2>
                <form action="">
                    <div className="flex flex-row gap-4 items-center mb-2">
                        <Input type="text" name="name" placeholder="Enter Name" />
                        <Input type="email" name="email" placeholder="Enter Email" />
                    </div>
                    <div className="flex flex-row gap-4 items-center mb-4">
                        <Input type="text" name="subject" placeholder="Enter Subject" />
                        <Input type="text" name="phone" placeholder="Enter Phone" />
                    </div>
                    <textarea name="message" rows={6} className="px-4 w-full border border-muted focus:outline-none" placeholder="Enter Message"></textarea>
                    <div className="grid grid-cols-4 gap-2">
                        <Button className="col-span-2 rounded-none py-4 text-center" variant="black" hoverBg="primary">SEND MESSAGE</Button>
                        <Button className="col-span-1 rounded-none py-4 text-center"variant="black" hoverBg="primary" >RESET</Button>
                    </div>
                </form>
            </div>
            <div className="flex-flex-col gap-4">
                <SectionHeaderText title="NEED ANY HELP?" />
                <h2 className="text-3xl md:text-5xl">Get in Touch with Us</h2>
                <p className="text-header-text text-start">
                    We are here to help your business grow with innovative IT solutions. Reach out to us with any questions, project ideas, or support requests, and our team will get back to you promptly.
                </p>
                <div className="flex gap-4 flex-col mt-4">
                {Object.entries(contactInfo).map(([, info], index) => (
                    <div key={index} className="flex gap-6 items-center">
                        {/* Icon */}
                        <div className="flex items-center hover:bg-black duration-500 ease-in-out justify-center rounded-none bg-primary text-4xl w-20 h-20 text-white">
                            {info.icon}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-2">
                        <h4 className="">{info.title}</h4>
                        <p className="text-header-text text-xl font-semibold">
                            {info.value}
                        </p>
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div>
    </div>
  )
}
