'use strict';
const categoryData = [
  '基本單色', '層次暈染', '各式漸層', '基礎手繪', '立體浮雕', '變化法式',
  '晶石貓眼', '線條變化', '金屬鏡面', '透感水彩', '特殊款式', '基礎課程'
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: categoryData[0],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[1],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[2],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[3],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[4],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[5],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[6],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[7],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[8],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[9],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[10],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: categoryData[11],
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
