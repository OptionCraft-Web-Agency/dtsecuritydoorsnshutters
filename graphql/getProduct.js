// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
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
        defaultAttributes {
          nodes {
            name
            value
          }
        }
        attributes {
          nodes {
            name
            options
          }
        }
      }
    }
  }
`;