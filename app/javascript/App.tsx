import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

export const App = () => {
  return (
    <ApolloProvider client={client} >
      
    </ApolloProvider>
  )
}