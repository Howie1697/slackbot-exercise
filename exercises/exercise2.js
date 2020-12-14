// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"
  {
    label: 'Lets try this',
    prompt: "I'm tired",
    handler: function () {
      return 'Wake up!';
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: false,
  },

  // Write an interaction where one user asks the bot
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  //
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."
  {
    label: 'This script will give us a formula',
    prompt: 'Whats the area of a circle with radius #{anyNumber}',
    handler: function (params) {
      const area = Math.PI * params.anyNumber ** 2;
      return 'The area is ' + Math.ceil(area);
    },
  },

  // Write an interaction where one user asks the bot
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  //
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water."
  {
    label: 'This will be a story about =3 and cody jhonson',
    prompt: 'Tell me a story with #{anyName1} and #{anyName}',
    handler: function (params) {
      const storyTeller =
        params.anyName1 +
        ' and ' +
        params.anyName +
        ' needed some water but it was a desert and oasis are arent real.';
      return storyTeller;
    },
  },
];
