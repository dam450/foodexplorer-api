const knex = require('../database/knex');
const { hash } = require('bcryptjs');

const { AppError } = require('../utils/AppError');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password)
      throw new AppError('name, email e password são obrigatórios', 401);

    //TODO: validate email

    const user = await knex('users').select('*').where({ email }).first();
    if (user) throw new AppError('Usuário já cadastrado!', 401);

    const hashedPassword = await hash(password, 8);
    const [newUser] = await knex('users').insert({ name, email, password: hashedPassword });

    response.status(201).json({ userId: newUser });
  }
}

module.exports = UsersController;
