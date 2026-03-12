// Скрипт помошник с дополнительными функциями для index.js (note.js)
const reindexId = (notes) => {
  return notes.map((notes, index) => ({...notes, id:index + 1}));
};

module.exports = {reindexId};
