module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamps: true, // define coluna createAt e updateAt
    underscored: true,
    underscoredAll: true,
  },
};
