import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppApolloClient from './data_sources/graphql/AppApolloClient'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

// store
import store from './stores'
import MainRouter from './router/MainRouter'

// apollo client
const apolloClient = AppApolloClient.getClientInstance()

/**
 * App
 */
function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <MainRouter />
        </Router>
      </ApolloProvider>
    </Provider>
  )
}

export default App
