import { useMemo } from "react";
import type { DataNode } from "antd/es/tree";
import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Popover, Tree } from "antd";

import { cloneDeep } from "@apollo/client/utilities";
import { ProductCategory } from "@/graphql/codegen/graphql";

type ProductCategoryWithChildren = ProductCategory & {
  children?: ProductCategoryWithChildren[];
};
const fillCategoriesHierarchy = (
  currentLevel: ProductCategoryWithChildren[],
  allCategories: ProductCategoryWithChildren[]
) => {
  for (const currentLevelCategory of currentLevel) {
    currentLevelCategory.children = cloneDeep(
      allCategories.filter((c) => c.parentId === currentLevelCategory.id)
    );

    fillCategoriesHierarchy(currentLevelCategory.children, allCategories);
  }
};

const buildHierarchyTreeFromCategories = (
  categoriesHierarchy: ProductCategoryWithChildren[]
) => {
  const tree: DataNode[] = [];
  for (const category of categoriesHierarchy) {
    tree.push({
      title: category.name,
      key: category.key as string,
      icon: <SmileOutlined />,
      children: buildHierarchyTreeFromCategories(category.children ?? []),
    });
  }

  return tree;
};

export default function ProductCategoriesHierarchy({
  categories,
  onSelect,
}: {
  categories: ProductCategory[];
  onSelect: (value: string | null) => void;
}) {
  const categoriesHierarchy = useMemo(() => {
    const rootCategories = cloneDeep(
      categories.filter((c) => c.parentId === null)
    );

    fillCategoriesHierarchy(rootCategories, categories);

    return rootCategories;
  }, [categories]);

  const treeData = buildHierarchyTreeFromCategories(categoriesHierarchy);

  return (
    <Popover
      content={
        <Tree
          showIcon
          defaultExpandAll
          multiple={false}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
          onSelect={(selectedKeys) => {
            onSelect(selectedKeys?.[0]?.toString() ?? null);
          }}
        />
      }
    >
      <Button type="primary" size="small" color="">
        Categories <DownOutlined />
      </Button>
    </Popover>
  );
}
