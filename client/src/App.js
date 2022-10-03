import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login'; 
// import app.css


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
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </div>
    
    // <ApolloProvider client={client}>
    //     <div className="App">

    //       <Router>
    //         <Navbar />
    //         <Header />
    //         <Footer />
          
    //       </Router>
    //   </div>


    // </ApolloProvider>
  );
}

export default App;