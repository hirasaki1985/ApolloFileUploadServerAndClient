// const proxy = require('http-proxy-middleware')
const createProxyMiddleware = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:3334',
      changeOrigin: true,
      withCredentials: true,
      secure: false,
    }),
  )
}
