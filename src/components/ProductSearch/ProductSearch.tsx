import { Input, Row, Col, Breadcrumb, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./ProductSearch.module.css";
import SortingOrder, {
  SortOrder,
} from "@/components/SortingOrder/SortingOrder";
import { useState } from "react";
import ProgressLoader from "@/components/ProgressLoader/ProgressLoader";
import ProductAttributesFilter, {
  SelectedAttributeValue,
} from "@/components/ProductAttributesFilter/ProductAttributesFilter";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCategoriesHierarchy from "@/components/ProductCategoriesHierarchy/ProductCategoriesHierarchy";
import ProductCategoryBreadcrumbs from "@/components/ProductCategoryBreadcrumbs/ProductCategoryBreadcrumbs";
import { Space, Typography } from "antd";
import {
  PaginationMeta,
  Product,
  ProductAttributeCategory,
  ProductCategory,
} from "@/graphql/codegen/graphql";

export default function ProductSearch({
  products,
  sortingOrder,
  searchString,
  categories,
  onChangeSortingOrder,
  onChangeSearchString,
  isLoading,
  attributesCategories,
  selectedAttributesCategories,
  onChangeAttributesCategories,
  categoryPath,
  onChangeCategory,
  onLoadMoreClick,
  isFetchingMore,
  meta,
}: {
  products: Product[];
  sortingOrder: SortOrder;
  searchString: string;
  categories: ProductCategory[];
  onChangeSortingOrder: (value: string) => void;
  onChangeSearchString: (value: string) => void;
  isLoading: boolean;
  attributesCategories: ProductAttributeCategory[];
  selectedAttributesCategories: SelectedAttributeValue[];
  onChangeAttributesCategories: (value: SelectedAttributeValue[]) => void;
  categoryPath: ProductCategory[];
  onChangeCategory: (value: string | null) => void;
  onLoadMoreClick: () => void;
  isFetchingMore: boolean;
  meta: PaginationMeta;
}) {
  return (
    <ProgressLoader isLoading={isLoading}>
      <div className={styles.main}>
        <div className={styles.header}>
          <Input
            size="large"
            placeholder="Search"
            value={searchString}
            prefix={<SearchOutlined />}
            onChange={(e) => {
              onChangeSearchString(e.target.value);
            }}
          />
        </div>
        <div className={styles.categoriesContainer}>
          <ProductCategoriesHierarchy
            categories={categories}
            onSelect={onChangeCategory}
          />
          <div>
            <Typography.Text>
              Total products: {meta?.total ?? 0}
            </Typography.Text>
          </div>
        </div>
        <ProductCategoryBreadcrumbs categoryPath={categoryPath} />
        <div className={styles.sortingContainer}>
          <SortingOrder value={sortingOrder} onChange={onChangeSortingOrder} />
        </div>
        <Row className={styles.content}>
          <Col className={styles.sidebar} span={6}>
            <ProductAttributesFilter
              attributesCategories={attributesCategories}
              value={selectedAttributesCategories}
              onChange={onChangeAttributesCategories}
            />
          </Col>
          <Col className={styles.products} span={18}>
            <ProductList products={products} />
          </Col>
        </Row>
        {meta && products ? (
          <Row justify="center" className={styles.loadMoreButtonContainer}>
            <Button
              size="large"
              type="primary"
              onClick={onLoadMoreClick}
              loading={isFetchingMore}
            >
              Load more ({meta.total - products.length} remains)
            </Button>
          </Row>
        ) : null}
      </div>
    </ProgressLoader>
  );
}
