import { gql } from "@apollo/client";

export const GET_PRODUCT_QUERY = gql`
  query Product($productId: String) {
    product(id: $productId) {
      id
      title
      imageUrl
      description
      createdAt
      rating
      price
      categories {
        id
        key
        parentId
        name
        createdAt
      }
      attributes {
        id
        key
        category {
          id
          key
          name
          order
          createdAt
        }
        name
        description
        createdAt
      }
    }
  }
`;

export const SEARCH_PRODUCTS_QUERY = gql`
  query Products(
    $count: Int
    $offset: Int
    $orderBy: String
    $search: String
    $attributes: [AttributeWithCategory!]
    $category: String
  ) {
    products(
      count: $count
      offset: $offset
      orderBy: $orderBy
      search: $search
      attributes: $attributes
      category: $category
    ) {
      products {
        id
        title
        imageUrl
        description
        createdAt
        rating
        price
        categories {
          id
          key
          parentId
          name
          createdAt
        }
        attributes {
          id
          key
          category {
            id
            key
            name
            order
            createdAt
          }
          name
          description
          createdAt
        }
      }
      meta {
        offset
        count
        total
      }
    }
  }
`;

export const GET_PRODUCT_ATTRIBUTES_CATEGORIES = gql`
  query ProductAttributesCategories($category: String!) {
    productAttributesCategories(category: $category) {
      id
      key
      name
      order
      createdAt
      attributes {
        id
        key
        name
        description
        createdAt
      }
    }
  }
`;

export const GET_CATEGORY_PATH = gql`
  query CategoryPath($category: String!) {
    categoryPath(category: $category) {
      id
      key
      parentId
      name
      createdAt
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    allCategories {
      id
      key
      parentId
      name
      createdAt
    }
  }
`;
