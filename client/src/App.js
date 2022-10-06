import React from 'react';
import { Routes, Route} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login'; 
import MovieList from './pages/MovieList';
import Play from './components/Play'
import Genre from './pages/Genre'
import SingleMoviePage from './components/SingleMovie';
// import app.css


// creating backend graphql link to initialize authentication
const backendLink = createHttpLink({
  uri: '/graphql'
})
// Authenciation links
const AuthenciationLinks = setContext((_, { headers }) => {
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
       
        <Navbar />
        <Header />
        {/* this might have to be rearranged vvv */}
       
      <div className=" h-[calc(100vh-100px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        {/* <Play/> */}
         <div className="flex-1 h-fit pb-40">
          <Routes>
            <Route path='/' element={<MovieList/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/movie/:id' element={<SingleMoviePage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/genre' element={<Genre />}/>
          </Routes>
          </div>
        </div>
        
        <Footer />
      </div>


    </ApolloProvider>
  );
}

export default App;