import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../utils/data';
import SectionHeaderText from './SectionHeaderText';

const Testimonial = () => {

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-5 text-center">
        <SectionHeaderText title="OUT FEEDBACKS" />
        <h3 className="text text text-3xl  mb-2">{`What they're thinking about us`}</h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="max-w-4xl mx-auto"
          spaceBetween={30}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-background w-full shadow-md p-6 rounded-lg flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-semibold text-text">{testimonial.name}</h4>
                <p className="text-sm text-header-text mb-2">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;