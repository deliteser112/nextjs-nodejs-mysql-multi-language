module.exports = (sequelize, Sequelize) => {
  const Contents = sequelize.define('tblcontents', {
    image: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    paragraph: {
      type: Sequelize.TEXT
    },
    htitle: {
      type: Sequelize.STRING
    },
    hdtitle: {
      type: Sequelize.TEXT
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });

  return Contents;
};