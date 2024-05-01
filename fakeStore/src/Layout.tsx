import { Outlet } from "react-router-dom";
import SearchBar from "./pages/SearchBar";
import classes from './Layout.module.css'
import pinguin from '/pinguino.webp'

const Layout: React.FC = () => {
  
  return (
    <>
    

      <header className={classes.myHeader}>
        
        <form className={classes.container} action="/items">
        <img className={classes.myLogo} src={pinguin} alt="Cool pinguin"/>
          <input className={classes.myInput} type="search" id="search" placeholder="Look for something cool" />
          <button className={classes.myButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.svg}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </header>
      {/**Outlet goes at the bottom cuz it renders the childern of layout */}
      <Outlet />
    </>
  );
};
export default Layout;
