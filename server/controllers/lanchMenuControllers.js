const { LanchMenu } = require("../models");

class LanchMenuController {
  async getAllLanch(req, res) {
    const lanchMenu = await LanchMenu.find({});
    res.status(200).json({
      message: "That's all the lanch menu what is in the database",
      lanchMenu,
    });
  }
  async getLanchById(req, res) {}
  async createNewLanchMenu(req, res) {}
  async updateLanchMenuById(req, res) {}
  async deleteLanchMenuById(req, res) {}
}

module.exports = new LanchMenuController();
