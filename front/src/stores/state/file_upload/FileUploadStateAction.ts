import { STATE_ACTION_FILE_UPLOAD } from './FileUploadStateType'

export function stateActionFileUpload(success: boolean) {
  return {
    type: STATE_ACTION_FILE_UPLOAD,
    payload: {
      success,
    },
  }
}
