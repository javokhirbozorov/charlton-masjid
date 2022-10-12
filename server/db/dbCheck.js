const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена!');
  } catch (err) {
    console.error('База не подключена', err.message);
  }
};
