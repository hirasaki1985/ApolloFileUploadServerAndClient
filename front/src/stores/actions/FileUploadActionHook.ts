import { useFileUploadMutation } from '../../types/graphql/ApolloClientTypes'
import { useCallback } from 'react'

/**
 * ファイルアップロードを行う
 */
export function useFileUploadAction() {
  const [fileUploadMutation] = useFileUploadMutation()

  return useCallback(
    async (file: File): Promise<string> => {
      const result = await fileUploadMutation({
        variables: {
          file: {
            file,
          },
        },
      })

      return result.data?.fileUpload?.path || ''
    },
    [fileUploadMutation],
  )
}
