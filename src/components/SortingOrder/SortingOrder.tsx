import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./SortingOrder.module.css";

const items: MenvuProps["items"] = [
  {
    key: "rating",
    label: "By rating",
  },
  {
    key: "cheap_to_expensive",
    label: "From cheap to expensive",
  },
  {
    key: "expensive_to_cheap",
    label: "From expensive to cheap",
  },
];
export default function SortingOrder({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key }) => {
          onChange(key);
        },
      }}
    >
      <Space className={styles.selectedValue}>
        {items?.find((it) => ("key" in it ? it.key === value : false))?.label}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
