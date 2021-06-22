import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';

export const client = new ApolloClient({
  cache,
  // Issue: Local only Resolvers are deprecated so I cannot use them
  // resolvers :{ Mutation: {
  //   updateActiveUser:  (cache, payload) => {
  //     console.log('payload: ', payload);
  //       return { id: payload?.id, name: payload?.name, age: payload?.age};
  //   },}},
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
