export function rps(args) {
  const choices = ['rock', 'paper', 'scissors'];
  const opponentChoice = choices[Math.floor(Math.random() * choices.length)];

  const helpMsg = `
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
    Options:
        -h, --help      Display this help message and exit
        -r, --rules     Display the rules and exit
    
    Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
    
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}
  `;
  
  const rulesMsg = `
    Rules for Rock Paper Scissors:
    
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors
  `;

  const userInput = args[0];

  switch (userInput) {
    case undefined:
      console.log(`{"player":"${computerChoice}"}`);
      break;
    case '-h':
    case '--help':
      console.log(helpMsg);
      break;
    case '-r':
    case '--rules':
      console.log(rulesMsg);
      break;
    case 'rock':
    case 'paper':
    case 'scissors':
      const result = (userInput === opponentChoice)
        ? 'tie'
        : (
          (userInput === 'rock' && opponentChoice === 'scissors') ||
          (userInput === 'paper' && opponentChoice === 'rock') ||
          (userInput === 'scissors' && opponentChoice === 'paper')
        ) ? 'win'
          : 'lose';

      console.log(`{"player":"${userInput}","opponent":"${opponentChoice}","result":"${result}"}`);
      break;
    default:
      console.log(`Invalid choice: ${userInput}`);
      break;
  }
}

export function rpsls(args) {
  const choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`;

  const help = `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        -h, --help        display this help message and exit
        -r, --rules       display the rules and exit
    Examples:
    node-rpsls        Return JSON with single player RPSLS result.
        e.g. {"player":"rock"}
    node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
        e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

  const input = args[0];
  switch (input) {
    case undefined:
      console.log(`{"player":"${computerChoice}"}`);
      break;
    case '-r':
    case '--rules':
      console.log(rules);
      break;
    case '-h':
    case '--help':
      console.log(help);
      break;
    case 'rock':
    case 'scissors':
    case 'paper':
    case 'lizard':
    case 'spock':
      const result =
        input === computerChoice
          ? 'tie'
          : (
              (input === 'rock' && computerChoice === 'scissors') ||
              (input === 'paper' && computerChoice === 'rock') ||
              (input === 'scissors' && computerChoice === 'paper') ||
              (input === 'lizard' && computerChoice === 'paper') ||
              (input === 'spock' && computerChoice === 'scissors') ||
              (input === 'rock' && computerChoice === 'lizard') ||
              (input === 'paper' && computerChoice === 'spock')
            ) ? 'win' : 'lose';
      console.log(`{"player":"${input}","opponent":"${computerChoice}","result":"${result}"}`);
      break;
    default:
      console.log(rules);
      break;
  }
}
