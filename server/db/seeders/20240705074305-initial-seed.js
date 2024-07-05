'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [
      {
        theme: 'history',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        theme: 'literature',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        theme: 'science',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Decks', null, {})
  }
};
