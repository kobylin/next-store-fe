/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Product($productId: String) {\n    product(id: $productId) {\n      id\n      title\n      imageUrl\n      description\n      createdAt\n      rating\n      price\n      categories {\n        id\n        key\n        parentId\n        name\n        createdAt\n      }\n      attributes {\n        id\n        key\n        category {\n          id\n          key\n          name\n          order\n          createdAt\n        }\n        name\n        description\n        createdAt\n      }\n    }\n  }\n": types.ProductDocument,
    "\n  query Products(\n    $count: Int\n    $offset: Int\n    $orderBy: String\n    $search: String\n    $attributes: [AttributeWithCategory!]\n    $category: String\n  ) {\n    products(\n      count: $count\n      offset: $offset\n      orderBy: $orderBy\n      search: $search\n      attributes: $attributes\n      category: $category\n    ) {\n      products {\n        id\n        title\n        imageUrl\n        description\n        createdAt\n        rating\n        price\n        categories {\n          id\n          key\n          parentId\n          name\n          createdAt\n        }\n        attributes {\n          id\n          key\n          category {\n            id\n            key\n            name\n            order\n            createdAt\n          }\n          name\n          description\n          createdAt\n        }\n      }\n      meta {\n        offset\n        count\n        total\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  query ProductAttributesCategories($category: String!) {\n    productAttributesCategories(category: $category) {\n      id\n      key\n      name\n      order\n      createdAt\n      attributes {\n        id\n        key\n        name\n        description\n        createdAt\n      }\n    }\n  }\n": types.ProductAttributesCategoriesDocument,
    "\n  query CategoryPath($category: String!) {\n    categoryPath(category: $category) {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n": types.CategoryPathDocument,
    "\n  query AllCategories {\n    allCategories {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n": types.AllCategoriesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Product($productId: String) {\n    product(id: $productId) {\n      id\n      title\n      imageUrl\n      description\n      createdAt\n      rating\n      price\n      categories {\n        id\n        key\n        parentId\n        name\n        createdAt\n      }\n      attributes {\n        id\n        key\n        category {\n          id\n          key\n          name\n          order\n          createdAt\n        }\n        name\n        description\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query Product($productId: String) {\n    product(id: $productId) {\n      id\n      title\n      imageUrl\n      description\n      createdAt\n      rating\n      price\n      categories {\n        id\n        key\n        parentId\n        name\n        createdAt\n      }\n      attributes {\n        id\n        key\n        category {\n          id\n          key\n          name\n          order\n          createdAt\n        }\n        name\n        description\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Products(\n    $count: Int\n    $offset: Int\n    $orderBy: String\n    $search: String\n    $attributes: [AttributeWithCategory!]\n    $category: String\n  ) {\n    products(\n      count: $count\n      offset: $offset\n      orderBy: $orderBy\n      search: $search\n      attributes: $attributes\n      category: $category\n    ) {\n      products {\n        id\n        title\n        imageUrl\n        description\n        createdAt\n        rating\n        price\n        categories {\n          id\n          key\n          parentId\n          name\n          createdAt\n        }\n        attributes {\n          id\n          key\n          category {\n            id\n            key\n            name\n            order\n            createdAt\n          }\n          name\n          description\n          createdAt\n        }\n      }\n      meta {\n        offset\n        count\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query Products(\n    $count: Int\n    $offset: Int\n    $orderBy: String\n    $search: String\n    $attributes: [AttributeWithCategory!]\n    $category: String\n  ) {\n    products(\n      count: $count\n      offset: $offset\n      orderBy: $orderBy\n      search: $search\n      attributes: $attributes\n      category: $category\n    ) {\n      products {\n        id\n        title\n        imageUrl\n        description\n        createdAt\n        rating\n        price\n        categories {\n          id\n          key\n          parentId\n          name\n          createdAt\n        }\n        attributes {\n          id\n          key\n          category {\n            id\n            key\n            name\n            order\n            createdAt\n          }\n          name\n          description\n          createdAt\n        }\n      }\n      meta {\n        offset\n        count\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProductAttributesCategories($category: String!) {\n    productAttributesCategories(category: $category) {\n      id\n      key\n      name\n      order\n      createdAt\n      attributes {\n        id\n        key\n        name\n        description\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductAttributesCategories($category: String!) {\n    productAttributesCategories(category: $category) {\n      id\n      key\n      name\n      order\n      createdAt\n      attributes {\n        id\n        key\n        name\n        description\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CategoryPath($category: String!) {\n    categoryPath(category: $category) {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query CategoryPath($category: String!) {\n    categoryPath(category: $category) {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllCategories {\n    allCategories {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query AllCategories {\n    allCategories {\n      id\n      key\n      parentId\n      name\n      createdAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;