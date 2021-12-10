import { useHealthCheckLazyQuery } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'

/**
 * ヘルスチェックを行う
 */
export function useHealthCheckAction() {
  const [healthCheckQuery] = useHealthCheckLazyQuery()

  return useCallback(async (): Promise<boolean> => {
    console.log('useHealthCheckAction execute()')
    const result = await healthCheckQuery()
    console.log('useHealthCheckAction execute() result', result)

    return result?.data?.healthCheck?.success || false
  }, [healthCheckQuery])
}
