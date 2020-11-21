const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const db=require('./db9');
const port=process.env.PORT || 9000;
const app=express();
const fs=require('fs');
const typeDefs=fs.readFileSync('./schema9.graphql',{encoding:"utf-8"})
const resolvers=require('./resolver9')
const {makeExecutableSchema}=require('graphql-tools')
const schema=makeExecutableSchema({typeDefs,resolvers})
app.use(cors(),bodyParser.json());
const {graphiqlExpress,graphqlExpress}=require('apollo-server-express')
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.listen(
    port,()=>console.info (
        `Server started on port ${port}`
)
);
