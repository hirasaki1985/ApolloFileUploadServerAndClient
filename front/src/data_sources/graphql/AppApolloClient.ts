import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import DotEnvUtil from '../../utils/DotEnvUtil'

const apolloConfig = DotEnvUtil.apolloConfig()

console.log('AppApolloClient', {
  apolloConfig,
})

/**
 * cache
 */
const inMemoryCacheOption = {}
const cache = new InMemoryCache(inMemoryCacheOption)

/**
 * http link
 */
const httpLink = createHttpLink({
  uri: apolloConfig.url,
})

/**
 * file upload link
 */
const fileUploadLink = createUploadLink({
  uri: apolloConfig.url,
})

/**
 * Error link
 */
const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    console.log('AppApolloClient errorLink execute()')
    console.log({
      graphQLErrors,
      networkError,
    })
    try {
      if (networkError) console.log(`[Network error]: ${networkError}`)

      forward(operation)
    } catch (e) {
      console.error(e)
    }
  },
)

/**
 * directional link
 */
const directionalLink = new RetryLink().split(
  (operation) => {
    console.log(operation)
    if (['fileUpload'].includes(operation.operationName)) {
      return false
    }
    return true
  },

  // left is true
  from([httpLink]),

  // right is false
  from([fileUploadLink]),
)
// const directionalLink = httpLink

/**
 * ApolloClient
 */
const client = new ApolloClient({
  link: from([errorLink, directionalLink]),
  uri: apolloConfig.url,
  cache,
})

/**
 * AppApolloClient
 */
export default class AppApolloClient {
  public static getClientInstance() {
    return client
  }

  public static getCache() {
    return cache
  }
}
