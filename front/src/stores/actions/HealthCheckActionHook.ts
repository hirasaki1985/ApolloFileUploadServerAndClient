import { useHealthCheckQuery } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'

/**
 * ヘルスチェックを行う
 */
export function useHealthCheckAction() {
  const healthCheckQuery = useHealthCheckQuery({ skip: true })

  return useCallback(async (): Promise<boolean> => {
    const result = await healthCheckQuery.refetch({})

    return result.data.healthCheck?.success || false
  }, [healthCheckQuery])
}
