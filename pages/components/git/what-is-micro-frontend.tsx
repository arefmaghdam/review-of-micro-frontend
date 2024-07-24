import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const History = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // micro frontends are where we take a monolithic application and we divide it into multiple smaller applications,
    // each of these smaller applications are responsible for one distinct major feature of our product
    // as much as possible we try to prevent these different micro applications from communicating with each other directly
    // we make use of micro frontends because it allows multiple different engineering teams to work on the same overal application but in total isolation
    // so if engineering team a or number one make some kind of breaking change to their app it's not going to necessarily break some other part of our application
    // in addition when we start to divide our application out into micro frontends it makes each of these smaller parts a lot easierto understand 
    // and make changes to without accidentally breaking some other part of our app as well
        `}
      />
    </div>
  );
};

export default History;
