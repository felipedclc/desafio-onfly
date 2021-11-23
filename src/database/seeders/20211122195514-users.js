module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        id: 1,
        full_name: 'Felipe Cardoso',
        email: 'felipedclc@gmail.com',
        password: 1234,
      },
      {
        id: 2,
        full_name: 'Fulana Pereira',
        email: 'fulana@test.com',
        password: '1234',
      },
    ],
    {
      timestamps: false
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};