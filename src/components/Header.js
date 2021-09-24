import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, toggleAddBtn, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && 
      <Button color={showAdd ? 'Red' : 'Blue'} text={showAdd ? 'Close' : 'Add'} toggleAddBtn={toggleAddBtn}/>
      }
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
