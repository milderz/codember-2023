// const getChallengeData = async () => {
//   const res = await fetch("https://codember.dev/data/message_01.txt");
//   const data = await res.text();
//   return data;
// };

const data = fetch("https://codember.dev/data/message_01.txt")
  .then((res) => res.text())
  .then((data) => data);

const countWords = async (text) => {
  const wordsCount = {};
  const string = await text;
  const result = [];

  const words = string.split(" ");
  for (let word of words) {
    word = word.trim();
    if (!wordsCount[word]) {
      wordsCount[word] = 1;
    } else {
      wordsCount[word]++;
    }
  }

  for (const word in wordsCount) {
    result.push(`${word}${wordsCount[word]}`);
  }

  console.log(result.join(""));
};

countWords(data);
