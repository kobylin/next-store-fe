import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import styles from "./SortingOrder.module.css";
import { memo } from "react";

export enum SortOrder {
  RATING = "rating",
  CHEAP_TO_EXPENSIVE = "cheap_to_expensive",
  EXPENSIVE_TO_CHEAP = "expensive_to_cheap",
}

const items: MenuProps["items"] = [
  {
    key: SortOrder.RATING,
    label: "By rating",
  },
  {
    key: SortOrder.CHEAP_TO_EXPENSIVE,
    label: "From cheap to expensive",
  },
  {
    key: SortOrder.EXPENSIVE_TO_CHEAP,
    label: "From expensive to cheap",
  },
];
function SortingOrder({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  // @ts-ignore
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
        {
          (
            items?.find((it) =>
              it && "key" in it ? it.key === value : false
            ) as any
          )?.label
        }
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}

export default memo(SortingOrder);
