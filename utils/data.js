const names = [
    'Rhaenyra',
    'Daemon',
    'Viserys',
    'Daenerys',
    'Jon',
    'Arya',
    'Cersei',
];

const appDescriptions = [
    'Winter is coming',
    'There is only one thing we say to death: Not today.',
    'The north remembers',
    'Yes. All men must die, but we are not men.',
    'Tell Cersei. I want her to know it was me.',
    'You  know nothing, Jon Snow',
    'When you play the game of thrones, you win or you die. There is no middle ground',
];

const reactions = [
    'Like',
    'Heart',
    'Dislike',
    'Angry',
    'Sad',
    'Wow',
]
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random name
const getRandomName = () =>
    `${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to thought object.
const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(appDescriptions),
            username: getRandomName(names),
        });
    }
    return results;
};

// Function to generate random reactions that we can add to thought object.
const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomReactions };
