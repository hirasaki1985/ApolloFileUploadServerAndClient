import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from '../graphql/types/ApolloServerTypes';
import {HealthCheckQuery} from './resolvers/HealthCheckResolver';
import {FileUploadMutation} from './resolvers/FileUploadResolver';

const Query: QueryResolvers = {
  ...HealthCheckQuery,
};

const Mutation: MutationResolvers = {
  ...FileUploadMutation,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
