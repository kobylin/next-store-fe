import React from "react";
import { Card } from "antd";
import styles from "./ProductCard.module.css";
import Link from "next/link";
import RatingStars from "@/components/RatingStars/RatingStars";
import Image from "next/image";
import { Space, Typography } from "antd";
import { Product } from "@/graphql/codegen/graphql";

const { Text } = Typography;

const { Meta } = Card;

export default function ProductCard({
  product,
  clickable = true,
}: {
  product: Product;
  clickable?: boolean;
}) {
  // @ts-ignore
  const formatter = new Intl.NumberFormat("uk", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "code",
  });

  const cardBody = (
    <Card
      className={styles.main}
      size="small"
      cover={
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            alt="example"
            src={product.imageUrl ?? ""}
          />
        </div>
      }
    >
      <RatingStars rating={product.rating ?? 0} />
      <Meta
        title={product.title}
        description={formatter.format(product.price)}
      />
      <div className={styles.attributesContainer}>
        {product.attributes?.map((a) => (
          <Text type="secondary" key={a.id}>
            {a.category?.name}: {a.name}
          </Text>
        ))}
      </div>
    </Card>
  );

  if (clickable) {
    return <Link href={`/product/${product.id}`}>{cardBody}</Link>;
  }

  return cardBody;
}
