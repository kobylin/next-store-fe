import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { Row, Col } from "antd";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <Row className={styles.main} gutter={[20, 20]}>
      {products.map((p) => (
        <Col key={p.id} span={6} xs={12} lg={6}>
          <ProductCard key={p.id} product={p} />
        </Col>
      ))}
    </Row>
  );
}
