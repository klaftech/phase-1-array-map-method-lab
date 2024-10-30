const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function handleIndividualSentence(sentence){
  const wordArray = sentence.split(" ");
  const fixedSentence = wordArray.map(word => capitalizeFirstLetter(word));
  const perfectSentence = fixedSentence.join(" ");
  return perfectSentence;
}

const titleCased = () => {
  const newTutorials = []
  tutorials.forEach(tutorial => newTutorials.push(handleIndividualSentence(tutorial)));
  return newTutorials
}

titleCased()