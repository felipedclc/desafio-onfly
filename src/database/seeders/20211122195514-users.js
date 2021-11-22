module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        id: 1,
        fullName: 'Felipe Cardoso',
        email: 'felipedclc@gmail.com',
        password: 1234,
      },
      {
        id: 2,
        fullName: 'Fulana Pereira',
        email: 'fulana@test.com',
        password: '1234',
      },
    ],
    {
      timestamps: false
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};