import {
  STATE_ACTION_HEALTH_CHECK,
  stateActionHealthCheckTypes,
} from './HealthCheckStateType'

export interface HealthCheckState {
  success: boolean
}

export const initializeState: HealthCheckState = {
  success: true,
}

export function HealthCheckReducer(
  state: HealthCheckState = initializeState,
  action: stateActionHealthCheckTypes,
): HealthCheckState {
  switch (action.type) {
    case STATE_ACTION_HEALTH_CHECK:
      state.success = action.payload.success
      return state

    default:
      return state
  }
}
