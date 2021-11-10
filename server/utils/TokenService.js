const jwt = require("jsonwebtoken");
class TokenService {
  constructor() {
    this.secretCode = process.env.JWT_SECRET_KEY || "secretKey";
    this.expiryToken = "1h";
  }
  createEmptyToken() {
    return jwt.sign({}, this.secretCode);
  }
  create(payload = null) {
    return (
      payload &&
      jwt.sign({ ...payload }, this.secretCode, {
        expiresIn: this.expiryToken,
      })
    );
  }

  decode(token) {
    return jwt.verify(token, this.secretCode);
  }
}
module.exports = new TokenService();
