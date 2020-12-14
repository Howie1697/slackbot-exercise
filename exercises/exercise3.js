// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'An Example Script',
    prompt: 'Good Evening',
    handler: function () {
      return 'Good Evening to You!';
    },
    //I want the bot to find the to be have a varity of moods when asked a question.

    label: 'Whats your mood bot',
    prompt: 'Next are you happy',
    handler: function () {
      return 'Yes i am';
    }, //this will tell me what my name is
    label: 'I want to make a discord bot',
    prompt: 'What is my #{name}',
    handler: function (params) {
      const customer = params.name;
      return 'Your name is ' + params.name;
    },
    isCaseSensitive: false,
    isListening: true,
  },
  {
    //This will return the users status if he is online or not
    label: 'Whats my status',
    prompt: 'Am offline or online?',
    handler: function () {
      const onlineStatus = 20;
      const offlineStatus = 75;
      const num = 50;
      if (onlineStatus < 50) {
        return 'You are online!';
      } else if (offlineStatus > 50) {
        return 'You are offline!';
      } else {
        return 'You need better internet.....';
      }
    },
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'This is a magic eight ball buddy',
    prompt: 'My name is #{userName}, whats my destiny',
    handler: function (params) {
      let userName = params.userName;
      userName
        ? console.log('Hello,' + userName + ' !')
        : console.log('Hello!');
      const randomNumber = Math.floor(Math.random() * 8);
      let eightBall = '';
      switch (randomNumber) {
        case 0:
          eightBall = 'Reconsider this question';
          break;
        case 1:
          eightBall = 'Here we go agian...';
          break;
        case 2:
          eightball = 'Really dude? why... like why...';
          break;
        case 3:
          eightBall = 'I dont get paid enough for this';
          break;
        case 4:
          eightBall = 'Its not what your doing right now bud.';
          break;
        case 5:
          eightBall = 'Eh, maybe you have some purpose';
          break;
        case 6:
          eightBall = 'You can be a sailor';
          break;
        case 7:
          eightBall = 'Just be a programmer and live happy!';
          break;
      }
      console.log(eightBall);
    },
    isCaseSensitive: false,
    isListening: true,
    isreply: true,
  },
  {
    label: 'What is 2 + 2',
    prompt: ' whats #{number} + #{number1}',
    handler: function (params) {
      if (params.number === '' && params.number1 === '') {
        return '';
      } else {
        return null;
      }
    },
    isCaseSensitive: false,
    isListening: true,
    isreply: true,
  },
  {
    label: 'Hard day',
    prompt: 'today was rough',
    handler: function () {
      return 'im sorry, would you like to talk about it?';
    },

    isCaseSensitive: false,
    isListening: true,
    isreply: true,
  },
  {
    label:
      'Its race day! If you registered at a certain time come grab your time and number!',
    prompt: 'what time do i race and whats my number?',
    handler: function () {
      let raceNumber = Math.floor(Math.random() * 1000);
      let registeredEarly = true;
      let runnersAge = '18';
      if ((runnersAge += '18' && registeredEarly)) {
        console.log(
          'Your number is' +
            ' ' +
            raceNumber +
            '. ' +
            'You may start your engines!!!!!'
        );
      } else if ((runnersAge += '18' && !registeredEarly)) {
        console.log('We are sorry you will race at 11:00am');
      } else if (!runnerAge < '18') {
        console.log(raceNumber + ' ' + ' You will race at 12:30');
      } else {
        console.log('Please head to your registration table');
      }
    },
    isCaseSensitive: false,
    isListening: true,
    isreply: true,
  },
  {
    label: 'Im very tired and crammed with homework what do i do',
    prompt: 'im very tired what do i do?',
    handler: function () {
      return 'You tried man, you passed your final pre-calc exam with an A and submitted a 10 page essay. goto bed.';
    },

    isCaseSensitive: false,
    isListening: true,
    isreply: true,
  },
];
