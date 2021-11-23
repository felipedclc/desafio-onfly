module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Expenses', [{
        description: 'trip to San Diego, USA',
        user_id: 1,
        value: 7000.00,
        expense_date: new Date('2015-08-01T19:58:00.000Z'),
      },
      {
        description: 'trip to Lisbon, Portugal',
        user_id: 1,
        value: 5000.00,
        expense_date: new Date('2016-07-03T10:15:00.000Z'),
      },
    ],
    {
      timestamps: false
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Expenses', null, {});
  },
};