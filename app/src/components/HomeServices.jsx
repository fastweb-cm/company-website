import SectionHeaderText from './SectionHeaderText'
import { services } from '../utils/data'
import iconlines from "../assets/backgrounds/iconlines.png"
import shape1 from "../assets/backgrounds/shape1.jpg"
import Button from './Button'

export default function HomeServices() {
  return (
    <div className="bg-muted/30 py-16 px-4">
        <div className="grid lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
                <SectionHeaderText title="SERVICES WE OFFER" />
                <h4 className="text-5xl capitalize">we offer full range services</h4>
            </div>
            {services.map((service,index) => (
                <div
                className='relative w-full h-[350px] bg-background rounded-none overflow-hidden group cursor-pointer'
                key={service.title}
                >
                    <img src={iconlines} alt='iconlines' className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0'/>
                    {/* Hover background image */}
                    <img
                    src={shape1}
                    alt="hover-bg"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    {/* Hover background slide-up */}
                    <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="relative flex flex-col items-start justify-center h-full px-4 py-6 gap-8 z-10">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex items-center justify-center h-[100px] w-[100px] rounded-full bg-primary text-white">
                                <service.icon size={48}/>
                            </div>
                            <p className="text-muted/30 text-5xl">{String(index + 1).padStart(2,0)}</p>
                        </div>
                        <h4 className='font-extrabold md:max-w-md text-2xl group-hover:text-secondary'>{service.title}</h4>
                        <p className="text-header-text group-hover:text-muted/70">{service.subtitle}</p>
                    </div>
                </div>
            ))}
            <div className="lg:col-span-2 px-8 py-8 rounded-none bg-background h-full w-full flex flex-col justify-center items-start gap-6">
                <h3 className="text-3xl font-extrabold">Looking for a custom solution?</h3>
                <p className="text-header-text">We can help you build a tailored solution that fits your unique business needs. Contact us today to discuss your project requirements and get a free quote.</p>
                <Button className='uppercase rounded-none px-8 py-4' hoverBg='black'>contact us now</Button>

            </div>
        </div>
    </div>
  )
}
