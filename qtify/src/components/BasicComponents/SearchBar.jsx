import SearchIcon from "@mui/icons-material/Search";
import styles from "./basicComponents.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchButton}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </div>
  );
};
