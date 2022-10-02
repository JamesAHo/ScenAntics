const express = require('express');
const {ApolloServer} = require('apollo-server-express')
const {typeDefs, resolvers} = require('./schemas')
require('dotenv').config();
const path = require('path');
const db = require('./config/connection')
const PORT = process.env.PORT || 3001;
const app = express();
// setting up apollo server

const server = new ApolloServer({
  typeDefs, resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    res.json({message: 'This is backend port'})
  });



const startApolloServer = async(typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Graphql is running on port 3001`)
     
    })
  })
    
}
// https://www.apollographql.com/docs/apollo-server/getting-started/
// start the server
startApolloServer(typeDefs, resolvers);
