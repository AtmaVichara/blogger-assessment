
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 1, blog_id: 1, title: 'Oh God We Have Copied!', body: "There are too many of us"},
        {user_id: 1, blog_id: 1, title: 'Oh God We Have Copied!', body: "There are too many of us"},
        {user_id: 1, blog_id: 1, title: 'Oh God We Have Copied!', body: "There are too many of us"}
      ]);
    });
};
