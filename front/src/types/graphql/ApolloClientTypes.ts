import { FileUpload } from './scalars'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  FileUpload: FileUpload
}

/** ファイルアップロードリクエスト */
export type FileUploadRequest = {
  file: Scalars['FileUpload']
}

/** ファイルアップロードレスポンス */
export type FileUploadResponse = {
  __typename?: 'FileUploadResponse'
  path: Scalars['String']
}

/** ヘルスチェック */
export type HealthCheckRequest = {
  _?: InputMaybe<Scalars['Boolean']>
}

/** ヘルスチェック */
export type HealthCheckResponse = {
  __typename?: 'HealthCheckResponse'
  success?: Maybe<Scalars['Boolean']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** ファイルアップロード */
  fileUpload?: Maybe<FileUploadResponse>
}

export type MutationFileUploadArgs = {
  file: FileUploadRequest
}

export type Query = {
  __typename?: 'Query'
  /** ヘルスチェック */
  healthCheck?: Maybe<HealthCheckResponse>
}

export type QueryHealthCheckArgs = {
  input?: InputMaybe<HealthCheckRequest>
}

export type FileUploadMutationVariables = Exact<{
  file: FileUploadRequest
}>

export type FileUploadMutation = {
  __typename?: 'Mutation'
  fileUpload?:
    | { __typename?: 'FileUploadResponse'; path: string }
    | null
    | undefined
}

export type HealthCheckQueryVariables = Exact<{
  request?: InputMaybe<HealthCheckRequest>
}>

export type HealthCheckQuery = {
  __typename?: 'Query'
  healthCheck?:
    | {
        __typename?: 'HealthCheckResponse'
        success?: boolean | null | undefined
      }
    | null
    | undefined
}

export const FileUploadDocument = gql`
  mutation fileUpload($file: FileUploadRequest!) {
    fileUpload(file: $file) {
      path
    }
  }
`
export type FileUploadMutationFn = Apollo.MutationFunction<
  FileUploadMutation,
  FileUploadMutationVariables
>

/**
 * __useFileUploadMutation__
 *
 * To run a mutation, you first call `useFileUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileUploadMutation, { data, loading, error }] = useFileUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useFileUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FileUploadMutation,
    FileUploadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<FileUploadMutation, FileUploadMutationVariables>(
    FileUploadDocument,
    options,
  )
}
export type FileUploadMutationHookResult = ReturnType<
  typeof useFileUploadMutation
>
export type FileUploadMutationResult = Apollo.MutationResult<FileUploadMutation>
export type FileUploadMutationOptions = Apollo.BaseMutationOptions<
  FileUploadMutation,
  FileUploadMutationVariables
>
export const HealthCheckDocument = gql`
  query healthCheck($request: HealthCheckRequest) {
    healthCheck(input: $request) {
      success
    }
  }
`

/**
 * __useHealthCheckQuery__
 *
 * To run a query within a React component, call `useHealthCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthCheckQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHealthCheckQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HealthCheckQuery,
    HealthCheckQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HealthCheckQuery, HealthCheckQueryVariables>(
    HealthCheckDocument,
    options,
  )
}
export function useHealthCheckLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HealthCheckQuery,
    HealthCheckQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HealthCheckQuery, HealthCheckQueryVariables>(
    HealthCheckDocument,
    options,
  )
}
export type HealthCheckQueryHookResult = ReturnType<typeof useHealthCheckQuery>
export type HealthCheckLazyQueryHookResult = ReturnType<
  typeof useHealthCheckLazyQuery
>
export type HealthCheckQueryResult = Apollo.QueryResult<
  HealthCheckQuery,
  HealthCheckQueryVariables
>
