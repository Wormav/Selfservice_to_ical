// deletes the dates of the scrap already present in the data

function changeService(array, data) {
  for (let i = 0; i < array.length; i++) {
    let arrayFiltered = data.filter((obj) => obj.date !== array[i].date);

    data = arrayFiltered;
  }
  return data;
}

module.exports = {
  changeService,
};
