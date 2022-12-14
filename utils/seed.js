const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 3 times -- add thoughts to the thoughts array
  for (let i = 0; i < 3; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const reaction = getRandomReactions();
    const thought = getRandomThoughts(3);
    const username = getRandomName();


    thoughts.push({
      username,
      thought,
      reaction,
    });
  }

  // Add students to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    username: 'Jamie Lanister',
    email: 'jamie@lanister.com',
    Thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
