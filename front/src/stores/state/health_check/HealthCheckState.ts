import {
  STATE_ACTION_HEALTH_CHECK,
  stateActionHealthCheckTypes,
} from './HealthCheckStateType'

export interface HealthCheckState {
  success: boolean | undefined
  checkDate: string
}

export const initializeState: HealthCheckState = {
  success: undefined,
  checkDate: '',
}

export function HealthCheckReducer(
  state: HealthCheckState = initializeState,
  action: stateActionHealthCheckTypes,
): HealthCheckState {
  switch (action.type) {
    case STATE_ACTION_HEALTH_CHECK:
      state.success = action.payload.success
      state.checkDate = action.payload.checkDate
      return { ...state }

    default:
      return state
  }
}
