import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./Die.css";

const iconMap = {
  one: faDiceOne,
  two: faDiceTwo,
  three: faDiceThree,
  four: faDiceFour,
  five: faDiceFive,
  six: faDiceSix,
};

const Die = ({ face, rolling }) => {
  return (
    <div className="Die">
      <FontAwesomeIcon
        icon={iconMap[face]}
        className={`Die ${rolling && "Die-shaking"}`}
      />
    </div>
  );
};

export default Die;
