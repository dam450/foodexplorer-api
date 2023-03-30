const { AppError } = require('../utils/AppError');
const { compare } = require('bcryptjs');

const knex = require('../database/knex');

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) throw new AppError('E-mail e senha são obrigatórios!', 401);

    const user = await knex('users').select('*').where({ email }).first();
    if (!user) throw new AppError('Usuário não encontrado!', 404);
    console.log(user);

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) throw new AppError('Senha incorreta!', 401);

    // TODO: Generate Token

    res.status(201).json({ data: { email, password }, user });
  }
}

module.exports = SessionsController;
