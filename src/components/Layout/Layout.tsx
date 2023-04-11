import styles from "./Layout.module.css";
import { ReactNode } from "react";
import { Menu } from "antd";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={["2"]}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
