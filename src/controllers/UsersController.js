const { AppError } = require('../utils/AppError');

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password)
      throw new AppError('name, email e password são obrigatórios', 401);

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
