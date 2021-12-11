import { useHealthCheckLazyQuery } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { stateActionHealthCheck } from '../state/health_check/HealthCheckStateAction'
import moment from 'moment'

/**
 * ヘルスチェックを行う
 */
export function useHealthCheckAction() {
  const dispatch = useDispatch()
  const [healthCheckQuery] = useHealthCheckLazyQuery()

  return useCallback(async (): Promise<boolean> => {
    console.log('useHealthCheckAction execute()')

    // execute health check
    const result = await healthCheckQuery()
    const success = result?.data?.healthCheck?.success || false
    console.log('useHealthCheckAction execute() result', result)

    // dispatch
    dispatch(
      stateActionHealthCheck(success, moment().format('YYYY-MM-DD HH:MM:ss')),
    )

    return success
  }, [healthCheckQuery])
}
