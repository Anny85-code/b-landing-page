import React from "react";
import ToggleDropdown from "../toggleDropDown/ToggleDropDown";
import plus from "../../../../public/svgs/add-circle-frequently.svg";
import minus from "../../../../public/svgs/minus-cirlce.svg";
import styles from "./FrequentlyAskedQuestion.module.scss";

const FrequentlyAskedMobile = () => {
  return (
    <div className={`${styles.mobile_main_cont} my-[30px]`}>
      <ToggleDropdown
        headerText="Will I be learning video editing only?"
        plusIcon={plus}
        minusIcon={minus}
        text=" No, it's not just video editing, it's all you need to consistently create content for your brand, coming up with video ideas, shooting quality videos and editing these videos to be engaging to your audience."
      />
      <ToggleDropdown
        headerText="Can I learn how to edit pictures too?"
        plusIcon={plus}
        minusIcon={minus}
        text="The knowledge yoy gain from learning how to edit your videos could be applicable to editing your pictures. However the classes focuses on the video aspect of editing and not picture editing."
      />
      <ToggleDropdown
        headerText="Can I edit with my phone?"
        z
        plusIcon={plus}
        minusIcon={minus}
        text=" Yes, just your phone is what you need to edit engaging videos for your business."
      />
      <ToggleDropdown
        headerText="I hope I won't be charged extra? "
        plusIcon={plus}
        minusIcon={minus}
        text="No, it's just a one time fee of  ₦2,000 to become a master content creator for your brand."
      />
      <ToggleDropdown
        headerText="Where will the training take place? "
        plusIcon={plus}
        minusIcon={minus}
        text="It will take place on Whatsapp, However we have created a backup of all the trainings on Telegram in case anything happens ti your Whatsapp."
      />
      <ToggleDropdown
        headerText="Will I become a professional video editor after the training? "
        plusIcon={plus}
        minusIcon={minus}
        text="You will learn from this class all that you need to know about editing videos for your brand."
      />
    </div>
  );
};

export default FrequentlyAskedMobile;
