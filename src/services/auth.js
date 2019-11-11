const auth = (req, res, next) => {
  console.log()
  req.headers.authorization
    ? req.headers.authorization.split(' ')[1] == 'mySecretToken'
      ? next()
      : res.status(401).end()
    : res.status(401).end()
}

export default auth