import React, { useEffect, useState } from 'react'
import { useHealthCheckAction } from '../stores/actions/HealthCheckActionHook'
import { useFileUploadAction } from '../stores/actions/FileUploadActionHook'
import { useHealthCheckQuery } from '../types/graphql/ApolloClientTypes'

const MainPage = () => {
  const healthCheckAction = useHealthCheckAction()
  // const fileUploadAction = useFileUploadAction()
  const { loading, error, data } = useHealthCheckQuery()

  // const [uploadFile, setUploadFile] = useState<File>()

  const onClickHealthCheckButton = async () => {
    console.log('MainPage onClickHealthCheckButton()')
    const result = await healthCheckAction()
    console.log({
      result,
    })
  }
  /*
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (uploadFile) {
      const result = await fileUploadAction(uploadFile)
      console.log('MainPage onSubmit()')
      console.log({
        uploadFile,
        result,
      })
    }
  }
  */

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error :(</p>

  console.log({ loading, error, data })

  return (
    <div>
      <form>
        {' '}
        {/*onSubmit={onSubmit}>*/}
        <header>ファイルアップロードテスト</header>
        <div className="form-group">
          <label htmlFor="file">File upload</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={(event) => {
              if (event.target.files) {
                if (event.target.files.length > 0) {
                  // setUploadFile(event.target.files[0])
                }
              }
            }}
            className="form-control"
          />
        </div>
        <button type="submit">アップロード実行</button>
      </form>

      <div>
        ヘルスチェック
        <div>
          <button type="button" onClick={onClickHealthCheckButton}>
            実行
          </button>
        </div>
        <div>
          結果：
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
