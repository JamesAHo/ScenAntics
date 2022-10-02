import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';




const client = new ApolloClient({
    uri:'/graphql',
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