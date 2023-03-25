const knex = require('../database/knex');
const { hash } = require('bcryptjs');

const { AppError } = require('../utils/AppError');
const { isEmailValid } = require('../utils/emailValidation');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password)
      throw new AppError('name, email e password são obrigatórios', 401);

    if (!isEmailValid(email)) throw new AppError('E-mail inválido!', 401);

    const userExists = await knex('users').select('email').where({ email }).first();
    if (userExists) throw new AppError('Usuário já cadastrado!', 401);

    const hashedPassword = await hash(password, 8);
    const [newUser] = await knex('users').insert({ name, email, password: hashedPassword });

    response.status(201).json({ userId: newUser });
  }

  async update(request, response) {
    response.json({ Updated: true, ...request.body });
  }
}

module.exports = UsersController;
