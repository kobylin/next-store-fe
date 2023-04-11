import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./ProductSearch.module.css";
import SortingOrder from "@/components/SortingOrder/SortingOrder";
import { useState } from "react";

export default function ProductSearch() {
  const [sortingOrder, setSortingOrder] = useState("cheap_to_expensive");

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Input
          size="large"
          placeholder="large size"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className={styles.sortingContainer}>
        <SortingOrder
          value={sortingOrder}
          onChange={(value) => {
            setSortingOrder(value);
          }}
        />
      </div>
      <Row className={styles.content}>
        <Col className={styles.sidebar} span={6}>
          <Input
            size="large"
            placeholder="large size"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col className={styles.products} span={18}>
          <ProductList
            products={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
              { id: 7 },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
