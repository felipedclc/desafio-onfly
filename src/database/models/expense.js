/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    description: DataTypes.STRING,
    value: DataTypes.NUMBER,
    expenseDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  { timestamps: false, tableName: 'expenses', underscored: true });

  Expense.associate = (models) => {
    Expense.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };
  
  return Expense;
};