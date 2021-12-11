import React, { useState } from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { useHealthCheckAction } from '../stores/actions/HealthCheckActionHook'
import { useFileUploadAction } from '../stores/actions/FileUploadActionHook'
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

/**
 * MainPage
 */
const MainPage = () => {
  // state
  const rootState = useSelector((_state: RootState) => _state)

  // actions
  const healthCheckAction = useHealthCheckAction()
  const fileUploadAction = useFileUploadAction()
  // const { loading, error, data } = useHealthCheckQuery()

  const [uploadFile, setUploadFile] = useState<File>()

  /**
   * ヘルスチェックを実行
   */
  const onClickHealthCheckButton = async () => {
    console.log('MainPage onClickHealthCheckButton()')
    const result = await healthCheckAction()
    console.log({
      result,
    })
  }

  /**
   * ファイルアップロードを実行
   */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (uploadFile) {
      const result = await fileUploadAction(uploadFile)
    }
  }

  // if (loading) return <p>Loading ...</p>
  // if (error) return <p>Error :(</p>

  return (
    <Container>
      {/* file upload */}
      <Section>
        <form onSubmit={onSubmit}>
          <ContentTitle>ファイルアップロードテスト</ContentTitle>
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
          <div>
            <p>
              結果：{' '}
              {rootState.fileUpload.success == null
                ? ''
                : rootState.fileUpload.success
                ? '成功'
                : '失敗'}
            </p>
            <p>ファイルパス： {rootState.fileUpload.filePath}</p>
          </div>
        </form>
      </Section>

      {/* health check */}
      <Section>
        <ContentTitle>ヘルスチェック</ContentTitle>
        <div>
          <button type="button" onClick={onClickHealthCheckButton}>
            実行
          </button>
        </div>
        <div>
          <p>
            結果:
            {rootState.healthCheck.success == null
              ? ''
              : rootState.healthCheck.success
              ? '成功'
              : '失敗'}
          </p>
          <p>日時：{rootState.healthCheck.checkDate}</p>
        </div>
      </Section>
    </Container>
  )
}

/**
 * style
 */
type StyledProps = LayoutProps & SpaceProps

// container
const Container = styled.div<StyledProps>`
  display: flex;
`

const Section = styled.section<StyledProps>`
  background-color: azure;
  margin: 20px;
  padding: 20px;
`

// content title
const ContentTitle = styled.header<StyledProps>`
  color: blue;
`

export default MainPage
