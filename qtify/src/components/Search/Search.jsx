import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import styles from "./search.module.css";
import navbarStyles from "../Navbar/navbar.module.css";

const Search = ({ page }) => {
  let [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("click");
  };

  return (
    <div>
      <div className={navbarStyles.searchField}>
        <input
          type="search"
          placeholder={
            page === "home"
              ? "Search an Album of Your Choice"
              : "Search a Song of Your Choice"
          }
          value={value}
          onChange={handleInput}
        />
        <div>
          <img
            src={searchIcon}
            alt="Search Icon"
            onClick={handleSubmit}
            className={styles.searchIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
