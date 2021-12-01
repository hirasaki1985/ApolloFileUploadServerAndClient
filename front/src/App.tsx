import React from 'react'
import './App.css'
import AppApolloClient from './data_sources/graphql/AppApolloClient'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

// store
import store from './stores'

// apollo client
export const apolloClient = AppApolloClient.getClientInstance()

// pages
import MainPage from './pages/MainPage'

/**
 * App
 */
function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <MainPage />
      </ApolloProvider>
    </Provider>
  )
}

export default App
