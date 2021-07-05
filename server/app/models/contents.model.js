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
      type: Sequelize.STRING
    },
    htitle: {
      type: Sequelize.STRING
    },
    hdtitle: {
      type: Sequelize.STRING
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