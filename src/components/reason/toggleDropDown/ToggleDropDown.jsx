"use client";

import React from "react";
import Image from "next/image";
import styles from "./ToggleDropDown.module.scss";

const ToggleDropdown = ({ plusIcon, minusIcon, text, headerText }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const handleToggleDropdownPlus = () => {
    setDropdown(!dropdown);
  };

  const handleToggleDropdownMinus = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.main_cont}>
      <ul className={styles.cont_ul}>
        <li>{headerText}</li>
        <li>
          <Image
            src={plusIcon}
            height={24}
            width={24}
            alt="plus icon"
            onClick={handleToggleDropdownPlus}
            className={`${dropdown ? styles.hide : ""}`}
          />
          <Image
            src={minusIcon}
            height={24}
            width={24}
            alt="plus icon"
            id={` ${styles.minus_icon}`}
            onClick={handleToggleDropdownMinus}
            className={`${dropdown ? "" : styles.hide}`}
          />
        </li>
      </ul>
      {dropdown && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default ToggleDropdown;
