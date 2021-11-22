import { QueryResolvers } from "../../graphql/types/ApolloServerTypes";


export const HealthCheckQuery: QueryResolvers = {
  /**
   * ヘルスチェック
   */
  async healthCheck(_parent, { input }, context, _info) {
    console.log('HealthCheckQuery healthCheck()')
    return {
      success: true
    }
  },
}