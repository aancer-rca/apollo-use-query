
import { gql } from "@apollo/client";
import { GET_ACTIVE_USER } from "../queries/getUser";

export const UPDATE_ACTIVE_USER = gql`
  mutation UpdateActiveUser($id: integer!, $name: String!, $age: integer!) {
    updateActiveUser(id: $id, name: $name, age: $age) @client { 
      id  
      name
      age
    }
  }
`

export const updateUserCache = (cache, { data }) =>
{
  console.log(cache.data.data);
  console.log(data);
  // Fetch the user from the cache
  const existingData = cache.readQuery({
    query: GET_ACTIVE_USER
  });

  // Add the new todo to the cache
  const newUser = data.updateActiveUser;
  cache.writeQuery({
    query: GET_ACTIVE_USER,
    data: { activeUser: { ...existingData.activeUser,...newUser } }
  });
}