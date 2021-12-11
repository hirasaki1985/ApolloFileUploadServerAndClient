export const STATE_ACTION_HEALTH_CHECK = 'STATE_ACTION_HEALTH_CHECK'

export interface StateActionHealthCheck {
  type: typeof STATE_ACTION_HEALTH_CHECK
  payload: {
    success: boolean
    checkDate: string
  }
}

export type stateActionHealthCheckTypes = StateActionHealthCheck
