const API = require('../error/ApiError')

const ApiError = class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.)
    }
    res.json(id)
  }
}

module.exports = new UserController()
