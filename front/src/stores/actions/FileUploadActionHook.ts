import { useFileUploadMutation } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { stateActionFileUpload } from '../state/file_upload/FileUploadStateAction'

/**
 * ファイルアップロードを行う
 */
export function useFileUploadAction() {
  const dispatch = useDispatch()
  const [fileUploadMutation] = useFileUploadMutation()

  return useCallback(
    async (file: File): Promise<string> => {
      console.log('useFileUploadAction execute()', {
        file,
      })

      // execute file upload
      const result = await fileUploadMutation({
        variables: {
          file: {
            file,
          },
        },
      })

      const success = !!result.data?.fileUpload?.path
      const filePath = result.data?.fileUpload?.path || ''

      // dispatch
      dispatch(stateActionFileUpload(success, filePath))

      return filePath
    },
    [fileUploadMutation],
  )
}
