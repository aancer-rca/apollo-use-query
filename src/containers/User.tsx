
import { useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { userInitialValue, userVar } from '../cache';
import { IUser } from '../models/User.model';
import { GET_ACTIVE_USER } from '../operations/queries/getUser';

const switchUser = (id: number) => {
  let newUser: IUser;
  if (id === 1) {
    newUser = {id: 2, age:30, name: 'Todd'};
  } else {
    newUser = userInitialValue
  }

    userVar(newUser);
}

export const User = () => {
  const activeUser = userVar();
  const reactiveUser = useReactiveVar(userVar);
  const {loading, data, error} = useQuery(GET_ACTIVE_USER);

  return <div>
      <h2>Active User</h2>
      <h3>UseQuery:</h3>
      <ol>
        <li>value: {data?.name || 'undefined'}</li>
        <li>loading: {loading || 'undefined'}</li>
        <li>error: {error || 'undefined'}</li>
      </ol>
      <h3>Reactive value: {reactiveUser?.name}</h3>
      <button onClick={() => switchUser(activeUser?.id)}>
      Switch User
      </button>
  </div> 
}