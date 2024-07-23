import React from "react";
import styles from "../styles/Home.module.css";
import MFProvider from "./components/mf-provider";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1>Micro Frontend Full Course</h1>
          <MFProvider />
        </div>
      </div>
    </>
  );
};

export default Home;
