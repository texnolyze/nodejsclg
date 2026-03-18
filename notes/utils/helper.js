// скрипт помошник с дополнительными функциями для index.js
const reindexId = (notes) => {
  return notes.map((notes, index) => ({...notes, id:index + 1}));
};

const statsNotes = (notes) => {
  console.log(`Всего заметок ${notes.length}`);
};
// проверка на пустой ввод
const isEmptyInput = (input) => {
  return !input || input.trim() === "";
};

// форматирование текста
const toUpper = (text) => {
  return text.toUpperCase();
};

module.exports = { reindexId, statsNotes, isEmptyInput, toUpper };
