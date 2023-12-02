"use client";

import React, { useState } from "react";
import { Anchor, Settings } from "feather-icons-react";

const Header = () => {
  //   const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-start text-sky-400">
      <div>
        <Anchor />
      </div>
      {/* <div className="relative">
        <Settings onClick={() => setSettingsIsOpen(!settingsIsOpen)} />
        {settingsIsOpen ? (
          <div className="absolute p-8 right-0 text-center drop-shadow-xl border-solid border-1 border-sky-400 rounded-md">
            <li className="uppercase">Accuracy</li>
            <li>1/2</li>
            <li>1/4</li>
            <li>1/8</li>
            <li>1/16</li>
            <li>1/32</li>
            <li>1/64</li>
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Header;
