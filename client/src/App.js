import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';


// creating backend graphql link to initialize authentication
const backendLink = createHttpLink({
  uri: '/graphql'
})
// Authenciation links
const AuthenciationLinks = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers, authorization: token ? `Bearer` : ''
    },
  };
});

const client = new ApolloClient({
    link: AuthenciationLinks.concat(backendLink),
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Navbar />
            <Header />
            <Footer />
          
          </Router>
      </div>


    </ApolloProvider>
  );
}

export default App;