
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import {  userVar } from '../cache';
import { UPDATE_ACTIVE_USER, updateUserCache } from '../operations/mutations/editUser';
import { GET_ACTIVE_USER } from '../operations/queries/getUser';


export const User = () => {
  const [updateUser] = useMutation(UPDATE_ACTIVE_USER, {update: updateUserCache});
  const {loading, data, error} = useQuery(GET_ACTIVE_USER);
  const reactiveUser = useReactiveVar(userVar);

  const switchUser = () => {
    const activeUser = userVar();
    if (activeUser?.id === 1) {
      updateUser({variables: { id: 2, name: 'Todd' }});
    } else {
      updateUser({variables: { id: 1, name: 'James' }});
    }
  
  }
  
  return <div>
      <h2>Active User</h2>
      <h3>UseQuery:</h3>
      <ol>
        <li>value: {data?.activeUser.name || 'undefined'}</li>
        <li>loading: {loading?.toString() || 'undefined'}</li>
        <li>error: {error?.toString() || 'undefined'}</li>
      </ol>
      <h3>Reactive value: {reactiveUser?.name}</h3>
      <button onClick={() => switchUser()}>
      Switch User
      </button>
  </div> 
}