function getItem(todos) {
  return JSON.parse(localStorage.getItem(todos))
};

function setItem(todo) {
  localStorage.setItem("todos", JSON.stringify(todo))
};

export {
  getItem,
  setItem
}
