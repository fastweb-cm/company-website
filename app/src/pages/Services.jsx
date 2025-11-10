import PageBanner from "../components/PageBanner"
import { services } from "../utils/data"
import { MoveRight } from "lucide-react"

export default function Services() {
  return (
    <div>
        <PageBanner title="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mt-20">
            {services.map((service,index) => (
                <div key={index} className="border border-muted p-4">
                    <div className="flex flex-col gap-6 group">
                        <div className="relative h-60 w-full">
                            <img src={service.banner} alt="service banner1" className="w-full h-full object-cover overflow-hidden transition-transform group-hover:scale-105 duration-500 ease-in-out" />
                            <div className="-bottom-2 z-20 left-8 absolute">
                                <div className="flex items-center justify-center bg-primary h-24 w-30">
                                    <service.icon size={32} className="text-white" />
                                </div>
                            </div>
                        </div>
                        <h4>{service.title}</h4>
                        <p className="text-header-text leading-relaxed">{service.subtitle}</p>
                        <div className="flex flex-row gap-2 items-center cursor-pointer group/readmore">
                            <p className="text-header-text">Read More</p>
                            <MoveRight size={24} className="font-bold group-hover/readmore:hidden transition duration-300 ease-in-out"/>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
