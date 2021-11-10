const bcrypt = require("bcrypt");
class BcryptService {
  constructor() {
    this.salfRounds = +process.env.SALT_ROUNDS || 10;
  }

  async hash({ password }) {
    return await bcrypt.hash(password, this.salfRounds);
  }

  async decoded({ password, hashPassword }) {
    return await bcrypt.compare(password, hashPassword);
  }
}
module.exports = new BcryptService();
