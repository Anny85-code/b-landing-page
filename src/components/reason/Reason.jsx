import React from 'react';
import style from './Reason.module.scss';
import Image from 'next/image';
import whatsapp from '../../../public/svgs/whatsapp.svg';
import FrequentlyAskedMobile from './frequentlyAskedQuestion/FrequentlyAskedQuestion';

const Reason = () => {
  return (
    <div
      className={`${style.cont} flex flex-col items-center md:py-[100px] md:px-[100px] px-[10px] py-[30px] gap-[40px] font-bold text-[18px]`}
    >
      <h1 className="md:text-[50px] text-[25px] font-bold w-[70%] text-center">
        THE ONLY REASON WHY YOU CAN MISS THIS CLASS
      </h1>
      <p className="text-center">
        IN OUR 15TH EDITION OF BrainREELS CHALLENGE WE'RE ONLY TAKING BUSINESS
        OWNERS WHO HAVE BEEN STRUGGLING WITH CONSISTENTLY MAKING CONTENT FOR
        THEIR BRAND.{" "}
      </p>
      <p className="text-center">
        WE'RE GOING TO GUIDE YOU FROM BEING A BEGINNER WITH NO CONTENT CREATION
        KNOWLEDGE TO BEING A PRO THAT POSTS NEW CONTENT EVERYDAY.
      </p>
      <p className="text-center">
        SO IF YOU'RE OKAY WITH HAVING NO CONTENT IDEAS AND EMPTY SOCIAL MEDIA
        PAGE WITH NO CONTENT TO POST, THEN YOU CAN BY ALL MEANS MISS OUR
        BrainREELS CHALLENGE STARTING OUT THIS DAY.
      </p>
      <h2 className="text-center text-[#EEE953] text-[22px] md:text-[34px]">
        Registration ends in 24 hours
      </h2>
      <p className="text-center">
        AND THE NEXT CLASS ISN'T UNTIL SEPTEMBER 2025. I WONDER HOW MUCH YOU
        WILL HAVE MISSED OUT ON BEFORE THEN BECAUSE YOU DON'T KNOW HOW TO CREATE
        CONTENT FOR YOUR BUSINESS.
      </p>
      <button
        type="button"
        className="bg-[#EEE953] text-[#000] md:w-[700px] w-[300px] md:h-[95px] h-[40px] rounded-[35px] font-bold text-[18px] md:text-[25px] my-[30px]"
      >
        JOIN FOR JUST ₦2,000
      </button>
      <ul
        className={`${style.account} px-[20px] py-[10px] w-[350px] md:w-[600px] rounded-[10px]`}
      >
        <li>ACCOUNT: ₦2,000</li>
        <li>ACCOUNT NAME: BRAINCOTECH HUB NIG LTD</li>
        <li>BANK: MONIE POINT</li>
        <li>ACCOUNT NUMBER: 6743040977</li>
      </ul>
      <p className="text-center">
        AFTER COMPLETING THE PAYMENT, CLICK THE BUTTON BELOW TO SHOW PROOF OF
        PAYMENT AND JOIN THE CLASS IMMEDIATELY
      </p>
      <a
        href="https://wa.me/+2349011543260
"
        target="_blank"
      >
        <button
          type="button"
          className="bg-[#EEE953] text-[#000] md:w-[700px] w-[300px] md:h-[95px] h-[40px] rounded-[35px] font-bold text-[18px] md:text-[25px] my-[30px] flex gap-[30px] items-center justify-center"
        >
          Upload proof of payment <Image src={whatsapp} alt="icon" />
        </button>
      </a>
      <div className="w-full">
        <hr />
        <h2 className='text-center text-[30px] md:text-[50px] font-bold'>FAQ</h2>
        <hr />
        <FrequentlyAskedMobile />
      </div>
    </div>
  );
}

export default Reason;
