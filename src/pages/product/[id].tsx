import apolloClient from "@/graphql/apolloClient";
import { GET_CATEGORY_PATH, GET_PRODUCT_QUERY } from "@/graphql/queries";
import ProductCategoryBreadcrumbs from "@/components/ProductCategoryBreadcrumbs/ProductCategoryBreadcrumbs";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";
import { Product, ProductCategory } from "@/graphql/codegen/graphql";

export default function ProductPage({
  product,
  categoryPath,
}: {
  product: Product;
  categoryPath: ProductCategory[];
}) {
  return (
    <div className={styles.main}>
      <ProductCategoryBreadcrumbs categoryPath={categoryPath} />
      <div className={styles.cardContainer}>
        <ProductCard product={product} clickable={false} />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { id: any } }) {
  const product =
    (
      await apolloClient.query({
        query: GET_PRODUCT_QUERY,
        variables: {
          productId: params.id,
        },
      })
    )?.data?.product ?? null;

  let categoryPath = null;
  if (product) {
    categoryPath =
      (
        await apolloClient.query({
          query: GET_CATEGORY_PATH,
          variables: {
            category: product.categories[0].key,
          },
        })
      )?.data?.categoryPath ?? null;
  }

  return {
    props: {
      product,
      categoryPath,
    },
  };
}
