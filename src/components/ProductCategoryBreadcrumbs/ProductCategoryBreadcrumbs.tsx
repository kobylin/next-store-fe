import Link from "next/link";
import { Breadcrumb } from "antd";
import React from "react";
import { ProductCategory } from "@/graphql/codegen/graphql";

export default function ProductCategoryBreadcrumbs({
  categoryPath,
}: {
  categoryPath: ProductCategory[];
}) {
  return (
    <Breadcrumb
      items={
        categoryPath && categoryPath.length > 0
          ? [
              {
                title: (
                  <Link
                    href={{
                      pathname: "/search",
                      query: {
                        category: null,
                      },
                    }}
                  >
                    All products
                  </Link>
                ),
              },
              ...categoryPath.map((category, index) => {
                return {
                  title:
                    index === categoryPath.length - 1 ? (
                      category.name
                    ) : (
                      <Link
                        href={{
                          pathname: "/search",
                          query: {
                            category: category.key,
                          },
                        }}
                      >
                        {category.name}
                      </Link>
                    ),
                };
              }),
            ]
          : [
              {
                title: "All products",
              },
            ]
      }
    />
  );
}
