'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          themeQuest: 'В каком году была основана Москва? (число)',
          questAnswer: '1147',
          deckId: 1,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто был первым царём из династии Романовых? (имя)',
          questAnswer: 'Михаил',
          deckId: 1,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'В каком году состоялась Куликовская битва?',
          questAnswer: '1380',
          deckId: 1,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто стал первым космонавтом в истории человечества? (фамилия)',
          questAnswer: 'Гагарин',
          deckId: 1,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Какое событие произошло 9 мая 1945 года?',
          questAnswer: 'День Победы',
          deckId: 1,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто написал роман «Война и мир»? (фамилия)',
          questAnswer: 'Толстой',
          deckId: 2,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest:
            'Как называется самая известная пьеса Александра Сергеевича Пушкина?',
          questAnswer: 'Государь',
          deckId: 2,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто является автором романа «Преступление и наказание»? (фамилия)',
          questAnswer: 'Достоевский',
          deckId: 2,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest:
            'Как называется самое известное произведение Николая Васильевича Гоголя?',
          questAnswer: 'Мёртвые души',
          deckId: 2,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто написал повесть «Шинель»? (фамилия)',
          questAnswer: 'Гоголь',
          deckId: 2,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Сколько агрегатных состояний у водки?',
          questAnswer: 'а кто вообще знает?',
          deckId: 3,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто открыл периодический закон химических элементов? (фамилия)',
          questAnswer: 'Менделеев',
          deckId: 3,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто выдвинул теорию относительности?',
          questAnswer: 'Эйнштейн',
          deckId: 3,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Кто открыл электрон? (фамилия)',
          questAnswer: 'Томсон',
          deckId: 3,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeQuest: 'Что такое солнце?',
          questAnswer: 'Звезда',
          deckId: 3,
          userAnswer: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  // второй релиз

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
