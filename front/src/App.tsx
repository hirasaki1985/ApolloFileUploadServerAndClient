import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppApolloClient from "./data_sources/graphql/AppApolloClient";
import {ApolloProvider} from "@apollo/client";


export const apolloClient = AppApolloClient.getClientInstance()

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
