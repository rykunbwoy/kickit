module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send('Home route test...')
  })
}