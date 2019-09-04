function getItem(todos) {
  return JSON.parse(localStorage.getItem(todos))
};

function setItem(key,val) {
  localStorage.setItem(key, JSON.stringify(val))
};

export {
  getItem,
  setItem
}
