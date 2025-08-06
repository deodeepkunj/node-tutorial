const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Asdf@24031994", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
