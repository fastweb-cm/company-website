import bg from "../assets/backgrounds/bg.jpg"
import Button from "./Button"

export default function HomeCTA() {
  return (
    <div className="relative w-full h-[400px] bg-primary flex items-center justify-center overflow-hidden">
        <img src={bg} alt="ctabanner" className="absolute inset-0 w-full h-full object-cover group" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-4">
            <h3 className="text-4xl md:text-6xl md:max-w-2xl font-extrabold text-white">IT Solutions & Services at your Fingertips</h3>
            <Button variant="black" hoverBg="primary" className="px-12 rounded-none py-4">Get in Touch</Button>
        </div>
    </div>
  )
}
