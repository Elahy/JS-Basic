import Book from "./Book.js";

const rupali = new Book(
  "Rupali Chad",
  "Humayun Ahmed",
  "200Tk",
  2002,
  166,
  166,
  "Finished"
);

console.log(rupali);

const augni = new Book(
  "Augnibina",
  "Kazi Nazrul Islam",
  "120Tk",
  1956,
  120,
  120,
  "Finished"
);

console.log(augni);

const noynoy = new Book(
  "Noy Noy Sunno Tin",
  "Dr. Muhammad Zafar Iqbal",
  "180Tk",
  2007,
  142,
  126,
  "Reading"
);

noynoy.updateCurrentPage(142);
noynoy.updateReadStatus("Finished");
console.log(noynoy);
