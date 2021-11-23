// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'Users', underscored: true });

  Users.associate = (models) => {
    Users.hasMany(models.Expense, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Users;
};