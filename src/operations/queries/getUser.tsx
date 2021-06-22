
import { gql } from "@apollo/client";

export const GET_ACTIVE_USER = gql`
  query getActiveUser {
    activeUser @client { 
      id  
      name  
      age
    }
  }
`