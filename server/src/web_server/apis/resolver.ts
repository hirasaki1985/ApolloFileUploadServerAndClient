import {MutationResolvers, QueryResolvers, Resolvers} from "../graphql/types/ApolloServerTypes";
import {HealthCheckQuery} from "./resolvers/HealthCheckResolver";
// import { FileUpload } from '../graphql/scalars';
import { GraphQLUpload } from "graphql-upload";

const Query: QueryResolvers = {
  ...HealthCheckQuery
}

const Mutation: MutationResolvers = {

}

export const resolvers: Resolvers = {
  Query,
  Mutation,
  // FileUpload: GraphQLUpload,
};
