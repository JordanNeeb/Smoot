"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "feather-icons-react";

const Form = () => {
  const [measurment, setMeasurment] = useState(null);
  const [conversion, setConversion] = useState({
    feet: null,
    inches: null,
    numerator: null,
    denominator: null,
  });

  const convert = () => {
    const float = measurment * 0.0393701;
    const whole = Math.floor(float);
    const remainder = (float % 1).toFixed(4);
    let feet = Math.floor(whole / 12);
    let inches = whole - feet * 12;
    let numerator = Math.round(remainder * 16);
    let denominator = 16;

    while (numerator % 2 == 0 && denominator > 2) {
      numerator = numerator / 2;
      denominator = denominator / 2;
    }

    if (numerator === denominator) {
      numerator = null;
      denominator = null;
      inches++;
    }

    if (inches === 12) {
      inches = null;
      feet++;
    }

    setConversion({ feet, inches, numerator, denominator });
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex justify-center text-5xl text-cyan-800 mb-10 h-12">
        {conversion.feet ? <span>{conversion.feet}'</span> : null}
        <span>&nbsp;</span>
        {conversion.inches ? <span>{conversion.inches}</span> : null}
        {conversion.numerator ? (
          <span className="text-3xl font-semibold">
            <sup>{conversion.numerator}</sup>&frasl;
            <sub>{conversion.denominator}</sub>
          </span>
        ) : null}
        {conversion.numerator || conversion.inches ? <span>"</span> : null}
      </div>
      <div>
        <span className="block mb-2 pl-0.5 text-xs font-bold text-gray-500 uppercase">
          Measurment
        </span>
        <input
          type="number"
          id="measurment"
          className=" mb-4 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
          onChange={(e) => setMeasurment(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-around font-bold text-gray-500 text-xs uppercase items-center">
        <span>millimeters</span>
        <ArrowRight />
        <span>feet</span>
      </div>
      <button
        onClick={convert}
        className="mt-10 block w-full p-2.5 bg-cyan-800 text-white uppercase rounded-lg text-sm font-medium"
      >
        Convert
      </button>
    </div>
  );
};

export default Form;
