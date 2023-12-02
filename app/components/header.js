import { Settings } from "feather-icons-react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <div>Logo</div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default Header;
