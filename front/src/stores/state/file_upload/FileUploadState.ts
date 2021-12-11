import {
  STATE_ACTION_FILE_UPLOAD,
  stateActionFileUploadTypes,
} from './FileUploadStateType'

export interface FileUploadState {
  success: boolean | undefined
  filePath: string
}

export const initializeState: FileUploadState = {
  success: undefined,
  filePath: '',
}

export function FileUploadReducer(
  state: FileUploadState = initializeState,
  action: stateActionFileUploadTypes,
): FileUploadState {
  switch (action.type) {
    case STATE_ACTION_FILE_UPLOAD:
      state.success = action.payload.success
      state.filePath = action.payload.filePath
      return { ...state }

    default:
      return state
  }
}
