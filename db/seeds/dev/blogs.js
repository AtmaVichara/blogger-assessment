
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {user_id: 1, title: 'What it Do', body: 'This is all that we do'}
      ]);
    });
};
