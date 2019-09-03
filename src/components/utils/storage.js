function getItem(todo) {
  JSON.parse(localStorage.getItem(todo))
};

function setItem(todo) {
  localStorage.setItem("todos", JSON.stringify(todo))
};

export {
  getItem,
  setItem
}
