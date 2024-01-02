// queries.js
import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
 query useThis {
  products {
    nodes {
      id
      type
      ... on VariableProduct {
        id
        name
        content
        description
        image {
          sourceUrl
        }
        link
        price
        productId
        salePrice
        variations {
          nodes {
            image {
              link
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`;
