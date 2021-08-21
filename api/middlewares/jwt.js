const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send("Unauthorized")
  const token = req.headers.authorization.split(" ")[1]
  const data = jwt.verify(token, "tradewise")
  if (data) {
    req.user = data
    return next()
  }
  return res.status(401).send("Unauthorized")
}

module.exports = auth 