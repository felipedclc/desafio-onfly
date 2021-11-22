// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'expenses', underscored: true });

  Users.associate = (models) => {
    Users.hasMany(models.Expenses, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Users;
};