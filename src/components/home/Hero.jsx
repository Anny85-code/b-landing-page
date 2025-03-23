import React from 'react';
import Image from 'next/image';
import image from '../../../public/svgs/image.svg';
import lines from '../../../public/images/b-angle.jpg';
import bottomI from '../../../public/svgs/hero-b.svg';

const Hero = () => {
  return (
    <div className="font-Montserrat pt-[50px]">
      <div>
        <h1 className="md:text-[50px] text-[20px] text-[#000] text-center font-bold">
          Become a powerful content creator and edit those videos like a pro;
          turn your videos into sales machine for your businesses
        </h1>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div className="flex md:mt-[150px] mt-[100px]">
          <Image
            src={image}
            height={200}
            width={200}
            alt="icon"
            className="md:h-[200px] md:w-[200px] h-[80px] w-[80px]"
          />
          <Image
            src={image}
            height={100}
            width={100}
            alt="icon"
            className="md:mt-[-60px] mt-[-15px] md:ml-[-80px] ml-[-25px] md:h-[100px] md:w-[100px] h-[40px] w-[40px]"
          />
        </div>
        <div>
          <Image
            src={lines}
            alt="icon"
            className="md:w-[400px] md:h-[400px] h-[200px] w-[200px]"
          />
        </div>
        <div className="flex md:mt-[-100px] mt-[-50px]">
          <Image
            src={image}
            height={200}
            width={200}
            alt="icon"
            className="md:h-[200px] md:w-[200px] h-[80px] w-[80px]"
          />
          <Image
            src={image}
            height={100}
            width={100}
            alt="icon"
            className="md:mt-[-60px] mt-[-15px] md:ml-[-80px] ml-[-25px] md:h-[100px] md:w-[100px] h-[40px] w-[40px]"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[50px]">
        <Image
          src={bottomI}
          alt="icon"
          className="md:w-[291px] md:h-[68px] w-[100px] h-[30px]"
        />
        <p
          className="
        md:text-[25px] text-[10px] font-bold text-[#000] text-center"
        >
          …and even overcome Camera Shyness all from the comfort of your home.
        </p>
        <Image
          src={bottomI}
          alt="icon"
          className="md:w-[291px] md:h-[68px] w-[100px] h-[30px]"
        />
      </div>
    </div>
  );
}

export default Hero;
