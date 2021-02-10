'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "The Hobbit",
          isbn: "0618260307",
          publisher:"Houghton Mifflin",
          country: "USA",
          img: "https://images-na.ssl-images-amazon.com/images/I/51I0DivMYcL.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          readerId: 1,
      },
      {
          title:"Slinky Malinki",
          isbn: "0908606664",
          publisher: "Mallinson Rendel",
          country:"NZ",
          img:"https://images-na.ssl-images-amazon.com/images/I/51Yq7pnH3ZL._SY373_BO1,204,203,200_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          readerId: 2,
      },
      {
          title:"Hairy Maclary from Donaldson's Dairy",
          isbn: "1908606206",
          publisher: "Mallinson Rendel",
          country:"NZ",
          img:"https://images-na.ssl-images-amazon.com/images/I/71wftMEW75L.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          readerId: 3,
      },
      ],
      {}
    );
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
