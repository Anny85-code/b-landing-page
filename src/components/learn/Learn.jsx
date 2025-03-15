import React from 'react';
import {learnData, learnData2} from './learnData';
import Image from 'next/image';
import style from './Learn.module.scss';


const Learn = () => {
  return (
    <div
      className={`${style.main} mt-[6px] pt-[50px] flex flex-col items-center`}
    >
      <h1 className="text-center text-[#fff] font-bold md:text-[50px] text-[25px]">
        What You'll Learn
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[50px] gap-[10px] md:my-[20px] my-[50px]">
        {learnData.map((item) => (
          <div key={item.id}>
            <div className="flex gap-[10px] items-center md:w-[526px] w-[300px] h-[166px]">
              <Image
                src={item.image}
                alt="icons"
                className="md:h-[150px] h-[75px] w-[75px] md:w-[150px]"
              />
              <div className="flex flex-col">
                <h2 className="md:font-semibold font-bold md:text-[29px] text-[18px]">
                  {item.title.toLocaleUpperCase()}
                </h2>{" "}
                <p className='text-[12px] md:text-[14px]'>{item.desc}</p>
              </div>
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
      <p className="text-[25px] md:text-[35px] font-bold text-[#fff]">BONUS OFFER</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[50px] gap-[10px] my-[20px]">
        {learnData2.map((item) => (
          <div key={item.id}>
            <div className="flex gap-[10px] items-center md:w-[526px] w-[300px] h-[166px]">
              <Image
                src={item.image}
                alt="icons"
                className="md:h-[150px] h-[75px] w-[75px] md:w-[150px]"
              />
              <div className="flex flex-col">
                <h2 className="md:font-semibold font-bold md:text-[29px] text-[18px]">
                  {item.title.toLocaleUpperCase()}
                </h2>{" "}
                <p className='text-[12px] md:text-[14px]'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
