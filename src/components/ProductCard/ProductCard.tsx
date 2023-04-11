import React from "react";
import { Card } from "antd";
import styles from "./ProductCard.module.css";

const { Meta } = Card;

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card
      className={styles.main}
      size="small"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}
