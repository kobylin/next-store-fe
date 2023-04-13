import { Divider, Radio, Typography } from "antd";
import { Checkbox } from "antd";
import styles from "./ProductAttributesFilter.module.css";
import { ProductAttributeCategory } from "@/graphql/codegen/graphql";

export type SelectedAttributeValue = {
  category: string;
  attribute: string;
};

export default function ProductAttributesFilter({
  attributesCategories,
  value = [],
  onChange,
}: {
  attributesCategories: ProductAttributeCategory[];
  value: SelectedAttributeValue[];
  onChange: (value: SelectedAttributeValue[]) => void;
}) {
  return (
    <div className={styles.main}>
      {attributesCategories?.map((cat) => (
        <div key={cat.id} className={styles.category}>
          <Typography.Title level={5} style={{ margin: 0 }}>
            {cat.name}
          </Typography.Title>
          <div className={styles.categoryAttributes}>
            {cat?.attributes?.map((a) => (
              <div key={a.id} className={styles.attribute}>
                <Checkbox
                  checked={
                    !!value.find(
                      (v) => v.category === cat.key && v.attribute === a.key
                    )
                  }
                  onChange={(e) => {
                    const checkedValue = {
                      category: cat.key as string,
                      attribute: a.key as string,
                    };
                    if (e.target.checked) {
                      onChange([...value, checkedValue]);
                    } else {
                      onChange(
                        value.filter(
                          (v) =>
                            !(
                              v.category === checkedValue.category &&
                              v.attribute === checkedValue.attribute
                            )
                        )
                      );
                    }
                  }}
                >
                  {a.name}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
