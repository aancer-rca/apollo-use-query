
import { gql } from "@apollo/client";

export const GET_ACTIVE_USER = gql`
  query GetActiveUser {
    activeUser @client { 
      id  
      name  
      age
    }
  }
`