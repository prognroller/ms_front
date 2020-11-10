import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import {offsetLimitPagination} from "@apollo/client/utilities";

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: offsetLimitPagination(["type"])
      }
    }
  }
})
const client = new ApolloClient({
  link,
  cache
})

export default client