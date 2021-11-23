module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Expenses', [{
        description: 'trip to San Diego, USA',
        user_id: 1,
        value: 7000.00,
        expense_date: '03/07/2016',
      },
      {
        description: 'trip to Lisbon, Portugal',
        user_id: 1,
        value: 5000.00,
        expense_date: '01/08/2015',
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