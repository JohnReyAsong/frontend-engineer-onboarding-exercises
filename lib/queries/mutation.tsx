import { gql } from "@apollo/client";

export const FETCH_PRODUCTS_QUERY = gql`
  {
    queryArtists(byName: "Ed Sheeran") {
      name
      id
      image
      albums {
        name
        id
        image
        tracks {
          id
          name
          preview_url
          artists {
            name
          }
        }
      }
    }
  }
`;
