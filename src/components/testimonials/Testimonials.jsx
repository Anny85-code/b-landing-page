import React from 'react';
import Image from 'next/image';
import testimonialsData from './testimonialsData';
import love from "../../../public/images/new-love.png";
import style from './Testimonial.module.scss';

const Testimonials = () => {
  return (
    <div className="bg-[#716d6d] flex flex-col items-center py-[50px]">
      <span className="text-[#fff] flex md:flex-row flex-col md:gap-[100px] gap-[20px] md:text-[30px] text-[20px] font-semibold text-center">
        <p>27 Classes Previously Done</p>
        <p>5684 Others Have Joined Our BrainReels Class</p>
      </span>
      <h1 className="text-[#fff] text-[22px] md:text-[50px] font-bold md:py-[30px] py-[20px]">
        Testimonials from BrainREELS
      </h1>
      <div className={`${style.cont} grid grid-cols-1 md:grid-cols-2 md:gap-[50px] gap-[10px] my-[20px]`}>
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="flex text-[#3f3d3f] gap-[10px] bg-white md:p-[30px] p-[10px]"
          >
            <Image
              src={item.image}
              alt="images"
              className="md:h-[50px] h-[30px] md:w-[50px] w-[30px] rounded-full"
            />{" "}
            <div className="flex flex-col gap-[10px]">
              <span className="flex md:gap-[50px] gap-[20px]">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.timestamp}</p>
              </span>
              <span className="flex md:gap-[40px] gap-[20px]">
                <p className="md:w-[400px] w-[250px]">{item.desc}</p>
                <Image src={love} alt="love" className="md:h-[15px] h-[10px] md:w-[15px] w-[10px]" />
              </span>

              <span className="flex gap-[40px]">
                <p>Reply</p>
                <p>Hide</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="bg-[#EEE953] text-[#000] md:w-[700px] w-[300px] md:h-[95px] h-[40px] rounded-[35px] font-bold text-[18px] md:text-[25px] my-[30px]"
      >
        JOIN FOR JUST ₦2,000
      </button>
    </div>
  );
}

export default Testimonials;
