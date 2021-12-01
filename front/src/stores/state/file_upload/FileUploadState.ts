import {
  STATE_ACTION_FILE_UPLOAD,
  stateActionFileUploadTypes,
} from './FileUploadStateType'

export interface FileUploadState {
  success: boolean
}

export const initializeState: FileUploadState = {
  success: true,
}

export function FileUploadReducer(
  state: FileUploadState = initializeState,
  action: stateActionFileUploadTypes,
): FileUploadState {
  switch (action.type) {
    case STATE_ACTION_FILE_UPLOAD:
      state.success = action.payload.success
      return state

    default:
      return state
  }
}
