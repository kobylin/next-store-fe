import styles from "./Layout.module.css";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
