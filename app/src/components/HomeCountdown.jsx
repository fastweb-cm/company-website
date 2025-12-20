import { countdownData } from "../utils/data";
import iconlines from "../assets/backgrounds/iconlines.png";
import CountUp from "react-countup";

export default function HomeCountdown() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
      {countdownData.map((data, index) => (
        <div
          key={index}
          className="relative w-full h-[300px] bg-background shadow-md overflow-hidden group flex items-center justify-center transform group-hover:scale-105"
        >
          {/* Background decorative image */}
          <img
            src={iconlines}
            alt="iconlines"
            className="absolute inset-0 w-full h-full bg-center object-cover z-0"
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-4">
            {/* Icon container with smooth transition */}
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-muted rounded-xl group-hover:bg-primary group-hover:rounded-full transition-all duration-100 ease-in-out">
              <data.icon
                size={48}
                className="text-primary group-hover:text-secondary transition-colors duration-500"
              />
            </div>

            {/* Countdown number */}
            <h4 className="text-4xl font-semibold flex items-center gap-1">
              <CountUp start={0} end={data.value} duration={3} suffix={data.suffix}/>
            </h4>

            {/* Label */}
            <div className="bg-primary text-white px-6 py-3 rounded-none uppercase tracking-wide text-sm">
              {data.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
