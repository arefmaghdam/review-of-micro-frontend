import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const MFProvider = () => {
  return (
    <div className={styles.flexContainer}>
      <div>
        <h3>Micro Frontend Contents</h3>
        <Link href="/components/git/what-is-micro-frontend">
          what-is-micro-frontend?
        </Link>
      </div>
    </div>
  );
};

export default MFProvider;
