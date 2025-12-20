import { team } from '../utils/data'
import SectionHeaderText from './SectionHeaderText'

export default function HomeTeam() {
  return (
    <div className='px-4 md:px-8'>
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <SectionHeaderText title="Dedicated Team" />
        <h3 className="font-extrabold text-2xl md:text-5xl text-text uppercase">experts ready to serve</h3>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {team.map((member) => (
          <div
            key={member.name}
            className="relative flex flex-col items-center justify-center gap-4 group overflow-hidden rounded-md
                       transform transition-all duration-500 ease-in-out 
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Card Image */}
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-[400px] z-10 rounded-none object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Top-to-Bottom hover overlay */}
            <div className="absolute inset-0 bg-background/20 pointer-events-none -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Info at bottom */}
            <div className="absolute z-10 -bottom-12 mx-auto bg-background px-20 py-4 text-center transition-all duration-500 group-hover:-translate-y-2 group-hover:py-10">
              <h4 className="text-2xl font-bold">{member.name}</h4>
              <p className="text-header-text">{member.role}</p>
              {/* Social Links: hidden by default */}
              <div className="flex flex-row gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                {member.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-header-text hover:text-text transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
