import React from "react";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import styles from "./basicComponents.module.css";

export default function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <button className={styles.backButton} onClick={handleBack}>
      <WestIcon className={styles.backButtonIcon} />
    </button>
  );
}
