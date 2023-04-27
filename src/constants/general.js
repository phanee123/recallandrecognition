const TEST1_WORDS = [
  "House",
  "Tree",
  "Diamond",
  "Church",
  "Comb",
  "Battery",
  "Clock",
  "Cotton",
  "Payment",
  "Pencil",
  "Doctor",
  "Deer",
  "Book",
  "Flower",
  "Elephant",
];

const TEST2_WORDS = [
  "House",
  "Tree",
  "Diamond",
  "Church",
  "Comb",
  "Battery",
  "Clock",
  "Cotton",
  "Payment",
  "Pencil",
  "Doctor",
  "Deer",
  "Book",
  "Flower",
  "Elephant",
  "Mobile",
  "Pillow",
  "Lunch",
  "Paper",
  "Clip",
  "Laptop",
  "Animal",
  "Balloon",
  "Chocolate",
  "Window",
  "Chair",
  "Cup",
  "Paint",
  "Cotton",
  "Dolphin",
];

const shuffleArray = (array) => {
  const data = [...array];
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const NUMBER_OF_SECONDS = 10;
export { TEST1_WORDS, TEST2_WORDS, shuffleArray, NUMBER_OF_SECONDS, getRandomInt };
