import React, { useEffect, useState } from 'react'
import { useHealthCheckAction } from '../stores/actions/HealthCheckActionHook'
import { useFileUploadAction } from '../stores/actions/FileUploadActionHook'

const MainPage = () => {
  const healthCheckAction = useHealthCheckAction()
  const fileUploadAction = useFileUploadAction()

  const [uploadFile, setUploadFile] = useState<File>()

  useEffect(() => {
    ;(async () => {
      const result = await healthCheckAction()
      console.log('MainPage healthCheck()')
      console.log({
        result,
      })
    })()
  })

  const onSubmit = async () => {
    if (uploadFile) {
      const result = await fileUploadAction(uploadFile)
      console.log('MainPage onSubmit()')
      console.log({
        uploadFile,
        result,
      })
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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
                  setUploadFile(event.target.files[0])
                }
              }
            }}
            className="form-control"
          />
        </div>
        <button type="submit">アップロード実行</button>
      </form>
    </div>
  )
}

export default MainPage
