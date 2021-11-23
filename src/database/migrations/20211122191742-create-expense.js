module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Users', key: 'id' },
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL(12,2)
      },
      expense_date: {
        allowNull: false,
        type: Sequelize.STRING,
      }
      /* expense_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      }, */
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};