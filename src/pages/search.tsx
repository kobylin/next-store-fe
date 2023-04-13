import ProductSearch from "@/components/ProductSearch/ProductSearch";
import Head from "next/head";
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_PATH,
  GET_PRODUCT_ATTRIBUTES_CATEGORIES,
  SEARCH_PRODUCTS_QUERY,
} from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";
import { SortOrder } from "@/components/SortingOrder/SortingOrder";
import { useRouter } from "next/router";

const PAGE_SIZE = 20;
function SearchPage({}) {
  const router = useRouter();
  const [sortingOrder, setSortingOrder] = useState<SortOrder>(
    SortOrder.CHEAP_TO_EXPENSIVE
  );
  const [searchString, setSearchString] = useState("");
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  let attributesFilter = [];
  try {
    attributesFilter = JSON.parse(router.query.attributes as string);
    if (!Array.isArray(attributesFilter)) {
      attributesFilter = [];
    }
  } catch {}

  const productCategory = router.query.category ?? "";

  const {
    data: productsData,
    loading,
    fetchMore: fetchMoreProducts,
  } = useQuery(SEARCH_PRODUCTS_QUERY, {
    variables: {
      count: PAGE_SIZE,
      offset: 0,
      orderBy: sortingOrder,
      search: searchString,
      attributes: attributesFilter,
      category: productCategory,
    },
  });

  const { data: attributes } = useQuery(GET_PRODUCT_ATTRIBUTES_CATEGORIES, {
    variables: {
      category: productCategory,
    },
  });

  const { data: categoryPath } = useQuery(GET_CATEGORY_PATH, {
    variables: {
      category: productCategory,
    },
  });

  const { data: categories } = useQuery(GET_ALL_CATEGORIES);

  const meta = productsData?.products?.meta ?? null;

  return (
    <>
      <Head>
        <title>Next JS Store | Search </title>
        <meta name="description" content="Next JS Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductSearch
        products={productsData?.products?.products || []}
        sortingOrder={sortingOrder}
        onChangeSortingOrder={useCallback(
          (value) => setSortingOrder(value as SortOrder),
          []
        )}
        searchString={searchString}
        onChangeSearchString={useCallback((value) => {
          setSearchString(value);
        }, [])}
        isLoading={loading}
        isFetchingMore={isFetchingMore}
        meta={meta}
        categories={categories?.allCategories ?? []}
        attributesCategories={attributes?.productAttributesCategories ?? []}
        selectedAttributesCategories={attributesFilter}
        categoryPath={categoryPath?.categoryPath}
        onLoadMoreClick={() => {
          setIsFetchingMore(true);
          fetchMoreProducts({
            variables: {
              offset: meta?.offset + PAGE_SIZE,
            },
            updateQuery: (currentProducts, { fetchMoreResult }) => {
              return {
                products: {
                  products: [
                    ...(currentProducts.products?.products ?? []),
                    ...(fetchMoreResult?.products?.products ?? []),
                  ],
                  meta: fetchMoreResult?.products?.meta,
                },
              };
            },
          }).finally(() => {
            setIsFetchingMore(false);
          });
        }}
        onChangeAttributesCategories={(v) => {
          router.push(
            {
              pathname: router.pathname,
              query: {
                ...router.query,
                attributes: JSON.stringify(v),
              },
            },
            undefined,
            { shallow: true }
          );
        }}
        onChangeCategory={(category) => {
          router.push(
            {
              pathname: router.pathname,
              query: {
                category: category,
              },
            },
            undefined,
            { shallow: true }
          );
        }}
      />
    </>
  );
}

export default SearchPage;
