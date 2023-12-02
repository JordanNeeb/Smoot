"use client";

import React, { useState } from "react";
import { Anchor, Settings } from "feather-icons-react";

const Header = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-start text-sky-400">
      <div>
        <Anchor />
      </div>
      <div className="relative">
        <Settings onClick={() => setSettingsIsOpen(!settingsIsOpen)} />
        {settingsIsOpen ? (
          <ul className="absolute">
            <li className="menu-item">
              <button>Menu 1</button>
            </li>
            <li className="menu-item">
              <button>Menu 2</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
