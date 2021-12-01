import { STATE_ACTION_HEALTH_CHECK } from './HealthCheckStateType'

export function stateActionHealthCheck(success: boolean) {
  return {
    type: STATE_ACTION_HEALTH_CHECK,
    payload: {
      success,
    },
  }
}
