function checkDateOk(array) {
  const arrayFiltered = array.filter(obj => obj.date !== "")

  return arrayFiltered
}

module.exports = { checkDateOk };

