const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]
    sayHello: String
    userList: [Author!]!
    userFind(name: String): [Author!]!
    userMatch(name: String): [Author!]!
  }

  type Mutation {
    createUser(name: String!, password: String!): Author!
    loginUser(name: String!, password: String!): Author!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
    password: String!
    token: String
  }
`;
module.exports = typeDefs;
