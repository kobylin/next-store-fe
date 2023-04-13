import { Spin } from "antd";
import cx from "classnames";
import styles from "./ProgressLoader.module.css";
import React from "react";

const ProgressLoader: React.FC<{
  children: React.ReactNode;
  isLoading: boolean;
}> = ({ children, isLoading }) => {
  return (
    <div className={cx(styles.main)}>
      <div>{children}</div>
      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <Spin />
        </div>
      ) : null}
    </div>
  );
};

export default ProgressLoader;
