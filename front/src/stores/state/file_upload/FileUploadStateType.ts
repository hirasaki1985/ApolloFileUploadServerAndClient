export const STATE_ACTION_FILE_UPLOAD = 'STATE_ACTION_FILE_UPLOAD'

export interface StateActionFileUpload {
  type: typeof STATE_ACTION_FILE_UPLOAD
  payload: {
    success: boolean
    filePath: string
  }
}

export type stateActionFileUploadTypes = StateActionFileUpload
