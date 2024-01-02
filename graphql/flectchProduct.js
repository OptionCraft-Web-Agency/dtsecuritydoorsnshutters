// fetchProduct.js (or you could name it queries.js or something similar)
import { gql } from '@apollo/client';

export const GET_PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
      id
      name
      ... on SimpleProduct {
        price
        description
      }
      ... on VariableProduct {
        variations {
          nodes {
            id
            price
            attributes {
              nodes {
                name
                value
              }
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
