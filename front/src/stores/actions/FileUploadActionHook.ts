import { useFileUploadMutation } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'

/**
 * ファイルアップロードを行う
 */
export function useFileUploadAction() {
  const [fileUploadMutation] = useFileUploadMutation()

  return useCallback(
    async (file: File): Promise<string> => {
      console.log('useFileUploadAction execute()', {
        file,
      })
      const result = await fileUploadMutation({
        variables: {
          file: {
            file,
          },
        },
      })
      console.log('useFileUploadAction execute() result', result)

      return result.data?.fileUpload?.path || ''
    },
    [fileUploadMutation],
  )
}
